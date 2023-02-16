<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tag;
	export let selected;

	function onTagSelect() {
		dispatch('onTagSelect', tag);
	}
</script>

<button
	on:click={onTagSelect}
	class={`rounded-lg border border-drexel-light-blue px-3 h-10 ${
		selected ? 'bg-drexel-light-blue text-white' : 'text-drexel-dark-blue'
	}`}>{tag}</button
>
