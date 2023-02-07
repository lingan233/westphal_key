<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/quiz/Header.svelte';
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
	import { selected_tags, displaying_tags } from './store';
	import { onMount } from 'svelte';

	const endpoint = 'http://localhost:1337/api/tags';
	let tags = [];
	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		tags = get_all_tags(data.data);
		$displaying_tags = tags;
		$selected_tags = [];
	});

	function onTagSelect(event) {
		if (tags.includes(event.detail) && !$selected_tags.includes(event.detail)) {
			$selected_tags = [...$selected_tags, event.detail];
		}
	}

	function onTagClose(event) {
		if (tags.includes(event.detail) && $selected_tags.includes(event.detail)) {
			$selected_tags = $selected_tags.filter((tag) => tag != event.detail);
		}
	}
</script>

<main class="grid h-screen grid-rows-[10vh_1fr_3rem] gap-8 p-5 py-16">
	<Header selected_tags={$selected_tags} />

	<div class="grid px-[5vw] gap-[5vw]">
		<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
		<TagGeneration on:onTagSelectBubble={onTagSelect} tags={$displaying_tags} />
	</div>
</main>
