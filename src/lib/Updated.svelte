<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	export let method;

	let show = false;
	onMount(() => {
		show = true;
		setTimeout(() => {
			show = false;
		}, 2000);
	});
</script>

<main
	transition:fly={{ y: 50 }}
	class:bg-green-200={method === "POST"}
	class:bg-red-200={method === "DELETE"}
	class:bg-blue-200={method === "PUT"}
	class="absolute left-[50%] top-[50%] translate-x-[-50%] rounded-xl p-12 text-center">
	{#if method === "POST"}
		<h1 class="text-4xl text-green-500">Successfully added new account!</h1>
	{:else if method === "DELETE"}
		<h1 class="text-4xl text-red-500">Successfully deleted account!</h1>
	{:else if method === "PUT"}
		<h1 class="text-4xl text-blue-500">Successfully updated account!</h1>
	{/if}
</main>

<style>
</style>
