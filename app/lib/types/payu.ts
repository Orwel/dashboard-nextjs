export interface PayUTransaction {
  referenceCode: string;
  description: string;
  amount: number;
  currency: string;
  buyerEmail: string;
  signature: string;
  confirmationUrl: string;
  responseUrl: string;
} 