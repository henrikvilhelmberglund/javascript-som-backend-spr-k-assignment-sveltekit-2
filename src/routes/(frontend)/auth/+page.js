import { browser } from "$app/environment";
import { checkLoginStatus } from "$lib/clientFunctions";

export const prerender = false;
/** @type {import('./$types').PageLoad} */
export async function load() {
	const auth = await checkLoginStatus();
	return {
		user: auth.user,
		state: auth.state,
	};
}
