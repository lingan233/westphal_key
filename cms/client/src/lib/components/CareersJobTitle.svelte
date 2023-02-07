<script>
	export let job_title;
	export let shadow_position;
</script>

<div class="relative">
	{#if shadow_position === 'left'}
		<p
			class="absolute bottom-1 max-w-full select-none overflow-hidden whitespace-nowrap text-5xl font-bold text-drexel-bright-blue/20"
		>
			{job_title}
		</p>
		<p class="relative z-10 my-5 ml-8 text-3xl font-bold text-drexel-dark-blue">{job_title}</p>
		<div class="absolute bottom-1 h-1 w-5/6 bg-drexel-yellow" />
	{:else if shadow_position === 'right'}
		<p
			class="absolute bottom-1 right-0 max-w-full select-none overflow-hidden whitespace-nowrap text-right text-5xl font-bold text-drexel-bright-blue/20"
			style="direction: rtl"
		>
			{job_title}
		</p>
		<p class="relative z-10 my-5 ml-12 text-3xl font-bold text-drexel-dark-blue">{job_title}</p>
		<div class="absolute bottom-1 h-1 w-5/6 bg-drexel-yellow" />
	{/if}
</div>
