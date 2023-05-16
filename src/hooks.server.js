import { MongoClient, ObjectId } from "mongodb";
import console from "hvb-console";

let client;
let user;

export const handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get("session");

	const accountsCollection = await getAccountsCollection();
	// console.log("test");
	// console.info("test");
	// console.warn("test");
	// console.error("test");

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	if (user) {
		event.locals.user = user;
	}
	// console.log("hooks", event.locals);
	// }

	// load page as normal
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

export function updateHookedUser(inputUser) {
	user = inputUser;
}

export function removeHookedUser() {
	user = undefined;
}
