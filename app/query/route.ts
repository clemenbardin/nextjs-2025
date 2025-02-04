import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getInvoices() { // Renommez la fonction pour plus de clarté (optionnel)
  try {
    const data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    return data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return []; // Retournez un tableau vide en cas d'erreur (ou un message d'erreur plus précis)
  }
}


export async function GET(request: Request) { // Exportez le gestionnaire GET
  try {
    const invoices = await getInvoices();
    return NextResponse.json(invoices); // Utilisez NextResponse.json pour la réponse JSON
  } catch (error) {
    return new NextResponse("Error fetching invoices", { status: 500 }); // Gestion des erreurs
  }
}