<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/Header.svelte';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
	import { group_by_initial } from '$lib/functions/GroupByInitial';
	import { all_tags, selected_tags, displaying_tags } from '../../store';
	import { onMount } from 'svelte';
	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import Loading from '../../lib/components/loading.svelte';

	//here is the code for loading screen before quiz page
	let isLoading = true;
	// Wait for the 'loaded' event before hiding the loading screen
	function handleLoaded() {
		isLoading = false;
	}
	// Call handleLoaded after 2 seconds
	setTimeout(handleLoaded, 2000);

	const endpoint = `${PUBLIC_STRAPI_SERVER_URL}/api/tags`;
	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		$all_tags = get_all_tags(data.data);
		$displaying_tags = $all_tags;
		$selected_tags = [];
		console.log($all_tags);
	});

	function onTagSelect(event) {
		if ($all_tags.includes(event.detail) && !$selected_tags.includes(event.detail)) {
			$selected_tags = [...$selected_tags, event.detail];
		} else {
			$selected_tags = $selected_tags.filter(($all_tags) => $all_tags != event.detail);
		}
	}

	function onTagClose(event) {
		if ($all_tags.includes(event.detail) && $selected_tags.includes(event.detail)) {
			$selected_tags = $selected_tags.filter(($all_tags) => $all_tags != event.detail);
		}
	}
</script>

{#if isLoading}
	<Loading message1="Welcome!" message2="You can start by picking out your interest..." />
{/if}

<main class="h-screen pt-[10vh] sm:pt-[5vh] flex flex-col gap-[2vh] overflow-hidden">
	<Header h1={'Pick your interests'} p={'Choose as many tags as you like!'} />

	<div
		class="flex flex-col h-full w-full sm:flex-row-reverse sm:justify-evenly sm:content-middle sm:px-[5vw]"
	>
		<div class="sm:max-w-[50vw] sm:pt-6 lg:max-w-[60vw]">
			<TagGeneration
				on:onTagSelectBubble={onTagSelect}
				tags={group_by_initial($displaying_tags)}
				selected_tags={$selected_tags}
			/>
		</div>

		<div class="sm:w-full sm:max-w-[50vw] lg:max-w-[40vw] sm:max-h-[80vh]">
			<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
		</div>
	</div>
</main>
