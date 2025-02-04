import postgres from 'postgres';
import { NextResponse } from 'next/server';
import { listInvoices } from "@/app/lib/data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });




export async function GET(request: Request) { // Exportez le gestionnaire GET
  try {
    const invoices = await listInvoices(sql);
    return NextResponse.json(invoices); // Utilisez NextResponse.json pour la réponse JSON
  } catch (error) {
    return new NextResponse("Error fetching invoices", { status: 500 }); // Gestion des erreurs
  }
}