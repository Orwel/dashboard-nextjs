export const PAYU_CONFIG = {
  merchantId: process.env.PAYU_MERCHANT_ID,
  accountId: process.env.PAYU_ACCOUNT_ID,
  apiKey: process.env.PAYU_API_KEY,
  apiLogin: process.env.PAYU_API_LOGIN,
  test: process.env.NODE_ENV !== 'production',
} 