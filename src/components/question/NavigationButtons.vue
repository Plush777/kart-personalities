<template>
	<div
		class="navigation-buttons mt-8 flex justify-between items-center max-md:flex-col max-md:gap-y-2"
	>
		<Button styleType="fill-gray1-md" :bindClass="questionNavigationButtonStyle" @click="goBack">
			{{ backButtonText }}
		</Button>

		<Button
			:styleType="nextButtonStyleType"
			:bindClass="questionNavigationButtonStyle"
			:disabled="!canGoNext"
			@click="goNext"
		>
			{{ nextButtonText }}
		</Button>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import Button from '@/components/button/Button.vue';

const props = defineProps({
	canGoBack: {
		type: Boolean,
		default: false
	},
	canGoNext: {
		type: Boolean,
		default: false
	},
	isLastQuestion: {
		type: Boolean,
		default: false
	},
	isFirstQuestion: {
		type: Boolean,
		default: false
	}
});

const questionNavigationButtonStyle = 'min-w-[80px] max-md:h-9';

const emit = defineEmits(['prev', 'next', 'goHome']);

const backButtonText = computed(() => {
	return props.isFirstQuestion ? '처음으로' : '이전';
});

const nextButtonText = computed(() => {
	return props.isLastQuestion ? '결과보기' : '다음';
});

const nextButtonStyleType = computed(() => {
	return props.isLastQuestion ? 'fill-green1-md' : 'fill-blue1-md';
});

function goBack() {
	if (props.isFirstQuestion) {
		emit('goHome');
	} else if (props.canGoBack) {
		emit('prev');
	}
}

function goNext() {
	// console.log('NavigationButtons - goNext 함수 호출됨');
	// console.log('canGoNext:', props.canGoNext);
	// console.log('isLastQuestion:', props.isLastQuestion);

	if (props.canGoNext) {
		// console.log('next 이벤트 발생');
		emit('next');
	} else {
		// console.log('canGoNext가 false라서 이벤트 발생 안함');
	}
}
</script>
