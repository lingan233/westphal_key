<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tag;

	function onTagSelect() {
		dispatch('onTagSelect', tag);
	}
</script>

<button on:click={onTagSelect} class="tags rounded-full border border-drexel-light-blue py-1 px-3"
	>{tag}</button>
