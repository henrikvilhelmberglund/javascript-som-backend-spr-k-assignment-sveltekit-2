import { getAccountsCollection } from "/src/hooks.server.js";
import { v4 as uuidv4 } from "uuid";
import { json } from "@sveltejs/kit";

// +server.js files are endpoints, the functions below can be fetch() from /accounts/ (this route) and either GET or POST (also DELETE and PUT if needed)

const accountsCollection = await getAccountsCollection();

/** @type {import('./$types').RequestHandler} */

export async function GET({ url, request, locals }) {
	const accounts = await accountsCollection.find({ ownedBy: locals.id }).toArray();
	return json(accounts);
}

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	const accountNumber = uuidv4();
	let { ownedBy, name, funds } = incomingBody;

	const result = await accountsCollection.insertOne({ ownedBy, name, accountNumber, funds });

	return json(result);
}
