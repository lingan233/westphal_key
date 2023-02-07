<script>
	import Pill from '$lib/components/Pill.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tags;

	$: tags = tags;
	
	function onTagSelect(event) {
		dispatch('onTagSelectBubble', event.detail);
	}
</script>

<div class="flex flex-wrap items-start justify-center gap-2">
	{#each tags as tag}
		<Pill on:onTagSelect={onTagSelect} {tag} />
	{/each}
</div>