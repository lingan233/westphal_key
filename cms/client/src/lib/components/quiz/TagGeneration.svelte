<script>
	import Pill from '$lib/components/Pill.svelte';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { group_by_initial } from '$lib/functions/GroupByInitial';
	const dispatch = createEventDispatcher();

	export var tags;
	var rendered_tags = [];
	export let selected_tags;

	function onTagSelect(event) {
		dispatch('onTagSelectBubble', event.detail);
	}

	function log() {
		console.log(container);
	}
</script>

<!-- <div class="flex overflow-x-auto p-5 gap-4"> -->
<div class=" overflow-x-scroll m-4 pb-8">
	{#if tags}
		<div class="grid gap-6 max-w-max" style="grid-template-columns: repeat({tags.length}, 1fr)">
			{#each tags as tagGroup}
				<div class="flex flex-row w-[80vw] h-full flex-wrap shrink-1 gap-2">
					{#each tagGroup as tag}
						{#if selected_tags.includes(tag)}
							<Pill on:onTagSelect={onTagSelect} {tag} selected />
						{:else}
							<Pill on:onTagSelect={onTagSelect} {tag} />
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>

<!-- <div class="flex shrink-0 flex-wrap items-start gap-2 content-start max-w-[80vw] overflow-scroll">
	{#if tags}
		{#each tags as tagGroup}
			<div class="flex max-w-full shrink-0 flex-wrap items-start gap-2">
				{#each tagGroup as tag}
					<Pill on:onTagSelect={onTagSelect} {tag} />
				{/each}
			</div>
		{/each}
	{/if} -->
<!-- {#if rendered_tags}
		{#each rendered_tags as tag}
			{#if selected_tags.includes(tag)}
				<Pill on:onTagSelect={onTagSelect} {tag} />
			{:else}
				<Pill on:onTagSelect={onTagSelect} {tag} />
			{/if}
		{/each}
	{/if} -->
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
<!-- </div> -->
