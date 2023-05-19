import { browser } from "$app/environment";

// this is a file containing a load() function that is used to load data and then return it to be able to use it with for example data.accounts in +page.svelte
// you could also do everything in +page.svelte but splitting loading of data and presentation of data seems useful sometimes
// normally (I think) this would be done server side in a +page.server.js but then it's not really done in JSON so doing it client side here
// in the +page.server.js file there would not be a need to fetch, you could simply use the data like I'm doing in the /accounts endpoint

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	if (browser) {
		const res = await fetch("http://localhost:5173/api/accounts");
		const data = await res.json();
		// can't serialize BSON ID

		return {
			accounts: data,
		};
	}
}
