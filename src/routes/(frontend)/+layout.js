import { browser } from "$app/environment";
import { checkLoginStatus } from "$lib/clientFunctions";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	if (browser) {
		await checkLoginStatus(fetch);
	}
}
