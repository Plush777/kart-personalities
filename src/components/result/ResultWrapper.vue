<template>
	<ResultSection
		v-if="characterInfo"
		:characterInfo="characterInfo"
		:restartTest="restartTest"
		:goToQuestion="goToQuestion"
		:imageError="imageError"
		:handleImageError="handleImageError"
		:copyToClipboard="copyToClipboard"
	/>

	<AnswerNotFound v-else :restart="restartTest" />
</template>

<script setup>
import { ref } from 'vue';
import AnswerNotFound from '@/components/question/AnswerNotFound.vue';
import ResultSection from '@/components/result/ResultSection.vue';
import { getUserName, getUsernameFromUrl } from '@/util/sessionStorage.js';

const props = defineProps({
	characterInfo: {
		type: Object,
		default: null
	}
});

const imageError = ref(false);

function handleImageError(event) {
	// 이미지 로드 실패 시 에러 상태로 변경
	imageError.value = true;
	// 이미지 요소를 숨김
	event.target.style.display = 'none';
}

function restartTest() {
	window.location.href = '/';
}

function goToQuestion() {
	window.location.href = '/question';
}

async function copyToClipboard() {
	try {
		// URL에서 username 파라미터 확인
		const urlUsername = getUsernameFromUrl();
		const currentUsername = getUserName();

		// 공유할 username 결정 (URL 파라미터가 있으면 그것을, 없으면 현재 사용자명 사용)
		const shareUsername = urlUsername || currentUsername;

		let shareUrl;
		if (shareUsername) {
			shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}`;
		} else {
			shareUrl = window.location.href;
		}

		await navigator.clipboard.writeText(shareUrl);
		alert('URL이 클립보드에 복사되었습니다!');
	} catch (err) {
		console.error('클립보드 복사 실패:', err);
		alert('URL 복사에 실패했습니다.');
	}
}
</script>
