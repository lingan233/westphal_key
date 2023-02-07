<script>
	import DetailOverview from '$lib/components/detail/DetailOverview.svelte';
	import Fundamentals from '$lib/components/detail/Fundamentals.svelte';
	import OpenSection from '$lib/components/detail/OpenSection.svelte';

	export let data;
</script>

<!-- <script>
	import DetailOverview from '../ui/DetailOverview.svelte';
	import DetailSectionA from '../ui/DetailSectionA.svelte';
	import DetailSectionB from '../ui/DetailSectionB.svelte';
	import DetailSectionC from '../ui/DetailSectionC.svelte';
	import LearnMore from '../ui/LearnMore.svelte';
	import Footer from '../ui/Footer.svelte';
	export let data;
</script> -->

<div>
	<DetailOverview
		banner_image={data.attributes.banner_image}
		name={data.attributes.name}
		description={data.attributes.description}
	/>
</div>

<div class="mt-8">
	<Fundamentals
		fundamental_image_1={data.attributes.fundamental_image_1}
		fundamental_heading_1={data.attributes.fundamental_heading_1}
		fundamental_description_1={data.attributes.fundamental_description_1}
		fundamental_image_2={data.attributes.fundamental_image_2}
		fundamental_heading_2={data.attributes.fundamental_heading_2}
		fundamental_description_2={data.attributes.fundamental_description_2}
		fundamental_image_3={data.attributes.fundamental_image_3}
		fundamental_heading_3={data.attributes.fundamental_heading_3}
		fundamental_description_3={data.attributes.fundamental_description_3}
	/>
</div>

<div class="mt-8">
	<OpenSection
		open_section_title={data.attributes.open_section_title}
		open_section_bg_text_1={data.attributes.open_section_bg_text_1}
		open_section_bg_text_2={data.attributes.open_section_bg_text_2}
		open_section_bg_text_3={data.attributes.open_section_bg_text_3}
		open_section_bg_text_4={data.attributes.open_section_bg_text_4}
		open_section_bg_text_5={data.attributes.open_section_bg_text_5}
		stat_category_1={data.attributes.stat_category_1}
		stat_1={data.attributes.stat_1}
		stat_category_2={data.attributes.stat_category_2}
		stat_2={data.attributes.stat_2}
		open_section_description={data.attributes.open_section_description}
	/>
</div>

<!-- <div class="mt-8">
	<Career section_data={data.content.section_c} />
</div>

<div class="mt-8">
	<LearnMore section_data={data} />
</div>

<div>
	<Footer />
</div> -->
