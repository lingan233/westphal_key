<script>
	import back_arrow from '$lib/images/BackArrow.svg';
</script>

<button
	on:click={() => window.history.back()}
	class="fixed z-30 flex items-center bg-drexel-yellow py-1 pr-5 pl-1 text-xl font-[600] text-drexel-dark-blue"
>
	<img src={back_arrow} alt="Back Arrow" />
	Back
</button>
