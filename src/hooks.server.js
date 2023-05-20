import { MongoClient, ObjectId } from "mongodb";
import console from "hvb-console";

let client;
let user;

export const handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get("session");

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	const accountsCollection = await getAccountsCollection();

	if (user) {
		event.locals.user = user;
	}
	console.warn("hooks", event.locals);

	return await resolve(event);
};

async function run() {
	try {
		client = new MongoClient("mongodb://127.0.0.1:27017");
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} catch (error) {
		console.log(error);
	} finally {
		// await client.close();
	}
	return client;
}

export async function getAccountsCollection() {
	const client = await run();
	const db = client.db("bank");
	return db.collection("accounts");
}

export async function getUsersCollection() {
	const client = await run();
	const db = client.db("bank-auth");
	return db.collection("users");
}

export function updateHookedUser(inputUser) {
	user = inputUser;
}

export function removeHookedUser() {
	user = undefined;
}
