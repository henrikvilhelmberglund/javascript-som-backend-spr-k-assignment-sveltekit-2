<script>
	import { invalidateAll } from "$app/navigation";
	import Account from "$lib/Account.svelte";
	import PleaseLogin from "$lib/PleaseLogin.svelte";
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

<main class="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-blue-300">
	<div class="p-4 flex w-fit flex-col">
    {#if show}
		<h1 class="my-4 text-xl">{data.auth.user.user}'s accounts</h1>
			{#if data.accounts.length === 0}
				<h2 class="text-lg">You do not have any accounts yet.</h2>
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
    <PleaseLogin>before viewing your accounts</PleaseLogin>
		{/if}
	</div>
</main>
{#if $messageStore}
	<Updated />
{/if}

<style>
</style>
