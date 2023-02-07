<script>
	import { writable } from 'svelte/store';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	export let section_data;
	const carousel_length = section_data.contents.length;

	const active_slide = writable(0);
	let active_slide_value;
	active_slide.subscribe((value) => {
		active_slide_value = value;
	});

	const nextSlide = () => {
		active_slide.update((n) => {
			if (n < carousel_length - 1) {
				return n + 1;
			} else {
				return 0;
			}
		});
	};

	const prevSlide = () => {
		active_slide.update((n) => {
			if (n > 0) {
				return n - 1;
			} else {
				return carousel_length - 1;
			}
		});
	};
</script>

<SectionTitle section_title={section_data.name} title_position="left" />
<div class="relative">
	{#each section_data.contents as content, i}
		<div class={`${i === active_slide_value ? 'block' : 'hidden'}`}>
			<div class="relative">
				<img alt={content.name} src={content.img} />
				<div class="absolute left-0 bottom-0 bg-drexel-light-blue">
					<div class="flex items-center">
						<button on:click={prevSlide}>
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.29 11.9997L14.83 8.4597C15.0163 8.27234 15.1208 8.01889 15.1208 7.7547C15.1208 7.49052 15.0163 7.23707 14.83 7.0497C14.737 6.95598 14.6264 6.88158 14.5046 6.83081C14.3827 6.78004 14.252 6.75391 14.12 6.75391C13.988 6.75391 13.8573 6.78004 13.7354 6.83081C13.6136 6.88158 13.503 6.95598 13.41 7.0497L9.17 11.2897C9.07628 11.3827 9.00188 11.4933 8.95111 11.6151C8.90035 11.737 8.87421 11.8677 8.87421 11.9997C8.87421 12.1317 8.90035 12.2624 8.95111 12.3843C9.00188 12.5061 9.07628 12.6167 9.17 12.7097L13.41 16.9997C13.5034 17.0924 13.6143 17.1657 13.7361 17.2155C13.8579 17.2652 13.9884 17.2905 14.12 17.2897C14.2516 17.2905 14.3821 17.2652 14.5039 17.2155C14.6257 17.1657 14.7366 17.0924 14.83 16.9997C15.0163 16.8123 15.1208 16.5589 15.1208 16.2947C15.1208 16.0305 15.0163 15.7771 14.83 15.5897L11.29 11.9997Z"
									fill="white"
								/>
							</svg>
						</button>
						<div class="px-2 font-semibold text-white">{i + 1} / {carousel_length}</div>
						<button on:click={nextSlide}>
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.71 12.0003L9.17 15.5403C8.98374 15.7277 8.8792 15.9811 8.8792 16.2453C8.8792 16.5095 8.98374 16.7629 9.17 16.9503C9.26296 17.044 9.37356 17.1184 9.49542 17.1692C9.61728 17.22 9.74798 17.2461 9.88 17.2461C10.012 17.2461 10.1427 17.22 10.2646 17.1692C10.3864 17.1184 10.497 17.044 10.59 16.9503L14.83 12.7103C14.9237 12.6173 14.9981 12.5067 15.0489 12.3849C15.0997 12.263 15.1258 12.1323 15.1258 12.0003C15.1258 11.8683 15.0997 11.7376 15.0489 11.6157C14.9981 11.4939 14.9237 11.3833 14.83 11.2903L10.59 7.0003C10.4966 6.90761 10.3857 6.83429 10.2639 6.78452C10.1421 6.73476 10.0116 6.70953 9.88 6.71029C9.74839 6.70953 9.61793 6.73476 9.49609 6.78452C9.37425 6.83429 9.26344 6.90761 9.17 7.0003C8.98374 7.18766 8.8792 7.44111 8.8792 7.7053C8.8792 7.96948 8.98374 8.22293 9.17 8.4103L12.71 12.0003Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="mx-auto w-[90%]">
				<p class="mt-4 text-xl font-semibold text-drexel-light-blue">{content.name}</p>
				<p class="text-drexel-dark-blue">
					{content.description}
				</p>
			</div>
		</div>
	{/each}
</div>
