import { getAccountsCollection } from "/src/hooks.server";
import { error, json } from "@sveltejs/kit";
const accountsCollection = await getAccountsCollection();

/** @type {import('./$types').RequestHandler} */

export async function GET({ url, request, params, locals }) {
	// console.info(params.accountNumber);
	// make sure we're not finding any other user's accounts in the dynamic route
	const account = await accountsCollection.findOne({
		ownedBy: locals.id,
		accountNumber: params.accountNumber,
	});
	return json(account);
}

export async function PUT({ request, params }) {
	let result;
	const id = params.accountNumber;
	const { transactionType, transactionAmount } = await request.json();
	const currentAccount = await accountsCollection.findOne({ accountNumber: id });
	// I  still need the currentFunds for the if statement below
	const currentFunds = currentAccount.funds;

	if (transactionType === "Withdraw") {
		// server side check
		if (transactionAmount > currentFunds || transactionAmount > 30000) {
			throw error(400, "Invalid request");
		}
		result = await accountsCollection.updateOne(
			{ accountNumber: id },
			// { $set: { funds: currentAccount.funds - transactionAmount } }
			// apparently you can use $inc
			{ $inc: { funds: -transactionAmount } }
		);
	} else if (transactionType === "Deposit") {
		if (transactionAmount === 0) {
			throw error(400, "Invalid request");
		}
		result = await accountsCollection.updateOne(
			{ accountNumber: id },
			{ $inc: { funds: transactionAmount } }
		);
	}

	return json(result);
}

export async function DELETE({ request, params }) {
	let result;
	const id = params.accountNumber;
	result = await accountsCollection.deleteOne({ accountNumber: id });

	return json(result);
}
