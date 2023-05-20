import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import bcrypt from "bcrypt";

import { getUsersCollection, updateHookedUser } from "/src/hooks.server";
/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies, locals }) {
	let incomingUser;
	const incomingBody = await request.json();
	const usersCollection = await getUsersCollection();
	// const body = result.body;
	let { user, pass } = incomingBody;
	incomingUser = await usersCollection.findOne({ user });

	if (!incomingUser) {
		// if no user with that name exists, give the same error message
		throw error(401, "Not authorized");
	}
	const dbHash = incomingUser.hash;
	console.warn("pass " + pass);
	console.warn("dbPass " + dbHash);
	let successful = false;
	const match = await bcrypt.compare(pass, dbHash);

	if (!match) {
		console.error("it didn't work");
	}
	if (match) {
		console.log(incomingUser);
		if (incomingUser) {
			// separate uuid here is probably better but would need to save it temporarily in database too
			cookies.set("session", incomingUser._id, {
				httpOnly: true,
				sameSite: "strict",
				secure: false,
				path: "/",
				maxAge: 60 * 60 * 24 * 7,
			});
			locals = {
				user: user,
			};
			console.log("+server.js /login", locals);
		}
		successful = true;
		updateHookedUser(user);
	}
	if (successful) {
		console.log("hi");
		return json({
			user: user.user,
		});
	} else {
		throw error(401, "Not authorized");
	}
}
