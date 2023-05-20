import { getUsersCollection } from "../../../../hooks.server";
import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import bcrypt from "bcrypt";

const usersCollection = await getUsersCollection();

/** @type {import('./$types').RequestHandler} */

// export async function GET({ url, request }) {
// 	return json({
// 		result,
// 	});
// }

export async function POST({ url, request, cookies, locals }) {
	const incomingBody = await request.json();
	// const body = result.body;
	let { user, pass } = incomingBody;

	bcrypt.hash(pass, 10, async function (err, hash) {
		// let { title, content, date, tags } = Object.fromEntries(formData);

		usersCollection.insertOne({ user, hash });
	});
	console.log(locals);
	return json({
		user: user,
	});
}
