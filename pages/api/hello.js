import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    // Retrieve accounts from the "accounts" table
    const accounts = await sql`
      SELECT id, email, token
      FROM accounts;
    `;

    return response.status(200).json({ accounts });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
