<script>
	export let selected_tags;
	import PillCloseable from '$lib/components/PillCloseable.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onTagClose(event) {
		dispatch('onTagClose', event.detail);
	}

	$: tags = selected_tags;
</script>

<div class="p-5 pt-10 h-full">
	<div class="relative custom_900:h-full rounded-3xl border-2 border-drexel-light-blue">
		<a
			class="absolute top-0 right-4 -translate-y-1/2 bg-drexel-light-blue px-4 py-1 text-white text-sm rounded-2xl border-4 border-white"
			href="/result?data={selected_tags}"
		>
			View Results
		</a>
		<div
			class="flex h-[20vh] flex-wrap gap-2 overflow-auto px-4 py-2 pt-6 align-top  custom_900:w-[40vw]"
		>
			{#each tags as tag}
				<PillCloseable on:onTagClose={onTagClose} {tag} />
			{/each}
		</div>
	</div>
</div>
