<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import CareersStat from '$lib/components/CareersStat.svelte';
	import CareersJobTitle from '$lib/components/CareersJobTitle.svelte';

	export let section_data;
</script>

<SectionTitle section_title={section_data.name} title_position="left" />
<div class="mt-5">
	<CareersStat
		stat_description={section_data.content.stat_1.description}
		stat={section_data.content.stat_1.stat}
		position="normal"
	/>
	<CareersStat
		stat_description={section_data.content.stat_2.description}
		stat={section_data.content.stat_2.stat}
		position="reverse"
	/>
</div>
<div class="mt-12">
	{#each section_data.content.job_titles as job_title, i}
		{#if i % 2 === 0}
			<CareersJobTitle {job_title} shadow_position="right" />
		{:else}
			<CareersJobTitle {job_title} shadow_position="left" />
		{/if}
	{/each}
</div>
