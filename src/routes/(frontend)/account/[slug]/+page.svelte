<script>
	import { page } from "$app/stores";
	import { goto, invalidateAll } from "$app/navigation";
	import Account from "$lib/Account.svelte";
	import { messageStore } from "$lib/stores.js";
	import { fly } from "svelte/transition";
	import Updated from "$lib/Updated.svelte";

	import { deleteAccount } from "$lib/clientFunctions.js";

	const transactionTypes = ["Withdraw", "Deposit"];
	let state = "Withdraw";
	let amount;
	let showAccount = true;

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
				$messageStore = { text: `Successfully withdrew ${amount} SEK!`, color: "red" };
			} else if (state === "Deposit") {
				$messageStore = { text: `Successfully deposited ${amount} SEK!`, color: "green" };
			}
			// rerun load function to update the new funds in the UI
			await invalidateAll();
			setTimeout(() => {
				$messageStore = null;
			}, 1500);
		}
	}
</script>

<main class="flex h-[calc(100vh-4rem)] flex-col bg-gradient-to-b from-white to-blue-300">
	<div class="m-4 w-fit" out:fly={{ y: 50 }}>
		{#if showAccount}
			<div class="flex flex-row">
				<Account account={data.account} />
				<button
					on:click={() => {
						deleteAccount(data.account, messageStore);
						showAccount = false;
					}}
					class="text-4xl">❌</button>
			</div>
			<div class="flex justify-between">
				{#each transactionTypes as transaction}
					<button
						on:click={() => (state = transaction)}
						class:outline-2;shadow-inner,!bg-slate-200={state === transaction}
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
						max={data.account.funds > 30000 ? 30000 : data.account.funds}
						name=""
						id="" />
				{:else if state === "Deposit"}
					<input
						class="outline-px rounded p-1 outline"
						bind:value={amount}
						required
						type="number"
						min="1"
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
		{/if}
		{#if $messageStore}
			<Updated />
		{/if}
	</div>
</main>
