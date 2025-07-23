<template>
	<SectionWrapper type="question">
		<ProgressBar :current-question="currentQuestionIndex + 1" :total-questions="questions.length" />

		<transition name="fade" mode="out-in">
			<div v-if="isDataLoaded" v-cloak :key="currentQuestionIndex" class="w-full">
				<QuestionText :question="currentQuestion.question" />

				<div class="">
					<img
						:src="`/images/question/img-question-${currentQuestionIndex + 1}.jpg`"
						:alt="`${currentQuestionIndex + 1}번째 질문: ${currentQuestion.question} 이미지`"
						class="rounded-lg mx-auto mt-2 mb-4 aspect-[16/10] w-full max-w-none block bg-gray-200"
					/>
				</div>

				<OptionsList
					:options="currentQuestion.options"
					:selected-option="selectedOption"
					@select="selectOption"
				/>
			</div>
		</transition>

		<NavigationButtons
			:can-go-back="currentQuestionIndex > 0"
			:can-go-next="selectedOption !== null"
			:is-last-question="isLastQuestion"
			:is-first-question="currentQuestionIndex === 0"
			@prev="prevQuestion"
			@next="nextQuestion"
			@go-home="goHome"
		/>
	</SectionWrapper>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import ProgressBar from '@/components/progressBar/ProgressBar.vue';
import QuestionText from '@/components/question/QuestionText.vue';
import OptionsList from '@/components/question/OptionsList.vue';
import NavigationButtons from '@/components/question/NavigationButtons.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';
import {
	getQuizAnswers,
	setQuizAnswers,
	getCurrentQuestionIndex,
	setCurrentQuestionIndex,
	clearQuizData,
	setQuizCompleted
} from '@/util/sessionStorage.js';

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

// 반응형 상태 - 초기값 설정
const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const answers = ref([]);
const isDataLoaded = ref(false);

// 계산된 속성들
const currentQuestion = computed(() => props.questions[currentQuestionIndex.value]);
const isLastQuestion = computed(() => currentQuestionIndex.value === props.questions.length - 1);

// 세션 스토리지에서 데이터 로드 함수
const loadSessionData = () => {
	if (typeof window === 'undefined') return;

	const savedAnswers = getQuizAnswers();
	const savedIndex = getCurrentQuestionIndex();

	// 세션 스토리지에 데이터가 있고 유효한지 확인
	if (savedAnswers.length > 0 && savedAnswers.length === props.questions.length) {
		// 저장된 인덱스가 유효한 범위인지 확인
		if (savedIndex >= 0 && savedIndex < props.questions.length) {
			// 유효한 데이터가 있으면 복원
			answers.value = savedAnswers;
			currentQuestionIndex.value = savedIndex;
			selectedOption.value = savedAnswers[savedIndex] ?? null;
		} else {
			// 저장된 인덱스가 유효하지 않으면 초기화
			clearQuizData();
			answers.value = new Array(props.questions.length).fill(null);
			currentQuestionIndex.value = 0;
			selectedOption.value = null;
		}
	} else if (props.initialAnswers.length > 0) {
		// props에 초기 데이터가 있으면 사용
		answers.value = [...props.initialAnswers];
		setQuizAnswers(answers.value);
	} else {
		// 초기 데이터도 없으면 빈 배열로 초기화
		answers.value = new Array(props.questions.length).fill(null);
		currentQuestionIndex.value = 0;
		selectedOption.value = null;
	}

	// 데이터 로드 완료 표시
	isDataLoaded.value = true;
};

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
	loadSessionData();

	// 세션 스토리지에 초기 데이터가 없고 props에 initialAnswers가 있으면 저장
	if (getQuizAnswers().length === 0 && props.initialAnswers.length > 0) {
		setQuizAnswers(props.initialAnswers);
	}

	// 현재 인덱스가 저장되지 않았으면 저장
	if (getCurrentQuestionIndex() === 0 && currentQuestionIndex.value > 0) {
		setCurrentQuestionIndex(currentQuestionIndex.value);
	}
});

function selectOption(optionIndex) {
	selectedOption.value = optionIndex;
	answers.value[currentQuestionIndex.value] = optionIndex;
	setQuizAnswers(answers.value);
	emit('update:answers', answers.value);
}

function nextQuestion() {
	if (selectedOption.value === null) {
		return;
	}

	// 선택된 답변 저장
	answers.value[currentQuestionIndex.value] = selectedOption.value;
	setQuizAnswers(answers.value);
	console.log(`질문 ${currentQuestionIndex.value + 1}: 선택 ${selectedOption.value + 1}`);

	if (isLastQuestion.value) {
		// 마지막 질문이면 완료 처리
		emit('complete', answers.value);
		handleQuizComplete(answers.value);
	} else {
		// 다음 질문으로 이동
		currentQuestionIndex.value++;
		setCurrentQuestionIndex(currentQuestionIndex.value);
		selectedOption.value = answers.value[currentQuestionIndex.value] ?? null;
	}
}

function prevQuestion() {
	if (currentQuestionIndex.value > 0) {
		currentQuestionIndex.value--;
		setCurrentQuestionIndex(currentQuestionIndex.value);
		selectedOption.value = answers.value[currentQuestionIndex.value] ?? null;
	}
}

function goHome() {
	const homeUrl = '/';
	window.location.href = homeUrl;
}

// props 변경 감지하여 데이터 로드
watch(
	() => props.initialAnswers,
	(newAnswers) => {
		if (newAnswers.length > 0 && answers.value.length === 0) {
			loadSessionData();
		}
	},
	{ immediate: true }
);

// 완료 처리 함수
function handleQuizComplete(answers) {
	// 테스트 완료 상태 저장
	setQuizCompleted(true);

	// 결과 페이지로 이동 (URL 파라미터 없이)
	const resultUrl = '/result';
	window.location.href = resultUrl;
}
</script>

<style scoped>
/* Fade 애니메이션 */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from {
	opacity: 0;
}

.fade-leave-to {
	opacity: 0;
}

/* v-cloak 디렉티브를 위한 스타일 */
[v-cloak] {
	display: none;
}
</style>
