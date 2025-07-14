<template>
	<main
		class="relative z-0 flex flex-col items-center h-full"
		:class="[align === 'center' ? 'justify-center' : '', getStyle()]"
	>
		<div class="flex flex-col size-full items-center justify-center z-20">
			<slot :loading="loading" :characterInfo="characterInfo" />
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted, computed, watch, provide, nextTick } from 'vue';
import { clearQuizData } from '@/util/sessionStorage.js';

const props = defineProps({
	type: {
		type: String,
		default: 'default'
	},
	align: {
		type: String,
		default: 'center'
	},
	isMobilePadding: {
		type: Boolean,
		default: true
	}
});

const loading = ref(true);
const characterInfo = ref(null);

// 컴포넌트 마운트 시 데이터 로드
onMounted(async () => {
	console.log('=== MainLayout onMounted 시작 ===');
	console.log('MainLayout - 현재 경로:', window.location.pathname);

	// nextTick을 사용해서 DOM 업데이트 후 실행
	await nextTick();

	// 메인 페이지에서는 세션 스토리지 초기화
	if (window.location.pathname === '/') {
		console.log('MainLayout - 메인 페이지, 세션 스토리지 초기화');
		clearQuizData();
		loading.value = false;
	} else {
		// 다른 페이지에서는 로딩을 즉시 완료 (ResultContent에서 직접 처리)
		console.log('MainLayout - 다른 페이지, 로딩 즉시 완료');
		loading.value = false;
	}

	console.log('=== MainLayout onMounted 종료 ===');
});

// 자식 컴포넌트에 전달할 데이터
defineExpose({
	loading,
	characterInfo
});

// provide를 통해 자식 컴포넌트들이 데이터에 접근할 수 있도록 함
provide('mainLayoutLoading', loading);
provide('mainLayoutCharacterInfo', characterInfo);

// 디버깅을 위한 watch 추가
watch(characterInfo, (newValue) => {
	console.log('MainLayout - characterInfo 변경됨:', newValue);
});

function getStyle() {
	if (props.type === 'default') return 'bg-white max-w-[500px] mx-auto shadow-lg';
	if (props.type === 'main') return '';

	return '';
}
</script>
