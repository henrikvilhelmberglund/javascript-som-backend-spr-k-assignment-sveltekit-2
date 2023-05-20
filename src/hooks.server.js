import { MongoClient, ObjectId } from "mongodb";
import console from "hvb-console";
import jwt from "jsonwebtoken";
import { connectToMongoDB } from "$lib/server/mongoConnect";

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
	// console.info("jwtID", jwtID);

	// running this on every request is probably not very smart
	user = await usersCollection.findOne({ _id: new ObjectId(jwtID.id) });

	// console.warn("user:", user);
	if (user) {
		event.locals.user = user.user;
		event.locals.id = user._id.toString();
	}
	// console.info("hooks.server.js", event.locals);

	return await resolve(event);
};

export async function getAccountsCollection() {
	if (!client) {
		client = await connectToMongoDB();
	}
	const db = client.db("bank");
	return db.collection("accounts");
}

export async function getUsersCollection() {
	if (!client) {
		client = await connectToMongoDB();
	}
	const db = client.db("bank-auth");
	return db.collection("users");
}

export function updateHookedUser(inputUser) {
	user = inputUser;
}

export function removeHookedUser() {
	user = undefined;
}
