<script>
	import Account from "$lib/Account.svelte";

	// get data from +page.js
	export let data;
</script>

<svelte:head>
	<title>Bankademin - View accounts</title>
</svelte:head>

<main>
	<div class="flex flex-col">
		<h1 class="m-4 text-xl">View accounts</h1>
		{#each data.accounts as account}
			<Account {account} />
		{/each}
	</div>
</main>

<style>
</style>
