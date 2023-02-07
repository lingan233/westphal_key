<script>
	export let section_title;
	export let title_position;
</script>

<div class="mb-2 flex h-8 items-center">
	<div class="h-0.5 w-full bg-drexel-yellow" />
	{#if title_position === 'left'}
		<h2 class="absolute left-[10%] z-10 bg-white px-4 text-2xl font-bold text-drexel-light-blue">
			{section_title}
		</h2>
	{:else if title_position === 'right'}
		<h2 class="absolute right-[10%] z-10 bg-white px-4 text-2xl font-bold text-drexel-light-blue">
			{section_title}
		</h2>
	{:else}
		<h2 class="absolute right-[10%] z-10 bg-white px-4 text-2xl font-bold text-drexel-light-blue">
			There's an error with title_position prop in DetailSectionTitle.svelte
		</h2>
	{/if}
</div>
