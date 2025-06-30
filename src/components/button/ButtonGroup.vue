<template>
	<div :class="`flex flex-col justify-center gap-2 items-center ${props.className}`">
		<Button
			styleType="fill-blue-sm"
			@click="props.restartTest"
			v-if="props.type === 'all' || props.type === 'restart'"
		>
			<ResetIcon />
			<span>다시 테스트하기</span>
		</Button>
		<Button
			styleType="fill-gray-sm"
			@click="props.goToQuestion"
			v-if="props.type === 'all' || props.type === 'back'"
		>
			<BackIcon />
			<span>질문으로 돌아가기</span>
		</Button>
		<Button
			styleType="fill-gray2-sm"
			@click="copyToClipboard"
			v-if="props.type === 'all' || props.type === 'share'"
		>
			<ShareIcon />
			<span>공유하기</span>
		</Button>
	</div>
</template>

<script setup>
import Button from '@/components/button/Button.vue';
import ResetIcon from '@/components/icons/Reset.vue';
import BackIcon from '@/components/icons/Back.vue';
import ShareIcon from '@/components/icons/Share.vue';

const props = defineProps({
	className: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'all'
	},
	restartTest: {
		type: Function,
		required: true
	},
	goToQuestion: {
		type: Function,
		required: true
	}
});

const copyToClipboard = async () => {
	try {
		await navigator.clipboard.writeText(window.location.href);
		alert('URL이 클립보드에 복사되었습니다!');
	} catch (err) {
		console.error('클립보드 복사 실패:', err);
		alert('URL 복사에 실패했습니다.');
	}
};
</script>

<style scoped>
button {
	width: 100%;
}
</style>
