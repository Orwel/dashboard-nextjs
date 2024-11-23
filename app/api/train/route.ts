import { NextResponse } from 'next/server';
import { trainBot } from '@/app/lib/training/trainer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validar datos
    if (!data.category || !data.content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Entrenar el bot
    await trainBot([data]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Training failed' },
      { status: 500 }
    );
  }
} 