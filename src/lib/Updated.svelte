<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { messageStore } from "./stores";

	// a bit broken when depositing/withdrawing
	setTimeout(() => {
		$messageStore = null;
	}, 2500);
</script>

<!--
@component
Displays a message using the messageStore store which contains a color and a text.
-->

{#if $messageStore}
	<div
		transition:fly={{ y: 50 }}
		class:bg-green-200,text-green-500={$messageStore.color === "green"}
		class:bg-red-200,text-red-500={$messageStore.color === "red"}
		class:bg-blue-200,text-blue-500={$messageStore.color === "blue"}
		class="absolute left-[50%] top-[50%] translate-x-[-50%] rounded-xl p-12 text-center">
		<p class="text-4xl">{$messageStore.text}</p>
	</div>
{/if}

<style>
</style>
