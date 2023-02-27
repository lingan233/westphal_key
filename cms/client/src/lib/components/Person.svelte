<script>
	export let bg_color;
	export let name;
	export let job;
	export let info;
	export let img;
	export let alt_text;
</script>

<div class="ml-10 mr-8">
	<div class="relative h-[20rem] w-[16rem]">
		<div class="absolute h-[30rem] w-[16rem]" style="background-color: {bg_color}" />
		<div class="absolute top-6 -left-8 w-full">
			<img alt={alt_text} src={img} class="aspect-ratio-[0.75] w-[14rem]" />
			<p class="relative left-14 top-2 text-white">
				<span class="text-xl font-semibold">{name}</span><br />
				{job}
			</p>
			<p
				class="relative left-[6.25rem] bottom-[10.75rem] w-fit rotate-[270deg] select-none overflow-hidden whitespace-nowrap text-[2.75rem] font-bold text-white/30"
			>
				{info}
			</p>
		</div>
	</div>
</div>
