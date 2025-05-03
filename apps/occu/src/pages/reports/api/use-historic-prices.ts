import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/shared/utils/api-fetch';
import { useMemo } from 'react';
import { HistoricPricesResponse } from '@/shared/api/server/price-history/assets';

/**
 * Hook to fetch historic asset prices for a list of assets
 * Denominated in USD (from coingecko API)
 */
export const useHistoricAssetPrices = (assets: string[] = []) => {
  const ids = useMemo(() => assets.map(asset => asset).filter(Boolean), [assets]);

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
    enabled: ids.length > 0,
  });

  const prices = useMemo(() => {
    if (!data?.prices) {
      return {};
    }
    return data.prices;
  }, [data]);

  return {
    prices,
    isLoading,
    error,
  };
};
