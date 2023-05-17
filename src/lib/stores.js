import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const messageStore = writable();
export const activeTheme = writable("");
export const preferredMode = persisted("preferredMode", "");
