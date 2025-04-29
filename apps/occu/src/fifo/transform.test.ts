// @ts-nocheck
import { describe, it, expect } from 'vitest';
import { penumbraTxToTaxEvent } from './transform.js';
import { TransactionInfo } from '@penumbra-zone/protobuf/penumbra/view/v1/view_pb';
import { example_tx_data } from './example_data';

describe('penumbraTxToTaxEvent', () => {
  it('should transform transaction info to tax event', () => {
    // Load and parse example data
    const transactions: TransactionInfo[] = JSON.parse(example_tx_data) as TransactionInfo[];
    expect(transactions.length).toBeGreaterThan(0);

    // Process each transaction
    transactions.forEach(txData => {
      const txInfo = TransactionInfo.fromJson(txData);
      const result = penumbraTxToTaxEvent(txInfo);
      if (result.type === 'send' || result.type === 'receive' || result.type === 'income') {
        console.log(result.type, JSON.stringify(result, null, 2));
      }
      //   console.log(`Transaction ${index + 1} Tax Event:`, JSON.stringify(result, null, 2));
    });
  });
});
