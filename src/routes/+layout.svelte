<script>
	import { onMount, beforeUpdate } from "svelte";
	import "@unocss/reset/tailwind.css";

	let show = false;
	let debug = true;
	let loadingText = "Loading...";
	onMount(() => {
		show = true;
	});
	let currentRoute = "";
	beforeUpdate(() => {
		currentRoute = window.location.pathname;
		// console.log(currentRoute);
	});
	const routes = {
		Bankademin: "/",
		"Add account": "/add-account",
		"View accounts": "/view-accounts",
	};
</script>

{#if show}
	<header>
		<nav class="font-inknut bg-blue-700 p-4">
			{#each Object.entries(routes) as [name, link]}
				<a
					class:!decoration-blue-200={currentRoute === link}
					class="decoration-offset-6 p-4 pb-0 text-blue-200 underline decoration-transparent hover:text-blue-100 md:text-2xl"
					href={link}>{name}</a>
			{/each}
		</nav>
	</header>
	<slot />
{:else}
	<div class="flex h-screen w-screen flex-col items-center justify-center">
		<div
			class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
			role="status">
			<span
				class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>Loading...</span>
		</div>
		<h1 class="text-3xl">Loading...</h1>
	</div>
{/if}

<style uno:preflights uno:safelist global></style>
