<template>
	<div class="text-center py-12">
		<h3 class="text-xl font-semibold mb-4 text-gray-700">답변 데이터를 찾을 수 없습니다</h3>
		<p class="text-gray-600 mb-6">먼저 성격 테스트를 완료해주세요.</p>
		<Button @click="props.restart">테스트 시작하기</Button>
	</div>
</template>

<script setup>
import Button from '@/components/button/Button.vue';

const props = defineProps({
	restart: {
		type: Function,
		required: true
	}
});
</script>
