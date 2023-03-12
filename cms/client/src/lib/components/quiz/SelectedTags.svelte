<script>
	export let selected_tags;
	import PillCloseable from '$lib/components/PillCloseable.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let url = null;
	let isActive = false;

	function onTagClose(event) {
		dispatch('onTagClose', event.detail);
	}

	$: tags = selected_tags;

	$: {
		console.log(selected_tags);
		if (selected_tags.length === 0) {
			url = null;
			console.log('null');
			isActive = false;
		} else {
			url = '/result?data=' + selected_tags;
			console.log('not null');
			isActive = true;
		}
	}
</script>

<div class="p-5 pt-10 h-full">
	<div
		class="relative custom_900:h-full rounded-3xl border-2 {isActive
			? 'border-drexel-light-blue'
			: 'border-[#d0d3d4]'}"
	>
		<a
			class="absolute top-0 right-4 -translate-y-1/2 px-4 py-1 text-white text-sm rounded-2xl border-4 border-white {isActive
				? 'bg-drexel-light-blue'
				: 'bg-[#d0d3d4] cursor-not-allowed'}"
			href={url}
		>
			View Results
		</a>
		<div
			class="flex h-[20vh] custom_900:h-full flex-wrap gap-2 overflow-auto px-4 py-2 pt-6 content-start custom_900:w-full custom_900:min-w-[30vw]"
		>
			{#each tags as tag}
				<PillCloseable on:onTagClose={onTagClose} {tag} />
			{/each}
		</div>
	</div>
</div>
