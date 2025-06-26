<template>
	<!-- 진행률 표시 -->
	<ProgressBar :current-question="currentQuestionIndex + 1" :total-questions="questions.length" />

	<!-- 질문 -->
	<QuestionText :question="currentQuestion.question" />

	<!-- 선택지 -->
	<OptionsList
		:options="currentQuestion.options"
		:selected-option="selectedOption"
		@select="selectOption"
	/>

	<NavigationButtons
		:can-go-back="currentQuestionIndex > 0"
		:can-go-next="selectedOption !== null"
		:is-last-question="isLastQuestion"
		@prev="prevQuestion"
		@next="nextQuestion"
	/>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ProgressBar from '@/components/progressBar/ProgressBar.vue';
import QuestionText from '@/components/question/QuestionText.vue';
import OptionsList from '@/components/question/OptionsList.vue';
import NavigationButtons from '@/components/question/NavigationButtons.vue';

const props = defineProps({
	questions: {
		type: Array,
		required: true
	},
	initialAnswers: {
		type: Array,
		default: () => []
	}
});

const emit = defineEmits(['update:answers', 'complete']);

// 반응형 상태
const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const answers = ref([...props.initialAnswers]);

// 계산된 속성들
const currentQuestion = computed(() => props.questions[currentQuestionIndex.value]);
const isLastQuestion = computed(() => currentQuestionIndex.value === props.questions.length - 1);

// 메서드들
function selectOption(optionIndex) {
	selectedOption.value = optionIndex;
	answers.value[currentQuestionIndex.value] = optionIndex;
	emit('update:answers', answers.value);
}

function nextQuestion() {
	// console.log('nextQuestion 함수 호출됨');
	// console.log('selectedOption:', selectedOption.value);
	// console.log('isLastQuestion:', isLastQuestion.value);

	if (selectedOption.value === null) {
		// console.log('답변을 선택해주세요.');
		return;
	}

	// 선택된 답변 저장
	answers.value[currentQuestionIndex.value] = selectedOption.value;
	console.log(`질문 ${currentQuestionIndex.value + 1}: 선택 ${selectedOption.value + 1}`);

	if (isLastQuestion.value) {
		// 마지막 질문이면 완료 처리
		// console.log('마지막 질문 - complete 이벤트 발생');
		// console.log('전송할 답변:', answers.value);

		// 이벤트 발생
		emit('complete', answers.value);

		// 직접 처리도 추가
		handleQuizComplete(answers.value);
	} else {
		// 다음 질문으로 이동
		// console.log('다음 질문으로 이동');
		currentQuestionIndex.value++;
		selectedOption.value = answers.value[currentQuestionIndex.value] ?? null;
	}
}

function prevQuestion() {
	if (currentQuestionIndex.value > 0) {
		currentQuestionIndex.value--;
		selectedOption.value = answers.value[currentQuestionIndex.value] ?? null;
	}
}

// 초기화: 이전 답변이 있으면 선택 상태로 표시
watch(
	() => props.initialAnswers,
	(newAnswers) => {
		if (newAnswers.length > 0) {
			answers.value = [...newAnswers];
			selectedOption.value = answers.value[currentQuestionIndex.value] ?? null;
		}
	},
	{ immediate: true }
);

// 완료 처리 함수
function handleQuizComplete(answers) {
	// console.log('Vue 컴포넌트에서 직접 완료 처리');
	// console.log('받은 답변:', answers);

	// 답변을 localStorage에 저장 (백업용)
	localStorage.setItem('quizAnswers', JSON.stringify(answers));

	// URL 파라미터로 답변 데이터 전달
	const answersParam = encodeURIComponent(JSON.stringify(answers));

	// 잠시 후 결과 페이지로 이동
	setTimeout(() => {
		// console.log('결과 페이지로 이동 중...');
		window.location.href = `/result?answers=${answersParam}`;
	}, 500);
}
</script>
