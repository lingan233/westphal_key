<script>
	export let img_url;
	export let alt_text;
	export let heading;
	export let description;
</script>

<div class="w-[90%] shrink-0 md:w-[30rem] lg:w-[35rem]">
	<img alt={alt_text} src={img_url} class="" />
	<div class="">
		<p class="mt-4 text-xl font-semibold text-drexel-light-blue">{heading}</p>
		<p class="text-drexel-dark-blue">
			{description}
		</p>
	</div>
</div>
