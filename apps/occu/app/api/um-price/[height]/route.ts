import { serialize, Serialized } from '@/shared/utils/serializer';
import { NextRequest, NextResponse } from 'next/server';
import {
  PENUMBRA_HEIGHT_TRADING_START,
  PENUMBRA_PRICE_BEFORE_TRADING_START,
} from '@/algo/constants';
import { pindexer } from '@/shared/database';

export type UMPriceApiResponse =
  | {
      price: number | string;
    }
  | { error: string };

// TODO: add tanstack query
export async function GET(
  _req: NextRequest,
  { params }: { params: { height: string } },
): Promise<NextResponse<Serialized<UMPriceApiResponse>>> {
  const chainId = process.env['PENUMBRA_CHAIN_ID'];
  if (!chainId) {
    return NextResponse.json({ error: 'PENUMBRA_CHAIN_ID is not set' }, { status: 500 });
  }

  const height = params.height;
  if (!height) {
    return NextResponse.json({ error: 'height is required' }, { status: 400 });
  }

  if (Number(height) < PENUMBRA_HEIGHT_TRADING_START) {
    return NextResponse.json(
      serialize({
        price: PENUMBRA_PRICE_BEFORE_TRADING_START,
      }),
    );
  }

  const price = await pindexer.getPenumbraPriceAtHeight(Number(height));

  if (!price) {
    return NextResponse.json({ error: 'price not found' }, { status: 404 });
  }

  return NextResponse.json(
    serialize({
      price,
    }),
  );
}
