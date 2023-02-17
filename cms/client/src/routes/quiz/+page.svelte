<script>
	import SelectedTags from '$lib/components/quiz/SelectedTags.svelte';
	import Header from '$lib/components/quiz/Header.svelte';
	import TagGeneration from '$lib/components/quiz/TagGeneration.svelte';
	import { all_tags, selected_tags, displaying_tags } from '../../store';

	function onTagSelect(event) {
		if ($all_tags.includes(event.detail) && !$selected_tags.includes(event.detail)) {
			$selected_tags = [...$selected_tags, event.detail];
		}
	}

	function onTagClose(event) {
		if ($all_tags.includes(event.detail) && $selected_tags.includes(event.detail)) {
			$selected_tags = $selected_tags.filter(($all_tags) => $all_tags != event.detail);
		}
	}
</script>

<main class="py-10">
	<Header selected_tags={$selected_tags} />

	<div>
		<TagGeneration
			on:onTagSelectBubble={onTagSelect}
			tags={$displaying_tags}
			selected_tags={$selected_tags}
		/>
		<SelectedTags on:onTagClose={onTagClose} selected_tags={$selected_tags} />
	</div>
</main>
