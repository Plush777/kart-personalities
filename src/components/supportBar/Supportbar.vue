<template>
	<section
		class="flex items-center justify-center bg-gradient-to-r from-[#F0F9FF] to-[#0099FF] w-full p-2 flex-wrap gap-x-[24px] gap-y-2 max-[500px]:leading-[16px]"
	>
		<p class="text-xs text-center break-keep font-semibold text-gray-600">
			해당 사이트는 다음과 같은 브라우저에 최적화 되어 있습니다.
		</p>

		<div class="flex items-center gap-x-1">
			<div
				v-for="browser in browserList"
				:key="browser.alt"
				class="flex items-center justify-center p-1 bg-white rounded-lg"
			>
				<img :src="browser.img" :alt="browser.alt" class="size-5" />
			</div>
		</div>
	</section>
</template>

<script setup>
const browserList = [
	{
		img: '/images/browser/img-chrome.svg',
		alt: 'Chrome'
	},
	{
		img: '/images/browser/img-edge.svg',
		alt: 'Edge'
	},
	{
		img: '/images/browser/img-firefox.svg',
		alt: 'Firefox'
	},
	{
		img: '/images/browser/img-whale.svg',
		alt: 'Whale'
	}
];
</script>
