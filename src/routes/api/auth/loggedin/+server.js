import { error, json } from "@sveltejs/kit";
/** @type {import('./$types').RequestHandler} */

export async function GET({ url, locals }) {
	console.log("+server.js /loggedin", locals);
	console.info("+server.js /loggedin", locals);
	if (locals.user) {
		return json(locals);
	} else {
		throw error(401, "Not authorized");
	}
}
