<script>
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Person from '$lib/components/Person.svelte';

	export let section_data;
	export const color = ['#C14C31', '#006298', '#B7BF10', '#FF8F1C'];
</script>

<SectionTitle section_title={section_data.name} title_position="right" />
<div class="mt-10 flex overflow-x-auto overflow-y-hidden p-5">
	{#each section_data.content.alumni as alumnus, i}
		<Person
			bg_color={color[i % 4]}
			name={alumnus.name}
			job_title={alumnus.job_title}
			company={alumnus.company}
			year={alumnus.class}
			img={alumnus.img}
		/>
	{/each}
</div>
