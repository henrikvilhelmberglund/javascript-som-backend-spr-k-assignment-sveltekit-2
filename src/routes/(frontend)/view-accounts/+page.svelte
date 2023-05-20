<script>
	import { invalidateAll } from "$app/navigation";
	import Account from "$lib/Account.svelte";
	import Updated from "$lib/Updated.svelte";
	import { deleteAccount } from "$lib/clientFunctions.js";
	import { messageStore } from "$lib/stores.js";

	// get data from +page.js
	export let data;

	let show = false;
	if (!data.error) {
		show = true;
	}
</script>

<svelte:head>
	<title>Bankademin - View accounts</title>
</svelte:head>

<main>
	<div class="m-4 flex w-fit flex-col">
		<h1 class="my-4 text-xl">View accounts</h1>
		{#if show}
			{#if data.accounts.length === 0}
				<h2 class="text-lg">There are currently no accounts.</h2>
			{/if}
			{#each data.accounts as account}
				<div>
					<Account {account} />
					<button
						on:click={() => {
							deleteAccount(account, messageStore);
							invalidateAll();
						}}
						class="text-4xl">❌</button>
				</div>
			{/each}
		{:else}
			<h2 class="text-lg">You need to login before viewing accounts.</h2>
		{/if}
	</div>
</main>
{#if $messageStore}
	<Updated />
{/if}

<style>
</style>
