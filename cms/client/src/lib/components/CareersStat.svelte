<script>
	export let stat_category;
	export let stat;
	export let position;
</script>

{#if position === 'normal'}
	<div class="mx-10">
		<div class="my-5 flex items-center">
			<div class="relative z-10 text-5xl font-bold text-drexel-light-blue lg:text-6xl">{stat}</div>
			<div class="relative -left-4 flex items-center">
				<div class="mx-2 h-20 w-2.5 shrink-0 bg-drexel-light-orange lg:w-3 lg:h-24" />
				<div class="text-drexel-light-blue lg:text-xl">{stat_category}</div>
			</div>
		</div>
	</div>
{:else if position === 'reverse'}
	<div class="mx-10">
		<div class="my-5 flex items-center justify-end">
			<div class="relative -right-4 flex items-center">
				<div class="text-right text-drexel-light-blue lg:text-xl">{stat_category}</div>
				<div class="mx-2 h-20 w-2.5 shrink-0 bg-drexel-light-orange lg:w-3 lg:h-24" />
			</div>
			<div class="relative z-10 text-5xl font-bold text-drexel-light-blue lg:text-6xl">{stat}</div>
		</div>
	</div>
{/if}

<!-- 
<div class="flex items-center justify-between w-[90%] mx-auto my-5">
    <p class="text-drexel-light-blue text-5xl font-bold">{stat}</p>
    <div class="flex items-center">
        <div class="bg-drexel-light-orange mx-2 w-2 h-10"></div>
        <div class="text-drexel-light-blue ">{stat_description}</div>
    </div>
</div> -->
