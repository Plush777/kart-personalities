<template>
	<div
		class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-4 w-full"
	>
		<div class="flex justify-center items-center">
			<img
				src="/images/face/img-dao-face.webp"
				alt=""
				class="loading-image dao-image size-[130px] max-md:size-[25%]"
			/>
			<img
				src="/images/face/img-diz-face.webp"
				alt=""
				class="loading-image diz-image size-[120px] max-md:size-[25%]"
			/>
			<img
				src="/images/face/img-bazzi-face.webp"
				alt=""
				class="loading-image bazzi-image size-[130px] max-md:size-[25%]"
			/>
		</div>

		<p class="text-xl font-bold text-gray-600 max-md:text-lg max-[375px]:text-base">
			{{ userName }}님의 결과를 분석하고 있어요.
		</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserName, getUsernameFromUrl } from '@/util/sessionStorage.js';

const userName = ref('');

onMounted(() => {
	// URL에서 username 파라미터 확인
	const urlUsername = getUsernameFromUrl();
	const currentUsername = getUserName();

	// URL 파라미터의 username을 우선적으로 사용
	userName.value = urlUsername || currentUsername || 'undefined';
});
</script>

<style scoped>
.loading-image {
	transition: transform 0.3s ease-in-out;
	transform: scale(0.9);
}

.dao-image {
	animation: pulse 1.5s ease-in-out infinite;
}

.diz-image {
	animation: pulse 1.5s ease-in-out infinite 0.5s;
}

.bazzi-image {
	animation: pulse 1.5s ease-in-out infinite 1s;
}

@keyframes pulse {
	0%,
	100% {
		transform: scale(0.9);
	}
	50% {
		transform: scale(1);
	}
}
</style>
