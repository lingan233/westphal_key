<script>
export let h1
export let p

</script>

<div class="relative">
	<div class="absolute h-0.5 w-full bg-drexel-yellow top-4 -z-10" />
	<div class="ml-[5%] px-2 bg-white z-50 w-max">
		<h1 class="text-2xl font-bold text-drexel-dark-blue">{h1}</h1>
		<p class="text-drexel-dark-blue font-normal">{p}</p>
	</div>
</div>