import { TransactionClassification } from '@penumbra-zone/perspective/transaction/classification';
import { AddressView } from '@penumbra-zone/protobuf/penumbra/core/keys/v1/keys_pb';
import { TransactionInfo } from '@penumbra-zone/protobuf/penumbra/view/v1/view_pb';
import { classifyTransaction } from '@penumbra-zone/perspective/transaction/classify';

import { TransactionSummary_Effects } from '@penumbra-zone/protobuf/penumbra/core/transaction/v1/transaction_pb';
import { assetPatterns } from '@penumbra-zone/types/assets';
import { getOneWaySwapValues, isOneWaySwap } from '@penumbra-zone/types/swap';
import { SwapView } from '@penumbra-zone/protobuf/penumbra/core/component/dex/v1/dex_pb';
import { pnum } from '@penumbra-zone/types/pnum';
import {
  Denom,
  Metadata,
  ValueView,
} from '@penumbra-zone/protobuf/penumbra/core/asset/v1/asset_pb';

import { TaxTransactionEvent } from './common';
import { unpackIbcRelay } from '@penumbra-zone/perspective/action-view/ibc';
import { IbcRelay } from '@penumbra-zone/protobuf/penumbra/core/component/ibc/v1/ibc_pb';
import { fromString } from '@penumbra-zone/types/amount';
import { GetMetadata } from '@/shared/api/assets';

export interface SummaryBalance {
  negative: boolean;
  view: ValueView;
}

export interface SummaryEffect {
  address?: AddressView;
  balances: SummaryBalance[];
}

export interface SummaryData {
  type: TransactionClassification;
  effects: SummaryEffect[];
  label: string;
  memo?: string;
  additionalText?: string;
  assets: Metadata[];
  tickers?: string[];
  address?: AddressView;
}

export const CLASSIFICATION_LABEL_MAP: Record<TransactionClassification, string> = {
  unknown: 'Unknown',
  unknownInternal: 'Unknown (Internal)',
  receive: 'Receive',
  send: 'Send',
  internalTransfer: 'Internal Transfer',
  ics20Withdrawal: 'IBC Withdrawal',
  ibcRelayAction: 'IBC Receive',
  swap: 'Swap',
  swapClaim: 'Swap Claim',
  delegate: 'Delegate',
  undelegate: 'Undelegate',
  undelegateClaim: 'Undelegate Claim',
  dutchAuctionSchedule: 'Auction Schedule',
  dutchAuctionEnd: 'Auction End',
  dutchAuctionWithdraw: 'Auction Withdraw',
  delegatorVote: 'Vote',
  validatorVote: 'Vote',
  communityPoolDeposit: 'Community Pool Deposit',
  communityPoolOutput: 'Community Pool Output',
  communityPoolSpend: 'Community Pool Spend',
  positionClose: 'Close Position',
  positionOpen: 'Open Position',
  positionWithdraw: 'Withdraw Position',
  positionRewardClaim: 'Claim Position Reward',
  proposalDepositClaim: 'Proposal Deposit Claim',
  proposalSubmit: 'Create Proposal',
  proposalWithdraw: 'Withdraw Proposal',
  validatorDefinition: 'Validator Definition',
  liquidityTournamentVote: 'Liquidity Tournament Vote',
};

export const calculateEffects = (
  effects: TransactionSummary_Effects[],
  getMetadataByAssetId?: GetMetadata,
) => {
  return effects.map<SummaryEffect>(effect => {
    const reduced = (effect.balance?.values ?? []).reduce<SummaryEffect['balances']>(
      (accum, balance) => {
        const asset = balance.value?.assetId && getMetadataByAssetId?.(balance.value.assetId);
        const isNegative = !balance.negated;

        // if the asset is unknown, don't sum it up, show simply as unknown
        if (!asset?.penumbraAssetId?.inner) {
          accum.push({
            negative: isNegative,
            view: new ValueView({
              valueView: {
                case: 'unknownAssetId',
                value: {
                  amount: balance.value?.amount,
                  assetId: balance.value?.assetId,
                },
              },
            }),
          });
          return accum;
        }

        // filter out the LpNFT and AuctionNFT assets
        if (
          assetPatterns.lpNft.matches(asset.display) ||
          assetPatterns.auctionNft.matches(asset.display)
        ) {
          return accum;
        }

        accum.push({
          negative: isNegative,
          view: new ValueView({
            valueView: {
              case: 'knownAssetId',
              value: {
                metadata: asset,
                amount: balance.value?.amount,
              },
            },
          }),
        });

        return accum;
      },
      [],
    );

    // sort the balances, non-negative first
    reduced.sort((a, b) => {
      if (a.negative === b.negative) {
        return 0;
      }
      return a.negative ? 1 : -1;
    });

    return {
      balances: reduced,
      address: effect.address,
    };
  });
};

/**
 * Extract the effects from TX summary and map assets to their metadata, while filtering irrelevant assets
 */
export const adaptEffects = (
  effects: TransactionSummary_Effects[],
  getMetadataByAssetId?: GetMetadata,
) => {
  return effects.map<SummaryEffect>(effect => {
    const reduced = (effect.balance?.values ?? []).reduce<SummaryEffect['balances']>(
      (accum, balance) => {
        const asset = balance.value?.assetId && getMetadataByAssetId?.(balance.value.assetId);
        const isNegative = !balance.negated;

        // if the asset is unknown, don't sum it up, show simply as unknown
        if (!asset?.penumbraAssetId?.inner) {
          accum.push({
            negative: isNegative,
            view: new ValueView({
              valueView: {
                case: 'unknownAssetId',
                value: {
                  amount: balance.value?.amount,
                  assetId: balance.value?.assetId,
                },
              },
            }),
          });
          return accum;
        }

        // filter out the LpNFT and AuctionNFT assets
        if (
          assetPatterns.lpNft.matches(asset.display) ||
          assetPatterns.auctionNft.matches(asset.display)
        ) {
          return accum;
        }

        accum.push({
          negative: isNegative,
          view: new ValueView({
            valueView: {
              case: 'knownAssetId',
              value: {
                metadata: asset,
                amount: balance.value?.amount,
              },
            },
          }),
        });

        return accum;
      },
      [],
    );

    // sort the balances, non-negative first
    reduced.sort((a, b) => {
      if (a.negative === b.negative) {
        return 0;
      }
      return a.negative ? 1 : -1;
    });

    return {
      balances: reduced,
      address: effect.address,
    };
  });
};

// fee is always denominated in UM so we don't do any asset resolution
// fee is returned as an integer without any rounding
// for display purposes the number needs to be transformed to a float - with 6 decimals (10^-6)
export function getFeeAmount(info: TransactionInfo) {
  const fee = info.transaction?.body?.transactionParameters?.fee;
  return pnum(fee?.amount).toNumber() / 10 ** 6;
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument -- TS is being annoying here */
export function penumbraTxToTaxEvent(info: TransactionInfo, getMetadata?: GetMetadata) {
  const { type, action } = classifyTransaction(info.view);

  // by default every Tx is an expense because it has fees
  const taxEvent: TaxTransactionEvent = {
    type: 'expense',
    label: CLASSIFICATION_LABEL_MAP[type],
    height: info.height.toString(),
    tx_hash: Buffer.from(info.id?.inner ?? new Uint8Array()).toString('hex'),
    amount_in: 0,
    asset_in: '',
    amount_out: 0,
    asset_out: '',
    fee_amount: getFeeAmount(info),
    fee_asset: 'UM',
  };

  // ibcRelayAction does not have any effects, so it needs special processing
  if (type === 'ibcRelayAction') {
    taxEvent.type = 'income';
    try {
      const unpacked = unpackIbcRelay(action?.actionView.value as IbcRelay);
      let assetDenom = unpacked?.tokenData?.denom ?? 'Unknown';
      let asset: Metadata | undefined = getMetadata?.(new Denom({ denom: assetDenom }));
      if (!asset) {
        // Attribution: copied from package/ui ibc-relay.tsx
        // sometimes denom comes in form of "uosmo", and sometimes as "transfer/channel-4/uosmo",
        // where "transfer" is `sourcePort` and "channel-4" is `sourceChannel`.
        // the next lines extract the denom part from and merges it with destination data.
        // Penumbra is the only asset that doesn't have "transfer" in the denom – hardcode it here.
        const denomMatch = /\/([^/]+)$/.exec(unpacked?.tokenData?.denom ?? 'Unknown');
        assetDenom = `${unpacked?.packet?.destinationPort}/${unpacked?.packet?.destinationChannel}/${denomMatch?.[1] ?? unpacked?.tokenData?.denom}`;
        if (unpacked?.tokenData?.denom === 'upenumbra' || denomMatch?.[1] === 'upenumbra') {
          assetDenom = 'upenumbra';
        }
        asset = getMetadata?.(new Denom({ denom: assetDenom }));
      }
      taxEvent.asset_in = asset?.symbol ?? 'Unknown';
      const amount = fromString(unpacked?.tokenData?.amount ?? '0');

      // NOTE:
      // ibc transfer amounts are in the base denom (transfer/channel-2/uusdc) - exponent 0
      // display units (usdc) - exponent 6
      // [
      //  {denom: 'transfer/channel-2/uusdc', exponent: 0, aliases: Array(0)} -> base denom
      //  {denom: 'transfer/channel-2/usdc', exponent: 6, aliases: Array(0)}  -> display denom
      // ]
      // get display exponent from asset metadata so amounts can be converted to display units correctly
      const displayExponent = asset?.display;
      const exponent =
        asset?.denomUnits.find(unit => unit.denom === displayExponent)?.exponent ?? 0;
      taxEvent.amount_in = pnum(amount, { exponent }).toNumber();
    } catch (e) {
      console.error('error parsing ibc relay action', e);
    }
  }

  // categorize and sum up transaction summary effects
  const effects = calculateEffects(info.summary?.effects ?? [], getMetadata);
  if (effects.length === 0) {
    return taxEvent;
  }

  if (effects[0]?.balances.length === 0) {
    return taxEvent;
  }

  if (type === 'send') {
    taxEvent.type = 'disposal';
    taxEvent.amount_out = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_out =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0]?.balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  if (type === 'receive') {
    taxEvent.type = 'income';
    taxEvent.amount_in = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_in =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0]?.balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  if (type === 'swap') {
    const isOneWay = isOneWaySwap(action?.actionView.value as SwapView);
    if (isOneWay) {
      const swap = getOneWaySwapValues(action?.actionView.value as SwapView, getMetadata);
      taxEvent.type = 'disposal';
      // the input is technically the asset that is being disposed of
      taxEvent.amount_out = pnum(swap.input).toNumber();
      taxEvent.asset_out =
        swap.input.valueView.case === 'knownAssetId'
          ? (swap.input.valueView.value.metadata?.symbol ?? 'Unknown')
          : 'Unknown';
      // the output is technically the asset that is being acquired
      taxEvent.amount_in = pnum(swap.output).toNumber();
      taxEvent.asset_in =
        swap.output.valueView.case === 'knownAssetId'
          ? (swap.output.valueView.value.metadata?.symbol ?? 'Unknown')
          : 'Unknown';
    }
  }

  if (type === 'undelegateClaim') {
    taxEvent.type = 'income';
    taxEvent.label = 'Undelegate Claim';
    taxEvent.amount_in = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_in =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0].balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  if (type === 'ics20Withdrawal') {
    taxEvent.type = 'expense';
    taxEvent.label = 'Withdrawal';
    taxEvent.amount_out = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_out =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0].balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  if (type === 'ibcRelayAction') {
    taxEvent.type = 'expense';
    taxEvent.label = 'IBC Deposit';
    taxEvent.amount_out = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_out =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0].balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  if (type === 'internalTransfer') {
    taxEvent.type = 'expense';
    taxEvent.label = 'Internal Transfer';
    taxEvent.amount_out = pnum(effects[0]?.balances[0]?.view).toNumber();
    taxEvent.asset_out =
      effects[0]?.balances[0]?.view.valueView.case === 'knownAssetId'
        ? (effects[0].balances[0]?.view.valueView.value.metadata?.symbol ?? 'Unknown')
        : 'Unknown';
  }

  return taxEvent;
}
