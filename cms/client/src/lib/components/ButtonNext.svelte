<script>
	export let linkUrl;
	import BackArrow from '$lib/images/BackArrow.svg';
</script>

<a
	href={linkUrl}
	class="flex h-fit items-center bg-drexel-yellow py-1 px-1 pl-4 text-xl font-[600] text-drexel-dark-blue"
>
	Next
	<img class="rotate-180" src={BackArrow} alt="" />
</a>
