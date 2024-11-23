import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Verificar firma de PayU
    // Actualizar estado del pedido en la base de datos
    await prisma.order.update({
      where: { referenceCode: body.reference_sale },
      data: { 
        status: body.state_pol,
        transactionId: body.transaction_id
      }
    });

    return NextResponse.json({ status: 'OK' });
  } catch (error) {
    return NextResponse.json({ error: 'Error processing confirmation' }, { status: 500 });
  }
} 