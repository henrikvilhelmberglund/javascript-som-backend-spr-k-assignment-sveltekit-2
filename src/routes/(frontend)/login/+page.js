import { browser } from "$app/environment";
import { checkLoginStatus } from "$lib/clientFunctions";

export const prerender = false;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const auth = await checkLoginStatus(fetch);
	return {
		user: auth.user,
		state: auth.state,
	};
}
