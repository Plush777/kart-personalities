<template>
	<div class="flex items-center mb-4 gap-x-4">
		<div class="w-full bg-gray-200 rounded-full h-2">
			<div
				class="shadow-sm bg-gradient-to-r from-[#F0F9FF] to-[#0099FF] h-2 rounded-full transition-all duration-300"
				:style="{ width: progressPercentage + '%' }"
			></div>
		</div>
		<div class="flex gap-x-1 font-medium text-sm text-gray-600">
			<span>{{ currentQuestion }}</span> / <span>{{ totalQuestions }}</span>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	currentQuestion: {
		type: Number,
		required: true
	},
	totalQuestions: {
		type: Number,
		required: true
	}
});

const progressPercentage = computed(() => {
	return (props.currentQuestion / props.totalQuestions) * 100;
});
</script>
