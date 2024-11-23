'use client';

import { useState } from 'react';

export function PayUCheckout({ amount, description }: { amount: number; description: string }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/payu/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          description,
          buyerEmail: 'user@example.com', // Obtener del usuario actual
        }),
      });

      const paymentData = await response.json();

      // Crear formulario de PayU y enviarlo
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = process.env.NEXT_PUBLIC_PAYU_URL;

      Object.entries(paymentData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Error initiating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {loading ? 'Procesando...' : 'Pagar con PayU'}
    </button>
  );
} 