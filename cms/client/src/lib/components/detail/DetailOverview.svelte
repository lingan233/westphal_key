<script>
	import ButtonBack from '$lib/components/ButtonBack.svelte';
	import MajorOverview from '$lib/components/MajorOverview.svelte';
	import ScrollDown from '$lib/components/ScrollDown.svelte';

	import Logo from '$lib/images/Logo.png';

	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';

	export let banner_image;
	export let name;
	export let description;
</script>

<div
	class="relative h-screen w-full bg-center bg-cover"
	style={`background-image: linear-gradient(to bottom, #00000080, #00000000, #000000CC), url('${PUBLIC_STRAPI_SERVER_URL}${banner_image.data.attributes.url}');`}
>
	<img alt="logo" class="absolute right-[10%] float-right w-[150px]" src={Logo} />
	<div class="absolute top-[10%]">
		<ButtonBack />
	</div>
	<div
		class="absolute bottom-[20%] w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] bg-drexel-dark-blue p-8"
	>
		<MajorOverview major_name={name} major_description={description} />
	</div>
	<div class="absolute bottom-[5%] left-0 right-0 mx-auto md:hidden">
		<ScrollDown />
	</div>
</div>
