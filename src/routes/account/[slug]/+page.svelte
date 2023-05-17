<script>
	import { page } from "$app/stores";
	import Account from "$lib/Account.svelte";

	const transactionTypes = ["Withdraw", "Deposit"];
	let state = "Withdraw";
	let amount;

	export let data;

	$: if (state === "Withdraw") {
		if (amount > data.account.funds) {
			amount = data.account.funds;
			alert("You can only withdraw the maximum amount of your funds.");
		} else if (amount === 0) {
			amount = 1;
			alert("You need to withdraw at least 1 SEK.");
		}
	}
</script>

<main class="m-4 flex w-fit flex-col">
	<Account account={data.account} />
	<div class="flex justify-between">
		{#each transactionTypes as transaction}
			<button
				on:click={() => (state = transaction)}
				class="m-4 rounded bg-purple-500 p-2 hover:bg-purple-400">{transaction}</button>
		{/each}
	</div>
	{#if state === "Withdraw"}
		<input
			class="outline-px rounded p-1 outline"
			bind:value={amount}
			type="number"
			min="1"
			max={data.account.funds}
			name=""
			id="" />
	{:else if state === "Deposit"}
		<input class="outline-px rounded p-1 outline" bind:value={amount} type="number" name="" id="" />
	{/if}
	{#if state}
		<button class="m-4 w-fit self-center rounded bg-green-500 p-4 hover:bg-green-400">
			{state}</button>
	{/if}
</main>
