<template>
	<main
		class="relative z-0 flex flex-col items-center"
		:class="[
			isMobilePadding ? 'max-md:p-6' : '',
			hscreen ? 'h-screen' : '',
			align === 'center' ? 'justify-center' : ''
		]"
	>
		<div class="flex flex-col w-full items-center z-20" :class="isBackground ? 'bg-sky-50' : ''">
			<ResultContent v-if="isResultPage" :loading="loading" :characterInfo="characterInfo" />
			<slot v-else />
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted, provide, computed } from 'vue';
import { questions, getCharacterInfo } from '@/data/questions.js';
import ResultContent from '@/components/result/ResultContent.vue';
import {
	getQuizAnswers,
	getUserResult,
	saveUserResult,
	getUsernameFromUrl,
	getUserName,
	clearQuizData,
	getQuizCompleted,
	clearQuizCompleted,
	getResultFromUrl,
	encodeResultForUrl
} from '@/util/sessionStorage.js';

const props = defineProps({
	align: {
		type: String,
		default: 'center'
	},
	hscreen: {
		type: Boolean,
		default: true
	},
	isMobilePadding: {
		type: Boolean,
		default: true
	},
	isBackground: {
		type: Boolean,
		default: false
	}
});

const loading = ref(true);
const characterInfo = ref(null);

// result 페이지 여부 확인 (하이드레이션 오류 방지)
const isResultPage = ref(false);

// 컴포넌트 마운트 시 데이터 로드 (result 페이지에서만)
onMounted(() => {
	isResultPage.value = window.location.pathname === '/result';

	// result 페이지에서만 데이터 로드
	if (isResultPage.value) {
		loadResultData();
	} else {
		// 메인 페이지에서는 세션 스토리지 초기화
		if (window.location.pathname === '/') {
			clearQuizData();
		}
		// 다른 페이지에서는 로딩을 즉시 완료
		loading.value = false;
	}
});

// 캐릭터 타입 계산 함수
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

// 데이터 로딩 함수
function loadResultData() {
	try {
		// 1. URL에서 결과 데이터 확인 (가장 우선순위)
		const urlResult = getResultFromUrl();
		console.log('MainLayout - URL에서 읽은 결과:', urlResult ? '있음' : '없음');

		if (urlResult) {
			// URL에서 결과를 바로 읽어온 경우 로딩 상태 건너뛰기
			characterInfo.value = urlResult;
			console.log('MainLayout - 결과 설정됨:', characterInfo.value.title);
			loading.value = false; // 즉시 로딩 완료
			return;
		}

		// 2. URL에서 username 파라미터 확인
		const urlUsername = getUsernameFromUrl();

		if (urlUsername) {
			// URL에 username이 있으면 로컬 sessionStorage에서 시도
			const userResult = getUserResult(urlUsername);
			if (userResult && userResult.characterInfo) {
				characterInfo.value = userResult.characterInfo;
			} else {
				console.log('해당 사용자의 결과를 찾을 수 없습니다.');
			}
		} else {
			// URL에 username이 없으면 현재 사용자의 답변으로 결과 계산
			const answers = getQuizAnswers();
			const currentUsername = getUserName();
			const isQuizCompleted = getQuizCompleted();

			if (answers && answers.length > 0) {
				// 답변 데이터가 있으면 결과 계산
				const characterType = calculateCharacterType(answers);
				characterInfo.value = getCharacterInfo(characterType);

				// 현재 사용자의 결과를 저장 (username이 있는 경우에만)
				if (currentUsername) {
					saveUserResult(currentUsername, characterInfo.value);
				}

				// 결과가 계산되면 URL 업데이트 (공유 가능하도록)
				updateResultUrl(currentUsername, characterInfo.value);
			} else if (isQuizCompleted && currentUsername) {
				// 답변 데이터는 없지만 테스트가 완료되었고 사용자명이 있으면 저장된 결과 사용
				const userResult = getUserResult(currentUsername);
				if (userResult && userResult.characterInfo) {
					characterInfo.value = userResult.characterInfo;
					// 저장된 결과로 URL 업데이트
					updateResultUrl(currentUsername, characterInfo.value);
				} else {
					console.log('저장된 결과를 찾을 수 없습니다.');
				}
			} else {
				console.log('답변 데이터가 없습니다.');
			}
		}
	} catch (error) {
		console.error('답변 데이터를 불러오는 중 오류가 발생했습니다:', error);
	}

	// 2.5초 후 로딩 완료
	setTimeout(() => {
		loading.value = false;
	}, 2500);
}

// 결과 URL 업데이트 함수
function updateResultUrl(username, characterInfo) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		const encodedResult = encodeResultForUrl(characterInfo);
		const newUrl = `${window.location.origin}/result?username=${encodeURIComponent(username)}#${encodedResult}`;

		// 브라우저 히스토리에 추가 (뒤로가기 가능하도록)
		window.history.pushState({}, '', newUrl);
		console.log('결과 URL 업데이트됨:', newUrl);

		// URL 업데이트 후 결과를 다시 설정 (공유 가능하도록)
		characterInfo.value = characterInfo;
	} catch (error) {
		console.error('URL 업데이트 중 오류 발생:', error);
	}
}

// 자식 컴포넌트에 전달할 데이터
defineExpose({
	loading,
	characterInfo
});

// provide를 통해 자식 컴포넌트들이 데이터에 접근할 수 있도록 함
const mainLayoutData = {
	loading,
	characterInfo
};

provide('mainLayoutRef', mainLayoutData);
</script>
