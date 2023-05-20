<script>
	import Updated from "$lib/Updated.svelte";
	import { messageStore } from "$lib/stores";

	export let data;

	let debug = true;
	let name;
	let pass;
	let funds;
	let error = false;
	let success = undefined;

	if (debug) {
		name = "Personal account";
		funds = 500;
	}

	let show = false;
	if (!data.error) {
		show = true;
	}
</script>

<svelte:head>
	<title>Bankademin - Add account</title>
</svelte:head>

<main class="flex-1 [&>*]:m-4">
	{#if show}
		<h1 class="my-4 text-xl">Add an account</h1>
		<form
			on:submit|preventDefault={async () => {
				let fetchData;
				const res = await fetch(`http://localhost:5173/api/accounts/`, {
					method: "POST",
					body: JSON.stringify({ ownedBy: data.auth.user.id, name, funds }),
				});
				if (res.ok) {
					fetchData = await res.json();
					console.log(fetchData);

					$messageStore = { color: "green", text: `Successfully added new account: ${name}!` };
				} else {
					error = { status: 401, text: "Unauthorized" };
				}
			}}
			class="m-4 flex w-96 flex-col gap-4">
			<div class="font-inknut flex flex-col gap-4 md:w-96">
				<input
					required
					type="text"
					class="outline-solid rounded p-2 outline-1 outline-black"
					placeholder="Account name"
					id="name"
					name="name"
					bind:value={name} />
				<input
					required
					type="number"
					class="outline-solid rounded p-2 outline-1 outline-black"
					placeholder="Funds"
					id="funds"
					min="0"
					bind:value={funds}
					name="funds" />
				<button
					class="rounded-lg border border-gray-200 bg-green-400 bg-clip-padding p-8 backdrop-blur-lg backdrop-filter hover:bg-green-300"
					>Add account</button>
			</div>
		</form>
	{:else}
		<h2 class="text-lg">You need to login before adding an account.</h2>
	{/if}
</main>
{#if $messageStore}
	<Updated />
{/if}

<style>
</style>
