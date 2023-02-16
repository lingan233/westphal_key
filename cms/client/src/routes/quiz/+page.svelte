<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/quiz/Header.svelte';
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
	import { selected_tags, displaying_tags } from './store';
	import { onMount } from 'svelte';
	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';

	const endpoint = `${PUBLIC_STRAPI_SERVER_URL}/api/tags`;
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

<main class="py-10">
	<Header selected_tags={$selected_tags} />

	<div>
		<div class="grid grid-rows-6">
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
		<TagGeneration on:onTagSelectBubble={onTagSelect} tags={$displaying_tags} />
		<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
	</div>
</main>
