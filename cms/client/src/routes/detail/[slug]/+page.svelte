<script>
	export let data;
	console.log(data);
</script>

<!-- <script>
	import Career from '$lib/components/detail/Career.svelte';
	import DetailOverview from '$lib/components/detail/DetailOverview.svelte';
	import Footer from '$lib/components/detail/Footer.svelte';
	import Fundamentals from '$lib/components/detail/Fundamentals.svelte';
	import LearnMore from '$lib/components/detail/LearnMore.svelte';
	import OpenSection from '$lib/components/detail/OpenSection.svelte';

	export let data;
</script>

<div>
	<DetailOverview section_data={data} />
</div>

<div class="mt-8">
	<Fundamentals section_data={data.content.section_a} />
</div>

<div class="mt-8">
	<OpenSection section_data={data.content.section_b} />
</div>

<div class="mt-8">
	<Career section_data={data.content.section_c} />
</div>

<div class="mt-8">
	<LearnMore section_data={data} />
</div>

<div>
	<Footer />
</div> -->
