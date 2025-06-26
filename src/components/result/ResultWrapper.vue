<template>
	<Loading v-if="loading" />

	<MyResult
		v-else-if="characterInfo"
		:characterInfo="characterInfo"
		:restartTest="restartTest"
		:goToQuestion="goToQuestion"
		:imageError="imageError"
		:handleImageError="handleImageError"
	/>

	<AnswerNotFound v-else-if="!loading && !characterInfo" :restart="restartTest" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { questions, getCharacterInfo } from '@/data/questions.js';
import AnswerNotFound from '@/components/question/AnswerNotFound.vue';
import MyResult from '@/components/result/MyResult.vue';
import Loading from '@/components/loading/Loading.vue';

// 반응형 상태
const loading = ref(true);
const characterInfo = ref(null);
const imageError = ref(false);

// 메서드들
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

function loadResult() {
	try {
		let answers = null;

		// URL 파라미터에서 답변 데이터 확인
		const urlParams = new URLSearchParams(window.location.search);
		const answersParam = urlParams.get('answers');

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
		}
	} catch (error) {
		console.error('답변 데이터를 불러오는 중 오류가 발생했습니다:', error);
	} finally {
		loading.value = false;
	}
}

function handleImageError(event) {
	// 이미지 로드 실패 시 에러 상태로 변경
	imageError.value = true;
	// 이미지 요소를 숨김
	event.target.style.display = 'none';
}

function restartTest() {
	localStorage.removeItem('quizAnswers');
	window.location.href = '/';
}

function goToQuestion() {
	window.location.href = '/question';
}

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
	loadResult();
});
</script>
