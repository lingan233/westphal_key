<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import OpenSectionBgText from '$lib/components/OpenSectionBgText.svelte';
	import OpenSectionStat from '$lib/components/OpenSectionStat.svelte';
	import OpenSectionDescription from '$lib/components/OpenSectionDescription.svelte';

	export let section_data;
	export let open_section_title;
	export let open_section_bg_text_1;
</script>

<SectionTitle section_title={open_section_title} title_position="right" />
<div class="relative w-full bg-drexel-dark-blue">
	<div>
		<!-- {#each section_data.content.companies as company}
			<OpenSectionBgText company_name={company} />
		{/each} -->
		<OpenSectionBgText bg_text={open_section_bg_text_1} />
	</div>

	<div class="absolute top-1/2 -translate-y-1/2">
		<OpenSectionStat
			stat_name={section_data.content.stat_1.name}
			stat={section_data.content.stat_1.stat}
		/>
		<OpenSectionStat
			stat_name={section_data.content.stat_2.name}
			stat={section_data.content.stat_2.stat}
		/>
	</div>
</div>
<div class="mx-auto mt-4 w-[90%]">
	<OpenSectionDescription coop_description={section_data.content.description} />
</div>
