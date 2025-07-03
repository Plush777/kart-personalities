<template>
	<div class="font-bold mt-8 h-6 text-center text-base text-gray-800 max-md:text-sm max-md:h-5">
		<span class="flex items-center"
			>총 <em class="min-w-[10px] block ml-[5px]" id="view-count">{{ animatedCount }}</em
			>명이 참여했어요</span
		>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const animatedCount = ref(0);
const targetCount = ref(0);

function animateCount() {
	const duration = 500;
	const steps = 60; // 60프레임으로 나누기
	const increment = targetCount.value / steps;
	const stepDuration = duration / steps;

	let currentStep = 0;

	const timer = setInterval(() => {
		currentStep++;
		animatedCount.value = Math.min(Math.floor(increment * currentStep), targetCount.value);

		if (currentStep >= steps) {
			animatedCount.value = targetCount.value;
			clearInterval(timer);
		}
	}, stepDuration);
}

/* 
	로컬에서 테스트한 수치가 프로덕션에 그대로 반영되면 안되기 때문에 환경에 따라 다른 slug 사용

	localhost 또는 127.0.0.1은 개발 환경이므로 _home_dev 사용
	그 외는 _home (실제 배포 URL) 사용
*/

onMounted(() => {
	// views 데이터 호출
	async function fetchViewCount() {
		try {
			let slug = window.location.pathname;
			if (slug === '/') {
				const isDev =
					window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
				slug = isDev ? '_home_dev' : '_home';
			}
			slug = encodeURIComponent(slug);

			const response = await fetch(`/api/views/${slug}`);
			const data = await response.json();

			targetCount.value = data.count;
			animateCount();
		} catch (err) {
			console.error('조회수 불러오기 실패:', err);
		}
	}

	fetchViewCount();
});
</script>
