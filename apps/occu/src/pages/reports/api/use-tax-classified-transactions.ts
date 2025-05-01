import { useInfiniteQuery } from '@tanstack/react-query';
import { ViewService } from '@penumbra-zone/protobuf';
import { penumbra } from '@/shared/const/penumbra';
import { TaxTransactionEvent } from '@/calculate-tax/common';
import { penumbraTxToTaxEvent } from '@/calculate-tax/transform';
import { GetMetadata } from '@/shared/api/assets';

const BASE_LIMIT = 1000;
const BASE_PAGE = 0;
const STORAGE_KEY = 'tax-transactions';

export const useTaxClassifiedTransactions = (
  subaccount = 0,
  getMetadata?: GetMetadata,
  options?: { enabled?: boolean; startHeight?: number; endHeight?: number },
) => {
  return useInfiniteQuery<TaxTransactionEvent[]>({
    queryKey: ['txs', subaccount],
    initialPageParam: BASE_PAGE,
    enabled: options?.enabled,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length ? (lastPageParam as number) + 1 : undefined;
    },
    queryFn: async ({ pageParam }) => {
      const res = await Array.fromAsync(
        penumbra.service(ViewService).transactionInfo({
          startHeight: options?.startHeight ? BigInt(options.startHeight) : undefined,
          endHeight: options?.endHeight ? BigInt(options.endHeight) : undefined,
        }),
      );

      // Filters and maps the array at the same time
      let reduced = res.reduce<TaxTransactionEvent[]>((accum, tx) => {
        if (!tx.txInfo) {
          return accum;
        }

        accum.push(penumbraTxToTaxEvent(tx.txInfo, getMetadata));
        return accum;
      }, []);

      // TODO: implement sorting by height in the ViewService, and use `limitAsync` here after it
      reduced = reduced.sort((a, b) => Number(b.height) - Number(a.height));

      const offset = BASE_LIMIT * (pageParam as number);
      return reduced.slice(offset, offset + BASE_LIMIT);
    },
  });
};

export const useTaxClassifiedTransactionsWithLocalStorage = (
  subaccount = 0,
  getMetadata?: GetMetadata,
  options?: { enabled?: boolean; startHeight?: number; endHeight?: number },
) => {
  return useInfiniteQuery<TaxTransactionEvent[]>({
    queryKey: ['txs', subaccount],
    initialPageParam: BASE_PAGE,
    enabled: options?.enabled,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length ? (lastPageParam as number) + 1 : undefined;
    },
    queryFn: async ({ pageParam }) => {
      // Try to get data from localStorage first
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const parsed = JSON.parse(storedData) as TaxTransactionEvent[];
        if (parsed.length !== 0) {
          const offset = BASE_LIMIT * (pageParam as number);
          return parsed.slice(offset, offset + BASE_LIMIT);
        }
      }

      // If no stored data, fetch from service
      const res = await Array.fromAsync(penumbra.service(ViewService).transactionInfo({}));

      // Filters and maps the array at the same time
      let reduced = res.reduce<TaxTransactionEvent[]>((accum, tx) => {
        if (!tx.txInfo) {
          return accum;
        }
        if (options?.startHeight) {
          if (Number(tx.txInfo.height) < options.startHeight) {
            return accum;
          }
        }
        if (options?.endHeight) {
          if (Number(tx.txInfo.height) > options.endHeight) {
            return accum;
          }
        }
        accum.push(penumbraTxToTaxEvent(tx.txInfo, getMetadata));
        return accum;
      }, []);

      reduced = reduced.sort((a, b) => Number(b.height) - Number(a.height));

      // Store the complete dataset in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reduced));

      const offset = BASE_LIMIT * (pageParam as number);
      return reduced.slice(offset, offset + BASE_LIMIT);
    },
  });
};

export const updateStoredTransaction = (
  txHash: string,
  updates: {
    // Make all properties optional except when they're included
    date?: Date | null;
    height?: number | string | null;
    tx_hash?: string | null;
    label?: string | null;
    // For required number fields, if included they must be numbers
    amount_in?: number;
    amount_out?: number;
    // For required string fields, if included they must be strings
    asset_in?: string;
    asset_out?: string;
    type?: string;
  },
) => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) {
    return false;
  }

  const transactions: TaxTransactionEvent[] = JSON.parse(storedData) as TaxTransactionEvent[];
  const index = transactions.findIndex(tx => tx.tx_hash === txHash);

  if (index === -1) {
    return false;
  }

  transactions[index] = { ...transactions[index], ...(updates as TaxTransactionEvent) };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  return true;
};
