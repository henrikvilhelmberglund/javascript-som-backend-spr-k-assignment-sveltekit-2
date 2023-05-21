import { error, json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getUsersCollection, updateHookedUser } from "/src/hooks.server";
/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies }) {
	// cookies are in seconds here apparently
	const FIVE_MINUTES = 5 * 60;
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
	// console.info("pass:", pass, "dbPass:", dbHash);
	let successful = false;
	const match = await bcrypt.compare(pass, dbHash);

	if (!match) {
		console.error("Wrong password");
	}
	if (match) {
		// console.warn("incoming user:", incomingUser);
		if (incomingUser) {
			// key would be an environment variable in .env in a real projekt
			const token = jwt.sign({ id: incomingUser._id }, "a very secret key");
			// separate uuid here is probably better but would need to save it temporarily in database too
			cookies.set("AuthorizationToken", `Bearer ${token}`, {
				httpOnly: true,
				sameSite: "strict",
				secure: false,
				path: "/",
				maxAge: FIVE_MINUTES,
			});
			locals = {
				user: user,
			};
			// console.log("+server.js /login", locals);
		}
		successful = true;
		updateHookedUser(user);
	}
	if (successful) {
		return json({
			user: user.user,
		});
	} else {
		throw error(401, "Not authorized");
	}
}
