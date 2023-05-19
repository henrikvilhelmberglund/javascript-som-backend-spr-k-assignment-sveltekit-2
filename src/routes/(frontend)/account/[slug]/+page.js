import { error } from "@sveltejs/kit";

export const prerender = false;

/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	const res = await fetch(`http://localhost:5173/api/account/${params.slug}`);
	const data = await res.json();
	if (data === null) {
		throw error(404, "Page not found");
	}

	// can't serialize BSON ID

	return {
		account: data,
	};
}
