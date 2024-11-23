import { NextResponse } from 'next/server';
import { PayUService } from '@/app/lib/services/payu';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paymentData = await PayUService.createPayment({
      amount: body.amount,
      description: body.description,
      buyerEmail: body.buyerEmail,
      referenceCode: `ORDER-${Date.now()}`,
    });

    return NextResponse.json(paymentData);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating payment' }, { status: 500 });
  }
} 