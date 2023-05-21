import { error, json } from "@sveltejs/kit";
/** @type {import('./$types').RequestHandler} */

export async function POST({ url, request, cookies }) {
	const incomingBody = await request.json();

	cookies.delete("AuthorizationToken", { path: "/" });

	return json({
		logout: "Successful",
	});
}
