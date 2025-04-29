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
  AssetId,
  Denom,
  Metadata,
  ValueView,
} from '@penumbra-zone/protobuf/penumbra/core/asset/v1/asset_pb';
import { uint8ArrayToBase64 } from '@penumbra-zone/types/base64';

import { ChainRegistryClient } from '@penumbra-labs/registry';
import { TaxableActions, TaxTransactionEvent } from './common';

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

export const chainRegistryClient = new ChainRegistryClient();

const registry = chainRegistryClient.bundled
  .get('penumbra-1')
  .getAllAssets()
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Asset properties are dynamically added by the registry and cannot be typed statically */
  .sort((a, b) => Number(b.priorityScore) - Number(a.priorityScore));

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument -- TS is being annoying here */
const assetIdMap = registry.reduce<Map<string, Metadata>>((accum, asset) => {
  if (!asset.penumbraAssetId?.inner) {
    return accum;
  }
  accum.set(uint8ArrayToBase64(asset.penumbraAssetId.inner), asset);
  accum.set(asset.base, asset);
  return accum;
}, new Map());

function isDenom(value?: Denom | AssetId): value is Denom {
  return value?.getType().typeName === Denom.typeName;
}

export function getMetadata(id?: AssetId | Denom): Metadata | undefined {
  const key = isDenom(id) ? id.denom : id?.inner && uint8ArrayToBase64(id.inner);
  if (!key) {
    return undefined;
  }

  return assetIdMap.get(key);
}

export type GetMetadata = (assetId?: AssetId | Denom) => Metadata | undefined;

export const DEFAULT_MEMO = 'Memo empty';

export const CLASSIFICATION_LABEL_MAP: Record<TransactionClassification, string> = {
  unknown: 'Unknown',
  unknownInternal: 'Unknown (Internal)',
  receive: 'Receive',
  send: 'Send',
  internalTransfer: 'Internal Transfer',
  ics20Withdrawal: 'Withdrawal',
  ibcRelayAction: 'Deposit',
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
export function penumbraTxToTaxEvent(info: TransactionInfo) {
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
      taxEvent.amount_in = pnum(swap.input).toNumber();
      taxEvent.asset_in =
        swap.input.valueView.case === 'knownAssetId'
          ? (swap.input.valueView.value.metadata?.symbol ?? 'Unknown')
          : 'Unknown';
      taxEvent.amount_out = pnum(swap.output).toNumber();
      taxEvent.asset_out =
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

  return taxEvent;
}

// Filter transactions that are tax events
export function filterTaxableTransactions(txs: TransactionInfo[]) {
  return txs.filter(tx => {
    const { type } = classifyTransaction(tx.view);
    return TaxableActions.has(type);
  });
}
