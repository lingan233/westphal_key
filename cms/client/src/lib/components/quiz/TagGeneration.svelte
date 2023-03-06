<script>
	import Pill from '$lib/components/Pill.svelte';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { group_by_initial } from '$lib/functions/GroupByInitial';
	const dispatch = createEventDispatcher();

	export var tags;
	var rendered_tags = [];
	var initials = "";

	export let selected_tags;

	function onTagSelect(event) {
		dispatch('onTagSelectBubble', event.detail);
	}

	let getInitials;

	const incrementCallCount = (function () {
		let callCount = 0;
		return function () {
			return ++callCount;
		};
	})();
	let allInitials = [];

	onMount(() => {
		getInitials = function (tagGroup) {
			let callCount = incrementCallCount();
			let initials = [];
			if (callCount === 1) {
				initials.push('#');
				initials.push(tagGroup[tagGroup.length - 1].charAt(0));
			} else if (callCount === tags.length) {
				initials.push(tagGroup[0].charAt(0));
				initials.push('Z');
			} else {
				initials.push(tagGroup[0].charAt(0));
				initials.push(tagGroup[tagGroup.length - 1].charAt(0));
			}

			if (initials.length) {
				return initials.join(' - ');
			}
		};
		allInitials = tags.flatMap(getInitials);

	});
</script>

<!-- <div class="flex overflow-x-auto p-5 gap-4"> -->
<div class="overflow-y-hidden max-w-[100%] max-h-[80vh] m-4 pb-8">
	{#if tags}
		<div
			class="grid sm:flex sm:flex-col max-w-fit mr-[20vw] sm:m-0 gap-4 grid-cols-{tags.length + 1}"
			style="grid-template-columns: repeat({tags.length + 1}, 1fr)"
		>
			{#each tags as tagGroup, i}
				<div class="w-full">
					<div class="text-xl font-thin text-drexel-light-blue mb-2">
						<!-- {#if (initials = getInitials(tagGroup))}
							{initials}
						{/if} -->
						{allInitials[i]}
					</div>
					<div class="w-[80vw] sm:w-full h-full gap-2 flex flex-wrap content-start">
						{#each tagGroup as tag}
							{#if selected_tags.includes(tag)}
								<Pill on:onTagSelect={onTagSelect} {tag} selected />
							{:else}
								<Pill on:onTagSelect={onTagSelect} {tag} />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
			<div class="w-[1rem] h-full" />
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
