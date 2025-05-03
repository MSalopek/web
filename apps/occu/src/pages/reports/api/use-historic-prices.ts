import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/shared/utils/api-fetch';
import { useMemo } from 'react';
import { HistoricPricesResponse } from '@/shared/api/server/price-history/assets';
import { TaxTransactionEvent } from '@/calculate-tax/common';

/**
 * Hook to fetch historic asset prices for a list of assets
 * Denominated in USD (from coingecko API)
 */
export const useHistoricAssetPrices = (ids: string[] = [], options?: { enabled?: boolean }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['historic-prices', ids],
    queryFn: async () => {
      if (ids.length === 0) {
        return { prices: {} };
      }

      const response = await apiFetch<HistoricPricesResponse>('/api/price-history', {
        ids: ids.join(','),
      });

      if ('error' in response) {
        const errRes = response as { error: string };
        throw new Error(`failed to fetch historic prices: ${errRes.error}`);
      }

      return response;
    },
    staleTime: 60 * 60 * 1000 * 24 * 365, // 1 year
    enabled: options?.enabled && ids.length > 0,
  });

  const prices = useMemo(() => {
    if (!data) {
      return {};
    }
    return data;
  }, [data]);

  return {
    prices,
    isLoading,
    error,
  };
};

export const useHistoricAssetPricesFromWithLocalStorage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['historic-prices-from-storage'],
    queryFn: async () => {
      // Get transactions from localStorage
      const storedData = localStorage.getItem('tax-transactions');
      if (!storedData) {
        return { prices: {} };
      }

      // Parse transactions and collect unique assets
      const transactions = JSON.parse(storedData) as TaxTransactionEvent[];
      const assetSet = new Set<string>();

      transactions.forEach((tx: TaxTransactionEvent) => {
        if (tx.asset_in) {
          assetSet.add(tx.asset_in);
        }
        if (tx.asset_out) {
          assetSet.add(tx.asset_out);
        }
      });

      const uniqueAssets = Array.from(assetSet);

      if (uniqueAssets.length === 0) {
        return { prices: {} };
      }

      const response = await apiFetch<HistoricPricesResponse>('/api/price-history', {
        ids: uniqueAssets.join(','),
      });

      if ('error' in response) {
        const errRes = response as { error: string };
        throw new Error(`failed to fetch historic prices: ${errRes.error}`);
      }

      return response;
    },
    staleTime: 60 * 60 * 1000 * 24 * 365, // 1 year
  });

  const prices = useMemo(() => {
    if (!data) {
      return {};
    }
    return data;
  }, [data]);

  return {
    prices,
    isLoading,
    error,
  };
};
