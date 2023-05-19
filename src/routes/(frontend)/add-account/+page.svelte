<script>
	import Updated from "$lib/Updated.svelte";
	import { messageStore } from "$lib/stores";

	let debug = true;
	let name;
	let pass;
	let funds;
	let error = false;
	let success = undefined;

	if (debug) {
		name = "Superman";
		pass = "Test1234";
		funds = 500;
	}
</script>

<svelte:head>
	<title>Bankademin - Add account</title>
</svelte:head>

<main class="flex-1 [&>*]:m-4">
	<form
		on:submit|preventDefault={async () => {
			let fetchData;
			const res = await fetch(`http://localhost:5173/api/accounts/`, {
				method: "POST",
				body: JSON.stringify({ name, pass, money }),
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
				placeholder="Name"
				id="name"
				name="name"
				bind:value={name} />
			<input
				required
				type="password"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Password"
				id="password"
				bind:value={pass}
				name="password" />
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
</main>
{#if $messageStore}
	<Updated />
{/if}

<style>
</style>
