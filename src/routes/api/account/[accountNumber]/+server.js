import { getAccountsCollection } from "/src/hooks.server";
import { json } from "@sveltejs/kit";

const accountsCollection = await getAccountsCollection();

/** @type {import('./$types').RequestHandler} */

export async function GET({ url, request, params }) {
	console.info(params.accountNumber);
	const account = await accountsCollection.findOne({ accountNumber: params.accountNumber });
	return json(account);
}

export async function PUT({ request }) {
	const { id, transactionType, transactionAmount } = await request.json();
	const currentAccount = await accountsCollection.findOne({ id });
	console.info(currentAccount);

	// accountsCollection.modifyOne()

	return json(currentAccount);
}
