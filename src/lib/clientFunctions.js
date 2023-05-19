import { goto } from "$app/navigation";
import { get } from "svelte/store";

export async function deleteAccount(account, store) {
	const name = account.name;
	const res = await fetch(`http://localhost:5173/api/account/${account.accountNumber}`, {
		method: "DELETE",
	});
	if (res.ok) {
		const result = await res.json();
		console.log(result);
		store.set({ text: `Successfully deleted account ${name}`, color: "red" });
		// rerun load function to update the new funds in the UI
		setTimeout(() => {
			store.set(null);
			goto("/view-accounts");
		}, 1500);
		return false;
	}
}
