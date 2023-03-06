<script>
	import { goto } from '$app/navigation';

	setTimeout(() => {
		goto('/quiz'); // navigate to the idle page after idle time
	}, 3000);
</script>

<div class="h-screen flex justify-center items-center">
	<div class="p-8 m-4 text-2xl">
		<h1 class="font-bold">Hey there!</h1>
		<p>Choose the tags that you find the most interesting...</p>
	</div>
</div>
