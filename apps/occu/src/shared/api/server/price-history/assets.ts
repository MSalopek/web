import { NextRequest, NextResponse } from 'next/server';
import { serialize, Serialized } from '@/shared/utils/serializer';

export type PricesByDate = Record<string, number>;
export interface TokenPriceList {
  prices: PricesByDate;
  coingeckoId?: string;
}

// symbol -> { coingeckoId, prices }
export type TokenHistoricPrices = Record<string, TokenPriceList>;

export type HistoricPricesResponse = Serialized<TokenHistoricPrices> | { error: string };

export const GET = async (req: NextRequest): Promise<NextResponse<HistoricPricesResponse>> => {
  try {
    const ids = req.nextUrl.searchParams.get('ids');
    if (!ids) {
      return NextResponse.json({ error: 'Error: ids are required' }, { status: 400 });
    }

    const idsArray = ids.split(',');
    const pricesData = await Promise.all(idsArray.map(getHistoricPrices));

    const result: TokenHistoricPrices = {};
    idsArray.forEach((symbol, index) => {
      const prices = pricesData[index];
      if (prices) {
        result[symbol] = {
          prices: Object.fromEntries(prices.map(p => [p.date, p.price])),
        };
      }
    });

    return NextResponse.json(serialize(result));
  } catch (error) {
    return NextResponse.json({ error: `Error: ${(error as Error).message}` }, { status: 500 });
  }
};

interface PriceFeedAPIResponse {
  prices: {
    date: string;
    price: number;
  }[];
}

const getHistoricPrices = async (symbol: string) => {
  const prices = await fetch(`${process.env['PRICEFEED_API_URL']}/api/token-prices/all/${symbol}`, {
    headers: {
      'x-occu-api-key': process.env['PRICEFEED_API_KEY'] ?? '',
    },
  });
  const data: PriceFeedAPIResponse = (await prices.json()) as PriceFeedAPIResponse;
  return data.prices.map(price => ({
    date: price.date,
    price: Number(price.price.toFixed(5)),
  }));
};
