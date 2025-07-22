<template>
	<ResultSection
		v-if="characterInfo"
		:characterInfo="characterInfo"
		:restartTest="restartTest"
		:goToQuestion="goToQuestion"
		:copyToClipboard="copyToClipboard"
		:ssrUserName="ssrUserName"
	/>

	<AnswerNotFound v-else :restart="restartTest" />
</template>

<script setup>
import AnswerNotFound from '@/components/question/AnswerNotFound.vue';
import ResultSection from '@/components/result/ResultSection.vue';
import { getUserName } from '@/util/sessionStorage.js';
import { shortenUrl, getUsernameFromUrl, encodeResultForUrl } from '@/util/urlShortener.js';
import { computed } from 'vue';

const props = defineProps({
	characterInfo: {
		type: Object
	},
	ssrUserName: {
		type: String
	}
});

console.log('characterInfo:', props.characterInfo);

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

		// shareUsername을 함수 시작 부분에서 정의
		const shareUsername = urlUsername || currentUsername || 'user';
		let shareUrl;

		if (currentCharacterInfo) {
			// 결과 데이터를 쿼리 파라미터에 포함
			const encodedResult = encodeResultForUrl(currentCharacterInfo);

			shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}&result=${encodedResult}`;
		} else {
			// 결과가 없으면 기존 방식 사용
			if (shareUsername && shareUsername !== 'user') {
				shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}`;
			} else {
				shareUrl = window.location.href;
			}
		}

		// URL 단축
		const shortUrl = await shortenUrl(shareUrl, shareUsername);

		// 단축된 URL을 클립보드에 복사
		await navigator.clipboard.writeText(shortUrl);
		alert('URL이 클립보드에 복사되었습니다! 다른 곳에 공유해보세요.');
	} catch (err) {
		console.error('클립보드 복사 실패:', err);
		alert('URL 복사에 실패했습니다.');
	}
}
</script>
