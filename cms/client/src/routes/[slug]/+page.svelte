<script>
	import DetailOverview from '$lib/components/detail/DetailOverview.svelte';
	import Fundamentals from '$lib/components/detail/Fundamentals.svelte';
	import OpenSection from '$lib/components/detail/OpenSection.svelte';
	import Careers from '$lib/components/detail/Careers.svelte';
	import People from '$lib/components/detail/People.svelte';
	import Footer from '$lib/components/detail/Footer.svelte';

	export let data;

	import { writable } from 'svelte/store';

	const scrollState = writable(true);
	let scrollStateValue;
	scrollState.subscribe((value) => {
		scrollStateValue = value;
		console.log(scrollStateValue);
	});

	const scrollPastDetailOverview = () => {
		// if (
		// 	Math.max(document.documentElement.scrollTop || document.body.scrollTop) >
		// 	Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
		// ) {
		// 	scrollState.set(false);
		// } else {
		// 	scrollState.set(true);
		// }
		// console.log(scrollState);
		console.log('scroll');
	};
</script>

<div on:scroll={scrollPastDetailOverview}>
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

	<div class="mt-8">
		<Careers
			career_stat_category_1={data.attributes.career_stat_category_1}
			career_stat_1={data.attributes.career_stat_1}
			career_stat_category_2={data.attributes.career_stat_category_2}
			career_stat_2={data.attributes.career_stat_2}
			job_title_1={data.attributes.job_title_1}
			job_title_2={data.attributes.job_title_2}
			job_title_3={data.attributes.job_title_3}
			job_title_4={data.attributes.job_title_4}
			job_title_5={data.attributes.job_title_5}
		/>
	</div>

	<div class="mt-8">
		<People
			people_section_title={data.attributes.people_section_title}
			person_1_name={data.attributes.person_1_name}
			person_1_job={data.attributes.person_1_job}
			person_1_info={data.attributes.person_1_info}
			person_1_image={data.attributes.person_1_image}
			person_2_name={data.attributes.person_2_name}
			person_2_job={data.attributes.person_2_job}
			person_2_info={data.attributes.person_2_info}
			person_2_image={data.attributes.person_2_image}
			person_3_name={data.attributes.person_3_name}
			person_3_job={data.attributes.person_3_job}
			person_3_info={data.attributes.person_3_info}
			person_3_image={data.attributes.person_3_image}
		/>
	</div>

	<div class="mt-8">
		<Footer shorthand={data.attributes.shorthand} qr_code={data.attributes.qr_code} />
	</div>
</div>
