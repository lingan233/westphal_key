<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/Header.svelte';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
	import { group_by_initial } from '$lib/functions/GroupByInitial';
	import { all_tags, selected_tags, displaying_tags } from '../../store';
	import { onMount } from 'svelte';
	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';
	import { get_all_tags } from '$lib/functions/GetAllTags';

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
		}
		else{
			$selected_tags = $selected_tags.filter(($all_tags) => $all_tags != event.detail);
		}
	}

	function onTagClose(event) {
		if ($all_tags.includes(event.detail) && $selected_tags.includes(event.detail)) {
			$selected_tags = $selected_tags.filter(($all_tags) => $all_tags != event.detail);
		}
	}
</script>

<main>
	<Header h1={"Pick your interests"} p={"Choose as many tags as you like!"} />

	<div>
		<TagGeneration
			on:onTagSelectBubble={onTagSelect}
			tags={group_by_initial($displaying_tags)}
			selected_tags={$selected_tags}
		/>
		<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
	</div>
</main>
