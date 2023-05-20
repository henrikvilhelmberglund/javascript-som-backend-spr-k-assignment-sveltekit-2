import { MongoClient, ObjectId } from "mongodb";
import console from "hvb-console";
import jwt from "jsonwebtoken";

let client;
let user;

export const handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get("AuthorizationToken");

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	const usersCollection = await getUsersCollection();
	const token = session.split(" ")[1];
	const jwtID = jwt.verify(token, "a very secret key");
	console.warn("jwtID", jwtID);
	// running this on every request is probably not very smart
	user = await usersCollection.findOne({ _id: new ObjectId(jwtID.id) });
	console.warn(user);

	if (user) {
		event.locals.user = user.user;
		event.locals.id = user._id.toString();
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
