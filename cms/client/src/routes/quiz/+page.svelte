<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/Header.svelte';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
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

<main class="h-screen pt-[10vh] sm:pt-[5vh] flex flex-col gap-[2vh] overflow-hidden">
	<Header h1={'Pick your interests'} p={'Choose as many tags as you like!'} />
	<div
		class="flex flex-col h-fit w-full custom_900:flex-row-reverse custom_900:justify-evenly custom_900:content-middle custom_900:px-[5vw]"
	>
		<div class="custom_900:pt-6 custom_900:max-w-[60vw]">
			<TagGeneration
				on:onTagSelectBubble={onTagSelect}
				tags={$displaying_tags}
				selected_tags={$selected_tags}
			/>
		</div>

		<div class="custom_900:max-w-[40vw] shrink-0">
			<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
		</div>
	</div>
</main>
