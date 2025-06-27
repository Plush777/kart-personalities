<template>
	<div
		class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-4 w-full"
	>
		<div class="flex justify-center items-center">
			<img
				src="/images/face/img-dao-face.webp"
				alt=""
				class="loading-image dao-image size-[130px] max-[500px]:size-[25%]"
			/>
			<img
				src="/images/face/img-diz-face.webp"
				alt=""
				class="loading-image diz-image size-[120px] max-[500px]:size-[25%]"
			/>
			<img
				src="/images/face/img-bazzi-face.webp"
				alt=""
				class="loading-image bazzi-image size-[130px] max-[500px]:size-[25%]"
			/>
		</div>

		<p class="text-xl font-bold text-gray-600 max-[500px]:text-lg max-[375px]:text-base">
			{{ props.userName }}님의 결과를 분석하고 있어요.
		</p>
	</div>
</template>

<script setup>
const props = defineProps({
	userName: {
		type: String,
		required: true
	}
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
