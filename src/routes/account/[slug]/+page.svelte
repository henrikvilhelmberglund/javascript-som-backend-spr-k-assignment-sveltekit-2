<script>
	import { page } from "$app/stores";
	import { invalidateAll } from "$app/navigation";
	import Account from "$lib/Account.svelte";
	import { messageStore } from "$lib/stores.js";
	import { fly } from "svelte/transition";
	import Updated from "$lib/Updated.svelte";

	const transactionTypes = ["Withdraw", "Deposit"];
	let state = "Withdraw";
	let amount;

	export let data;

	async function submitData() {
		const res = await fetch(`http://localhost:5173/api/account/${$page.params.slug}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ transactionType: state, transactionAmount: amount }),
		});
		if (res.ok) {
			const data = await res.json();
			if (state === "Withdraw") {
				$messageStore = { text: `Successfully withdrew ${amount} SEK!`, type: "Withdraw" };
			} else if (state === "Deposit") {
				$messageStore = { text: `Successfully deposited ${amount} SEK!`, type: "Deposit" };
			}
			// rerun load function to update the new funds in the UI
			await invalidateAll();
			setTimeout(() => {
				$messageStore = null;
			}, 1500);
		}
	}
</script>

<main class="m-4 flex w-fit flex-col">
	<Account account={data.account} />
	<div class="flex justify-between">
		{#each transactionTypes as transaction}
			<button
				on:click={() => (state = transaction)}
				class:outline-2;shadow-inner,!bg-slate-300={state === transaction}
				class:shadow-md={state !== transaction}
				class="m-4 rounded bg-white p-2 shadow-black outline outline-1">{transaction}</button>
		{/each}
	</div>
	<form on:submit={submitData} class="flex flex-col">
		{#if state === "Withdraw"}
			<input
				class="outline-px rounded p-1 outline"
				bind:value={amount}
				required
				type="number"
				min="1"
				max={data.account.funds}
				name=""
				id="" />
		{:else if state === "Deposit"}
			<input
				class="outline-px rounded p-1 outline"
				bind:value={amount}
				required
				type="number"
				min="1"
				max="30000"
				name=""
				id="" />
		{/if}
		{#if state}
			<button
				class:bg-red-500,hover:bg-red-400={state === "Withdraw"}
				class:bg-green-500,hover:bg-green-400={state === "Deposit"}
				class="m-4 w-fit self-center rounded p-4 disabled:cursor-not-allowed disabled:opacity-50"
				disabled={data.account.funds === 0 && state === "Withdraw"}>
				{state}</button>
		{/if}
	</form>
	{#if $messageStore}
		<Updated />
	{/if}
</main>
