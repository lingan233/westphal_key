<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Person from '$lib/components/Person.svelte';

	export let people_section_title;
	export let person_1_name;
	export let person_1_job;
	export let person_1_info;
	export let person_1_image;
	export let person_2_name;
	export let person_2_job;
	export let person_2_info;
	export let person_2_image;
	export let person_3_name;
	export let person_3_job;
	export let person_3_info;
	export let person_3_image;

	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';
</script>

<SectionTitle section_title={people_section_title} title_position="right" />
<div class="mt-2 flex overflow-x-auto overflow-y-hidden p-5">
	<Person
		bg_color="#C14C31"
		name={person_1_name}
		job={person_1_job}
		info={person_1_info}
		img={`${PUBLIC_STRAPI_SERVER_URL}${person_1_image.data.attributes.url}`}
		alt_text={person_1_image.data.attributes.alternativeText}
	/>
	<Person
		bg_color="#006298"
		name={person_2_name}
		job={person_2_job}
		info={person_2_info}
		img={`${PUBLIC_STRAPI_SERVER_URL}${person_2_image.data.attributes.url}`}
		alt_text={person_2_image.data.attributes.alternativeText}
	/>
	<Person
		bg_color="#FF8F1C"
		name={person_3_name}
		job={person_3_job}
		info={person_3_info}
		img={`${PUBLIC_STRAPI_SERVER_URL}${person_3_image.data.attributes.url}`}
		alt_text={person_3_image.data.attributes.alternativeText}
	/>
</div>
