<script>
	import ButtonBack from '$lib/components/ButtonBack.svelte';
	import MajorOverview from '$lib/components/MajorOverview.svelte';
	import ScrollDown from '$lib/components/ScrollDown.svelte';

	export let section_data;
</script>

<div
	class="relative h-screen w-full bg-center bg-cover"
	style={`background-image: linear-gradient(to bottom, #00000080, #00000000, #000000CC), url('${section_data.content.cover_img}');`}
>
	<img
		alt="logo"
		class="absolute right-[10%] float-right w-2/5 max-w-[200px]"
		src="/images/logo.png"
	/>
	<div class="absolute top-[10%]">
		<ButtonBack />
	</div>
	<div class="absolute bottom-[20%] w-[90%] bg-drexel-dark-blue p-8">
		<MajorOverview
			major_name={section_data.content.name}
			major_description={section_data.content.description}
		/>
	</div>
	<div class="absolute bottom-[5%] left-0 right-0 mx-auto">
		<ScrollDown />
	</div>
</div>
