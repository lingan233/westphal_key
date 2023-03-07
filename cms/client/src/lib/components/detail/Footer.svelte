<script>
	import FooterLogo from '$lib/images/FooterLogo.png';
	import LogoWhite from '$lib/images/LogoWhite.png';
	import { QRCodeImage } from 'svelte-qrcode-image';

	export let shorthand;
	export let website_url;

	console.log(website_url);
</script>

<div class="flex custom_650:hidden">
	<div class="relative w-full bg-drexel-light-blue">
		<div class="absolute top-[40%] custom_500:top-[30%] right-10 my-auto">
			<svg
				viewBox="0 0 2361 378"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-[100vw] h-auto"
			>
				<path d="M0 0V378H1917.42L2118 189L1917.42 0H0Z" fill="#6CACE4" />
				<path d="M2197.32 0H2050L2213.68 189L2050 378H2197.32L2361 189L2197.32 0Z" fill="#6CACE4" />
				<path d="M1954.32 0H1807L1970.68 189L1807 378H1954.32L2118 189L1954.32 0Z" fill="#6CACE4" />
			</svg>
		</div>
		<p
			class="absolute flex h-full items-center p-5 pt-2 text-[10vw] leading-[10vw] custom_500:text-[9vw] custom_500:leading-[9vw] font-semibold text-white"
		>
			Interested in {shorthand}
		</p>
	</div>

	<div class="w-36 shrink-0 bg-drexel-light-green px-5 pt-5 pb-3">
		<!-- <QrCode value={website_url} color="#B7BF10" padding="2" /> -->
		<QRCodeImage text={website_url} />
		<p class="pt-3 text-center text-lg text-white">SCAN ME</p>
	</div>
</div>

<div class="relative custom_650:hidden">
	<img alt="Ambition Can't Wait" class="absolute bottom-0 left-[5%] h-24" src={FooterLogo} />
	<div class="flex h-20 items-center justify-end bg-drexel-dark-blue px-[5%]">
		<p class="text-right text-xs text-white">
			Drexel University, 3141 Chestnut Street,<br />Philadelphia, PA 19104, 215.895.2000 <br /> &copy;
			All Rights Reserved
		</p>
	</div>
</div>

<!-- Desktop footer starts here -->
<div
	class="relative hidden custom_650:flex gap-4 bg-drexel-dark-blue px-8 py-5 text-white text-xs items-center"
>
	<img alt="Drexel Logo" class="w-[12%] h-full" src={LogoWhite} />
	<p>
		<span class="font-semibold">Drexel University</span><br />3141 Chestnut Street,<br
		/>Philadelphia, PA 19104
	</p>
	<p>Tel: 215.895.2000</p>
	<p>&copy All Rights Reserved</p>
	<div
		class="bg-white rounded-lg overflow-hidden py-1 border-drexel-dark-blue border-2 absolute right-8 bottom-5"
	>
		<div class="flex p-1 justify-center">
			<!-- <QrCode value={website_url} color="#102A4C" padding="0" size="100" /> -->
			<QRCodeImage text={website_url} displayWidth="100" />
		</div>
		<p class="text-center text-sm text-drexel-dark-blue">Explore {shorthand}</p>
	</div>
</div>

<!-- <div class="hidden custom_600:block w-36 shrink-0 bg-white">
	<img alt="QR Code" src={`${PUBLIC_STRAPI_SERVER_URL}${qr_code.data.attributes.url}`} />
</div> -->
