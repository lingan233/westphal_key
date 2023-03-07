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
	class={`rounded-full h-8 border border-drexel-light-blue px-4 py-1 text-sm font-medium
	${selected ? 'bg-drexel-light-blue text-white' : 'text-drexel-dark-blue'}`}
>
	<p>
		{tag}
	</p>
</button>
