<script>
	export let bg_color;
	export let name;
	export let job;
	export let info;
	export let img;
	export let alt_text;
</script>

<div class="ml-10 mr-8">
	<div class="relative h-80 w-64 top-6">
		<div
			class="absolute h-64 w-80 -rotate-90 -left-8 flex justify-center"
			style="background-color: {bg_color}"
		>
			<p class="w-fit self-end text-white/30 font-bold text-[2.5rem] leading-none">{info}</p>
		</div>
		<div class="absolute w-full top-0">
			<img alt={alt_text} src={img} class="w-52 relative -left-4" />
			<p class="relative left-4 text-white text-sm w-40 pt-1">
				<span class="text-base font-semibold">{name}</span><br />
				{job}
			</p>
			<!-- <p
				class="relative left-[6.25rem] bottom-[10.75rem] w-fit rotate-[270deg] select-none overflow-hidden whitespace-nowrap text-[2.75rem] font-bold text-white/30"
			>
				{info}
			</p> -->
		</div>
	</div>
</div>
