import { NextRequest, NextResponse } from 'next/server';
import { pindexer } from '@/shared/database';
import { serialize, Serialized } from '@/shared/utils/serializer';

export type BlockTimeApiResponse =
  | {
      height: string;
      time: string;
    }
  | { error: string };

// TODO: add tanstack query
export async function GET(
  _req: NextRequest,
  { params }: { params: { height: string } },
): Promise<NextResponse<Serialized<BlockTimeApiResponse>>> {
  const chainId = process.env['PENUMBRA_CHAIN_ID'];
  if (!chainId) {
    return NextResponse.json({ error: 'PENUMBRA_CHAIN_ID is not set' }, { status: 500 });
  }

  const height = params.height;
  if (!height) {
    return NextResponse.json({ error: 'height is required' }, { status: 400 });
  }

  const block = await pindexer.getBlockTimestamp(Number(height));

  if (!block) {
    return NextResponse.json({ error: 'Block not found' }, { status: 404 });
  }

  return NextResponse.json(
    serialize({
      height: height.toString(),
      time: block.toISOString(),
    }),
  );
}
