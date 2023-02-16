<script>
	import ButtonNext from '$lib/components/ButtonNext.svelte';
	export let selected_tags;
	// const encoded = encodeURIComponent(JSON.stringify(selected_tags));
	// console.log(selected_tags);
	// console.log(JSON.parse(decodeURIComponent(encoded)));
</script>

<!-- <div class="flex items-start justify-between">
	<div class="text-drexel-dark-blue">
		<h1 class="pb-2 text-2xl font-bold">Pick Your Interests</h1>
		<p class="text-base font-light">Choose as many tags as you like!</p>
	</div>

	<div class="absolute right-0">
		<ButtonNext linkUrl="/result?data={selected_tags}" />
	</div>
</div> -->

<div class="mb-2 h-8">
	<div class="flex items-center">
		<div class="h-0.5 w-full bg-drexel-yellow" />
		<h1 class="absolute left-[5%] z-10 bg-white px-4 text-2xl font-bold text-drexel-dark-blue">
			Pick your interests
		</h1>
		<p class="text-drexel-dark-blue absolute left-[5%] px-4 z-10 top-14 font-normal">
			Choose as many tags as you like!
		</p>
	</div>
</div>
