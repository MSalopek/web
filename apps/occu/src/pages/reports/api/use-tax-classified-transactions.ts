import { useInfiniteQuery } from '@tanstack/react-query';
import { ViewService } from '@penumbra-zone/protobuf';
import { penumbra } from '@/shared/const/penumbra';
import { TaxTransactionEvent } from '@/calculate-tax/common';
import { penumbraTxToTaxEvent } from '@/calculate-tax/transform';
import { GetMetadata } from '@/shared/api/assets';

const BASE_LIMIT = 1000;
const BASE_PAGE = 0;

export const useTaxClassifiedTransactions = (subaccount = 0, getMetadata?: GetMetadata) => {
  return useInfiniteQuery<TaxTransactionEvent[]>({
    queryKey: ['txs', subaccount],
    initialPageParam: BASE_PAGE,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length ? (lastPageParam as number) + 1 : undefined;
    },
    queryFn: async ({ pageParam }) => {
      const res = await Array.fromAsync(penumbra.service(ViewService).transactionInfo({}));

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
