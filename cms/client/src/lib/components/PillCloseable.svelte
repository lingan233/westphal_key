<script>
	import cross from '$lib/images/cross.svg';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tag;

	function onTagClose() {
		dispatch('onTagClose', tag);
	}
</script>

<button
	on:click={onTagClose}
	class="tags flex h-fit items-center justify-center gap-1 rounded-full border border-drexel-light-blue py-0.5 px-0.5 leading-4"
>
	<p class="pl-1 text-drexel-dark-blue">{tag}</p>
	<img src={cross} alt="" />
</button>
