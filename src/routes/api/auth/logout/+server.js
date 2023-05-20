import { v4 as uuidv4 } from "uuid";
import { error, json } from "@sveltejs/kit";
import chalk from "chalk";
/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies }) {
	const incomingBody = await request.json();

	cookies.delete("AuthorizationToken", { path: "/" });

	return json({
		logout: "Successful",
	});
}
