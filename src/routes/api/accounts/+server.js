import { getAccountsCollection } from "/src/hooks.server.js";
import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";

// +server.js files are endpoints, the functions below can be fetch() from /accounts/ (this route) and either GET or POST (also DELETE and PUT if needed)

const accountsCollection = await getAccountsCollection();

/** @type {import('./$types').RequestHandler} */

export async function GET({ url, request }) {
	const accounts = await accountsCollection.find({}).toArray();
	return json(accounts);
}

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	const accountNumber = uuidv4();
	// const body = result.body;
	let { name, pass, funds } = incomingBody;

	// let { title, content, date, tags } = Object.fromEntries(formData);

	accountsCollection.insertOne({ name, pass, accountNumber, funds });
	// cookies.set("session", uuidv4(), {
	// 	httpOnly: true,
	// 	sameSite: "strict",
	// 	secure: false,
	// 	path: "/",
	// 	maxAge: 60 * 60 * 24 * 7,
	// });
	// locals = {
	// 	user: user,
	// };
	console.log(locals);
	return json({
		accountNumber,
	});
}
