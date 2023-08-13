import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    // Retrieve accounts from the "accounts" table where token=false
    const accountsResponse = await sql`
      SELECT *
      FROM accounts
      WHERE token = false;
    `;

    const accounts = accountsResponse.rows; // Extract the rows array

    if (accounts.length === 0) {
      return response.status(404).json({ error: 1 });
    }

    // Randomly select an account
    const randomIndex = Math.floor(Math.random() * accounts.length);
    const selectedAccount = accounts[randomIndex];

    // Update the selected account's token to true
    await sql`
      UPDATE accounts
      SET token = true
      WHERE id = ${selectedAccount.id};
    `;

    return response.status(200).json({ account: selectedAccount });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
