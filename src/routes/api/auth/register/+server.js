import { getUsersCollection } from "../../../../hooks.server";
import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import bcrypt from "bcrypt";

const usersCollection = await getUsersCollection();

/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies }) {
	const incomingBody = await request.json();
	let { user, pass } = incomingBody;

	bcrypt.hash(pass, 10, async function (err, hash) {
		usersCollection.insertOne({ user, hash });
	});
	return json({
		user: user,
	});
}
