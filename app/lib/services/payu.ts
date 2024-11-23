import crypto from 'crypto';
import { PAYU_CONFIG } from '../payu-config';

export class PayUService {
  static generateSignature(referenceCode: string, amount: number, currency: string): string {
    const stringToHash = `${PAYU_CONFIG.apiKey}~${PAYU_CONFIG.merchantId}~${referenceCode}~${amount}~${currency}`;
    return crypto.createHash('md5').update(stringToHash).digest('hex');
  }

  static async createPayment(data: {
    amount: number;
    description: string;
    buyerEmail: string;
    referenceCode: string;
  }) {
    const signature = this.generateSignature(
      data.referenceCode,
      data.amount,
      'COP' // o la moneda que uses
    );

    const paymentData = {
      merchantId: PAYU_CONFIG.merchantId,
      accountId: PAYU_CONFIG.accountId,
      description: data.description,
      referenceCode: data.referenceCode,
      amount: data.amount,
      currency: 'COP',
      signature: signature,
      test: PAYU_CONFIG.test ? 1 : 0,
      buyerEmail: data.buyerEmail,
      responseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payu/response`,
      confirmationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payu/confirmation`,
    };

    return paymentData;
  }
} 