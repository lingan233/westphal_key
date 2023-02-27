<script>
	import Header from '$lib/components/Header.svelte';
	import SubHeader from '$lib/components/result/SubHeader.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';
	import Loading from '../../lib/components/loading.svelte';

	//here is the code for loading screen before result page
	let isLoading = true;
	// Wait for the 'loaded' event before hiding the loading screen
	function handleLoaded() {
		isLoading = false;
	}
	// Call handleLoaded after 2 seconds
	setTimeout(handleLoaded, 2000);

	const endpoint = `${PUBLIC_STRAPI_SERVER_URL}/api/majors?populate=*`;
	let tags = [];
	let majorsMatchTags = [];
	let allMajors = [];

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();

		allMajors = data.data;

		const urlParams = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop)
		});
		tags = urlParams.data.split(',');

		majorsMatchTags = data.data
			.filter((major) => {
				return major.attributes.tags.data.some((tag) => tags.includes(tag.attributes.tag));
			})
			.sort((a, b) => {
				let scoreA = a.attributes.tags.data.filter((tag) =>
					tags.includes(tag.attributes.tag)
				).length;
				let scoreB = b.attributes.tags.data.filter((tag) =>
					tags.includes(tag.attributes.tag)
				).length;
				return scoreB - scoreA;
			});
	});
</script>

{#if isLoading}
	<Loading message1="Just a second," message2="Your result will be right here." />
{/if}

<div class="py-10">
	<Header h1={"Recommended for you"} p={"Degrees based on your interests"} />
	<div class="relative h-32 sm:h-full rounded-3xl border-2 border-drexel-light-blue mx-4 my-8">
		<h2
			class="absolute top-0 left-4 -translate-y-1/2 bg-white p-1 px-2 text-drexel-dark-blue rounded-full"
		>
			Interests Picked
		</h2>
		<div class="flex max-h-full flex-wrap gap-2 overflow-auto px-4 py-2 pt-5 align-top">
			{#each tags as tag}
				<button class="rounded-lg border border-drexel-light-blue px-3 h-8 text-drexel-dark-blue">
					<p>{tag}</p>
				</button>
			{/each}
		</div>
		<a href="/quiz" class="absolute bottom-0 right-4 translate-y-2/3 text-white bg-drexel-light-blue rounded-full py-1 px-4 m-1 text-sm border-4 border-white">
		  Search Again
		</a>
	</div>
	<div class="grid grid-cols-2 font-semibold pt-2 pb-8 px-4">
		{#each majorsMatchTags as major, i}
			<a href="/{major.attributes.shorthand}">
				<div class="m-2 relative rounded-lg text-white">
					{#if i == 0}
						<div
							class="border-4 border-white py-1 px-4 text-base text-drexel-dark-blue absolute -left-3 -top-3 rounded-full bg-drexel-yellow"
						>
							Best Match
						</div>
					{/if}
					<img
						src={`${PUBLIC_STRAPI_SERVER_URL}${major.attributes.banner_image.data.attributes.url}`}
						alt={major.attributes.banner_image.data.attributes.alternativeText}
						class="object-cover w-full aspect-[3/4]"
					/>
					<div
						class="absolute w-full py-6 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-5 p-2"
					>
						{major.attributes.name}
					</div>
				</div>
			</a>
		{/each}
		<!-- {#each data.majors as major}
			<a href="/detail/{major.id}">
				<div class="m-2 relative rounded-lg overflow-hidden text-white">
					<img
						src={major.content.cover_img}
						alt="Avatar"
						class="object-cover w-full aspect-[3/4]"
					/>
					<div
						class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-4 p-2"
					>
						{major.content.name}
					</div>
				</div>
			</a>
		{/each} -->
	</div>
	<SubHeader />
	<div class="grid grid-cols-2 font-semibold px-4">
		{#each allMajors as major}
			<a href="/{major.attributes.shorthand}">
				<div class="m-2 relative rounded-lg overflow-hidden text-white">
					<img
						src={`${PUBLIC_STRAPI_SERVER_URL}${major.attributes.banner_image.data.attributes.url}`}
						alt={major.attributes.banner_image.data.attributes.alternativeText}
						class="object-cover w-full aspect-[3/4]"
					/>
					<div
						class="absolute w-full py-6 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-5 p-2"
					>
						{major.attributes.name}
					</div>
				</div>
			</a>
		{/each}
	</div>
	<!-- <div class="flex justify-center">
        {#if currentMajor < tags.length}
		need currentMajor = currentMajor + tags.length - currentMajor
        <button on:click={() => currentMajor = tags.length}
            id="loadmore"
            type="button"
            class="btn btn-secondary p-2 mb-4">
            Show more
        </button>
        {/if}        
    </div> -->
</div>
