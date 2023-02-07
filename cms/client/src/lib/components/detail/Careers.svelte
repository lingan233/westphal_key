<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import CareersStat from '$lib/components/CareersStat.svelte';
	import CareersJobTitle from '$lib/components/CareersJobTitle.svelte';

	export let career_stat_category_1;
	export let career_stat_1;
	export let career_stat_category_2;
	export let career_stat_2;
	export let job_title_1;
	export let job_title_2;
	export let job_title_3;
	export let job_title_4;
	export let job_title_5;
</script>

<SectionTitle section_title="Careers" title_position="left" />
<div class="mt-5">
	<CareersStat stat_category={career_stat_category_1} stat={career_stat_1} position="normal" />
	<CareersStat stat_category={career_stat_category_2} stat={career_stat_2} position="reverse" />
</div>
<div class="mt-12">
	<!-- {#each section_data.content.job_titles as job_title, i}
		{#if i % 2 === 0}
			<CareersJobTitle {job_title} shadow_position="right" />
		{:else}
			<CareersJobTitle {job_title} shadow_position="left" />
		{/if}
	{/each} -->
	<CareersJobTitle job_title={job_title_1} shadow_position="right" />
	<CareersJobTitle job_title={job_title_2} shadow_position="left" />
	<CareersJobTitle job_title={job_title_3} shadow_position="right" />
	<CareersJobTitle job_title={job_title_4} shadow_position="left" />
	<CareersJobTitle job_title={job_title_5} shadow_position="right" />
</div>
