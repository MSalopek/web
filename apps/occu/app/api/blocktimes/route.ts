import { NextRequest, NextResponse } from 'next/server';
import { pindexer } from '@/shared/database';
import { serialize, Serialized } from '@/shared/utils/serializer';

export type MultipleBlockTimeApiResponse =
  | {
      height: string;
      time: string;
    }[]
  | { error: string };

// TODO: add tanstack query
export async function GET(
  _req: NextRequest,
): Promise<NextResponse<Serialized<MultipleBlockTimeApiResponse>>> {
  const chainId = process.env['PENUMBRA_CHAIN_ID'];
  if (!chainId) {
    return NextResponse.json({ error: 'PENUMBRA_CHAIN_ID is not set' }, { status: 500 });
  }

  const { searchParams } = new URL(_req.url);
  const heightsStr = searchParams.get('heights');

  if (!heightsStr) {
    return NextResponse.json({ error: 'heights is required' }, { status: 400 });
  }

  const heightsArray = heightsStr.split(',').map(Number);
  // validate all are numbers and there's no more than 100
  if (heightsArray.some(height => isNaN(Number(height)))) {
    return NextResponse.json({ error: 'all heights must be numbers' }, { status: 400 });
  }

  const blocks = await pindexer.getBlockTimestamps(heightsArray.map(Number));

  if (blocks.length === 0) {
    return NextResponse.json({ error: 'Blocks not found' }, { status: 404 });
  }

  return NextResponse.json(
    serialize(
      blocks.map(block => ({
        height: block.height.toString(),
        time: block.time,
      })),
    ),
  );
}
