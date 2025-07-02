<template>
	<main
		class="relative flex flex-col items-center"
		:class="[
			isMobilePadding ? 'max-md:p-6' : '',
			hscreen ? 'h-screen' : '',
			align === 'center' ? 'justify-center' : ''
		]"
	>
		<div class="flex flex-col w-full items-center z-20" :class="isBackground ? 'bg-sky-50' : ''">
			<ResultContent v-if="isResultPage" :loading="loading" :characterInfo="characterInfo" />
			<slot v-else />
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted, provide, computed } from 'vue';
import { questions, getCharacterInfo } from '@/data/questions.js';
import ResultContent from '@/components/result/ResultContent.vue';

const props = defineProps({
	align: {
		type: String,
		default: 'center'
	},
	hscreen: {
		type: Boolean,
		default: true
	},
	isMobilePadding: {
		type: Boolean,
		default: true
	},
	isBackground: {
		type: Boolean,
		default: false
	}
});

const loading = ref(true);
const characterInfo = ref(null);

// result 페이지 여부 확인 (하이드레이션 오류 방지)
const isResultPage = ref(false);

// 컴포넌트 마운트 시 데이터 로드 (result 페이지에서만)
onMounted(() => {
	isResultPage.value = window.location.pathname === '/result';

	// result 페이지에서만 데이터 로드
	if (isResultPage.value) {
		loadResultData();
	} else {
		// 다른 페이지에서는 로딩을 즉시 완료
		loading.value = false;
	}
});

// 캐릭터 타입 계산 함수
function calculateCharacterType(answers) {
	const typeCounts = {};

	answers.forEach((answerIndex, questionIndex) => {
		const question = questions[questionIndex];
		if (question && question.options[answerIndex]) {
			const selectedOption = question.options[answerIndex];

			selectedOption.types.forEach((type) => {
				typeCounts[type] = (typeCounts[type] || 0) + 1;
			});
		}
	});

	// 가장 많이 선택된 타입 찾기
	const maxCount = Math.max(...Object.values(typeCounts));
	const topTypes = Object.keys(typeCounts).filter((type) => typeCounts[type] === maxCount);
	return topTypes[0]; // 첫 번째 타입 선택
}

// 데이터 로딩 함수
function loadResultData() {
	try {
		let answers = null;

		// console.log('loadResultData 시작');
		// console.log('현재 URL:', window.location.href);

		// URL 파라미터에서 답변 데이터 확인
		const urlParams = new URLSearchParams(window.location.search);
		const answersParam = urlParams.get('answers');
		// console.log('URL 파라미터 answers:', answersParam);

		if (answersParam) {
			// URL 파라미터에서 데이터 로드
			answers = JSON.parse(decodeURIComponent(answersParam));
			// localStorage에도 저장 (백업용)
			localStorage.setItem('quizAnswers', JSON.stringify(answers));
		} else {
			// localStorage에서 답변 데이터 확인
			const storedAnswers = localStorage.getItem('quizAnswers');
			if (storedAnswers) {
				answers = JSON.parse(storedAnswers);
			}
		}

		if (answers && answers.length > 0) {
			const characterType = calculateCharacterType(answers);
			characterInfo.value = getCharacterInfo(characterType);
			// console.log('캐릭터 타입:', characterType);
			// console.log('캐릭터 정보:', characterInfo.value);
		} else {
			// console.log('답변 데이터가 없습니다. answers:', answers);
		}
	} catch (error) {
		console.error('답변 데이터를 불러오는 중 오류가 발생했습니다:', error);
	}

	// 2.5초 후 로딩 완료
	setTimeout(() => {
		loading.value = false;
		console.log('로딩 완료, 최종 characterInfo:', characterInfo.value);
	}, 2500);
}

// 자식 컴포넌트에 전달할 데이터
defineExpose({
	loading,
	characterInfo
});

// provide를 통해 자식 컴포넌트들이 데이터에 접근할 수 있도록 함
const mainLayoutData = {
	loading,
	characterInfo
};

// console.log('MainLayout provide 데이터:', mainLayoutData);
// console.log('loading.value:', loading.value);
// console.log('characterInfo.value:', characterInfo.value);
provide('mainLayoutRef', mainLayoutData);
</script>
