import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

async function listInvoices() {
  const result = await client.query(`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `);

  return result.rows;
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    return new Response(JSON.stringify({ invoices }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}