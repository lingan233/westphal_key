<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import OpenSectionBgText from '$lib/components/OpenSectionBgText.svelte';
	import OpenSectionStat from '$lib/components/OpenSectionStat.svelte';
	import OpenSectionDescription from '$lib/components/OpenSectionDescription.svelte';

	export let open_section_title;
	export let open_section_bg_text_1;
	export let open_section_bg_text_2;
	export let open_section_bg_text_3;
	export let open_section_bg_text_4;
	export let open_section_bg_text_5;
	export let stat_category_1;
	export let stat_1;
	export let stat_category_2;
	export let stat_2;
	export let open_section_description;
</script>

<SectionTitle section_title={open_section_title} title_position="right" />
<div class="relative w-full bg-drexel-dark-blue">
	<div>
		<!-- {#each section_data.content.companies as company}
			<OpenSectionBgText company_name={company} />
		{/each} -->
		<OpenSectionBgText bg_text={open_section_bg_text_1} />
		<OpenSectionBgText bg_text={open_section_bg_text_2} />
		<OpenSectionBgText bg_text={open_section_bg_text_3} />
		<OpenSectionBgText bg_text={open_section_bg_text_4} />
		<OpenSectionBgText bg_text={open_section_bg_text_5} />
	</div>

	<div class="absolute top-1/2 -translate-y-1/2">
		<OpenSectionStat stat_category={stat_category_1} stat={stat_1} />
		<OpenSectionStat stat_category={stat_category_2} stat={stat_2} />
	</div>
</div>
<div class="mx-auto mt-4 w-[90%]">
	<OpenSectionDescription description={open_section_description} />
</div>
