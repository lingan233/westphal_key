<script>
	export let img_url;
	export let alt_text;
	export let heading;
	export let description;
</script>

<div>
	<img alt={alt_text} src={img_url} class="" />
	<div class="mx-auto w-[90%] md:w-[100%]">
		<p class="mt-4 text-xl font-semibold text-drexel-light-blue">{heading}</p>
		<p class="text-drexel-dark-blue">
			{description}
		</p>
	</div>
</div>
