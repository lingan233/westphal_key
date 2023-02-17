<script>
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import { all_tags, selected_tags, displaying_tags } from '../../store';
	import { onMount } from 'svelte';
	import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';

	const endpoint = `${PUBLIC_STRAPI_SERVER_URL}/api/tags`;

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		$all_tags = get_all_tags(data.data);
		$displaying_tags = $all_tags;
		$selected_tags = [];
		console.log($all_tags);
	});
</script>

<a href="/quiz">
	<h1>Welcome</h1>
	<p>You can start by picking out your interest</p>
</a>
