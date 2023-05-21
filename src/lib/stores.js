import { writable } from "svelte/store";

// this store keeps track of login status on the client to hide elements in the navbar
// it would probably be easier to just expose this from the server directly in a +layout.server.js file
// that gets the cookies but can't really do that if all communication should be through JSON
export const loggedIn = writable(false);

export const messageStore = writable();