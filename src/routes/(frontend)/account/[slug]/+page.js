import { checkLoginStatus } from "$lib/clientFunctions";
import { error } from "@sveltejs/kit";

export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	const auth = await checkLoginStatus(fetch);
	console.log("authenticated", auth.user);
	if (!auth.user) {
		throw error(401, "Not authorized");
	}
	const res = await fetch(`http://localhost:5173/api/account/${params.slug}`);
	const data = await res.json();
	if (data === null) {
		throw error(404, "Page not found");
	}


	return {
		account: data,
	};
}
