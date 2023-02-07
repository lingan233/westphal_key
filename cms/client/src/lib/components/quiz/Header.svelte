<script>
	import ButtonNext from '$lib/components/ButtonNext.svelte';
	export let selected_tags;
	// const encoded = encodeURIComponent(JSON.stringify(selected_tags));
	// console.log(selected_tags);
		// console.log(JSON.parse(decodeURIComponent(encoded)));

</script>

<div class="flex items-start justify-between">
	<div class="text-drexel-dark-blue">
		<h1 class="pb-2 text-2xl font-bold">Pick Your Interests</h1>
		<p class="text-base font-light">Choose as many tags as you like!</p>
	</div>
	<div class='absolute right-0'>
		<ButtonNext linkUrl="/result?data={selected_tags}" />
	</div>
</div>