<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tag;

	function onTagSelect() {
		dispatch('onTagSelect', tag);
	}
</script>

<button on:click={onTagSelect} class="rounded-lg border border-drexel-light-blue px-3 h-10"
	>{tag}</button
>
