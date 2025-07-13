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
import { getUserName } from '@/util/sessionStorage.js';
import { shortenUrl, getUsernameFromUrl, encodeResultForUrl } from '@/util/urlShortener.js';

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
		const currentCharacterInfo = props.characterInfo;

		let shareUrl;

		if (currentCharacterInfo) {
			// 결과 데이터를 해시 프래그먼트에 포함
			const encodedResult = encodeResultForUrl(currentCharacterInfo);
			const shareUsername = urlUsername || currentUsername || 'user';

			shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}#${encodedResult}`;
		} else {
			// 결과가 없으면 기존 방식 사용
			const shareUsername = urlUsername || currentUsername;
			if (shareUsername) {
				shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}`;
			} else {
				shareUrl = window.location.href;
			}
		}

		// URL 단축
		const shortUrl = await shortenUrl(shareUrl);

		// 단축된 URL을 클립보드에 복사
		await navigator.clipboard.writeText(shortUrl);
		alert('URL이 클립보드에 복사되었습니다! 다른 곳에 공유해보세요.');
	} catch (err) {
		console.error('클립보드 복사 실패:', err);
		alert('URL 복사에 실패했습니다.');
	}
}
</script>
