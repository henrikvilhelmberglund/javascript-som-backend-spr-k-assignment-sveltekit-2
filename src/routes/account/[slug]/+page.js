import { browser } from "$app/environment";

/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	if (browser) {
		const res = await fetch(`http://localhost:5173/api/account/${params.slug}`);
		const data = await res.json();
		// can't serialize BSON ID

		return {
			account: data,
		};
	}
}
