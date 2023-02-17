<script>
	import Pill from '$lib/components/Pill.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tags;
	export let selected_tags;
	let container;

	$: tags = tags;

	function onTagSelect(event) {
		dispatch('onTagSelectBubble', event.detail);
	}
</script>

<div class="flex overflow-x-auto overflow-y-hidden p-5 gap-4">
	<div
		bind:this={container}
		class="flex shrink-0 flex-wrap items-start gap-2 content-start max-h-[280px] max-w-[307.08px] overflow-y-hidden"
	>
		{#each tags.slice(0, 55) as tag}
			{#if selected_tags.includes(tag)}
				<Pill on:onTagSelect={onTagSelect} {tag} selected />
			{:else}
				<Pill on:onTagSelect={onTagSelect} {tag} />
			{/if}
		{/each}
	</div>
	<!-- <div class="flex shrink-0 flex-wrap items-start gap-2 w-11/12 content-start">
		{#each tags.slice(15, 29) as tag}
			{#if selected_tags.includes(tag)}
				<Pill on:onTagSelect={onTagSelect} {tag} selected />
			{:else}
				<Pill on:onTagSelect={onTagSelect} {tag} />
			{/if}
		{/each}
	</div>
	<div class="flex shrink-0 flex-wrap items-start gap-2 w-11/12 content-start">
		{#each tags.slice(30, 44) as tag}
			{#if selected_tags.includes(tag)}
				<Pill on:onTagSelect={onTagSelect} {tag} selected />
			{:else}
				<Pill on:onTagSelect={onTagSelect} {tag} />
			{/if}
		{/each}
	</div> -->
</div>
