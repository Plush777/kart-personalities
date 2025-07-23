<template>
	<div class="flex flex-col items-center justify-center gap-y-2 w-[200px] h-[200px]">
		<span class="loader" aria-hidden="true"></span>
		<span class="text-black text-base">로딩 중...</span>
	</div>
</template>

<script setup></script>

<style scoped>
.loader {
	width: 24px;
	height: 24px;
	border: 2px solid #000;
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
