import { checkLoginStatus } from "$lib/clientFunctions";
export const prerender = false;
export const ssr = false;

// this is a file containing a load() function that is used to load data and then return it to be able to use it with for example data.accounts in +page.svelte
// you could also do everything in +page.svelte but splitting loading of data and presentation of data seems useful sometimes
// normally (I think) this would be done server side in a +page.server.js but then it's not really done in JSON so doing it client side here
// in the +page.server.js file there would not be a need to fetch, you could simply use the data like I'm doing in the /accounts endpoint

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const auth = await checkLoginStatus();
	console.info("auth in add-account", auth);
	if (!auth.user) {
		return {
			// instead of throwing an error I return it to the load function so I can display something else than just an error page
			error: 401,
		};
	}
	return { auth };
}
