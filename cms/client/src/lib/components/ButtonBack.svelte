<script>
	import back_arrow from '$lib/images/BackArrow.svg';
	import { onMount } from 'svelte';

	let y;
	$: innerHeight = 0;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<button
	on:click={() => window.history.back()}
	class="fixed z-30 flex items-center text-xl font-[600] text-drexel-dark-blue"
>
	<img src={back_arrow} alt="Back Arrow" class="bg-drexel-yellow h-10" />
	<div
		class={`flex items-center h-10 pr-3 bg-drexel-yellow transition-all duration-500 ease-in-out -z-10 ${
			innerHeight / 3 < y ? '-translate-x-14' : 'translate-x-0'
		}`}
	>
		<p>Back</p>
	</div>
</button>
