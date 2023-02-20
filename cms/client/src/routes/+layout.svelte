<script>
	import '../app.css';
	import { onMount} from 'svelte';
	import { goto } from '$app/navigation';
  
	const IDLE_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

	let timer;
  
	function resetTimer() {
	  clearTimeout(timer);
	  timer = setTimeout(() => {
		goto('/'); // navigate to the idle page after idle time
	  }, IDLE_TIME);
	}
  
	onMount(() => {
	  resetTimer();
	  window.addEventListener('mousemove', resetTimer);
	  window.addEventListener('keydown', resetTimer);
	});
</script>

<!-- <h1>Drexel Westphal</h1> -->
<slot />
