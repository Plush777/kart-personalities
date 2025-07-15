<template>
	<div v-if="loading">
		<Loading />
	</div>
	<div class="w-full" v-else>
		<ContentsInnerLayout type="result">
			<ResultWrapper :characterInfo="characterInfo" />
		</ContentsInnerLayout>
		<FootSection />
	</div>
</template>

<script setup>
import { onMounted, inject, computed, ref, watch } from 'vue';
import Loading from '@/components/loading/Loading.vue';
import ResultWrapper from '@/components/result/ResultWrapper.vue';
import ContentsInnerLayout from '@/layouts/ContentsInnerLayout.vue';
import FootSection from '@/components/section/FootSection.vue';
import { questions, getCharacterInfo } from '@/data/questions.js';

import {
	getQuizAnswers,
	getUserResult,
	saveUserResult,
	getUserName,
	getQuizCompleted
} from '@/util/sessionStorage.js';
import { getUsernameFromUrl, getResultFromUrl, encodeResultForUrl } from '@/util/urlShortener.js';

// MainLayout에서 제공하는 데이터를 inject로 받기
const mainLayoutLoading = inject('mainLayoutLoading', ref(false));
const mainLayoutCharacterInfo = inject('mainLayoutCharacterInfo', ref(null));

// computed로 반응형 데이터 만들기
const loading = computed(() => mainLayoutLoading?.value || false);
const characterInfo = computed(() => mainLayoutCharacterInfo?.value || null);

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
	console.log('=== ResultContent loadResultData 시작 ===');

	// 새로고침 여부 확인 (URL에 result 파라미터가 있으면 새로고침으로 간주)
	const urlParams = new URLSearchParams(window.location.search);
	const resultParam = urlParams.get('result');
	const isRefresh = !!resultParam;

	// 새로고침이 아닌 경우에만 로딩 상태를 true로 설정
	if (!isRefresh) {
		mainLayoutLoading.value = true;
	}

	try {
		// 1. URL에서 결과 데이터 확인 (가장 우선순위)
		const urlResult = getResultFromUrl();
		console.log('ResultContent - URL에서 읽은 결과:', urlResult ? '있음' : '없음');

		if (urlResult) {
			// URL에서 결과를 바로 읽어온 경우
			mainLayoutCharacterInfo.value = urlResult;
			console.log('ResultContent - URL 결과 설정됨:', mainLayoutCharacterInfo.value.title);

			// 새로고침이 아닌 경우에만 로딩 완료 처리
			if (!isRefresh) {
				mainLayoutLoading.value = false;
			}
			return;
		}

		// 2. URL에서 username 파라미터 확인
		const urlUsername = getUsernameFromUrl();
		console.log('ResultContent - URL username:', urlUsername);

		if (urlUsername) {
			// URL에 username이 있으면 로컬 sessionStorage에서 시도
			const userResult = getUserResult(urlUsername);
			console.log('ResultContent - 사용자 결과:', userResult);
			if (userResult && userResult.characterInfo) {
				mainLayoutCharacterInfo.value = userResult.characterInfo;
				console.log('ResultContent - 저장된 결과 설정됨:', mainLayoutCharacterInfo.value.title);
			} else {
				console.log('해당 사용자의 결과를 찾을 수 없습니다.');
			}
		} else {
			// URL에 username이 없으면 현재 사용자의 답변으로 결과 계산
			const answers = getQuizAnswers();
			const currentUsername = getUserName();
			const isQuizCompleted = getQuizCompleted();

			console.log('ResultContent - 답변 데이터:', answers);
			console.log('ResultContent - 현재 사용자명:', currentUsername);
			console.log('ResultContent - 퀴즈 완료 여부:', isQuizCompleted);

			if (answers && answers.length > 0) {
				// 답변 데이터가 있으면 결과 계산
				const characterType = calculateCharacterType(answers);
				console.log('ResultContent - 계산된 캐릭터 타입:', characterType);
				mainLayoutCharacterInfo.value = getCharacterInfo(characterType);
				console.log('ResultContent - 계산된 결과 설정됨:', mainLayoutCharacterInfo.value.title);

				// 현재 사용자의 결과를 저장 (username이 있는 경우에만)
				if (currentUsername) {
					saveUserResult(currentUsername, mainLayoutCharacterInfo.value);
					console.log('ResultContent - 결과 저장됨');
				}

				// 결과가 계산되면 URL 업데이트 (공유 가능하도록)
				updateResultUrl(currentUsername, mainLayoutCharacterInfo.value);
			} else if (isQuizCompleted && currentUsername) {
				// 답변 데이터는 없지만 테스트가 완료되었고 사용자명이 있으면 저장된 결과 사용
				const userResult = getUserResult(currentUsername);
				console.log('ResultContent - 완료된 퀴즈 결과:', userResult);
				if (userResult && userResult.characterInfo) {
					mainLayoutCharacterInfo.value = userResult.characterInfo;
					console.log(
						'ResultContent - 완료된 퀴즈 결과 설정됨:',
						mainLayoutCharacterInfo.value.title
					);

					// 저장된 결과로 URL 업데이트
					updateResultUrl(currentUsername, mainLayoutCharacterInfo.value);
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

	// 로딩 완료 처리
	if (isRefresh) {
		// 새로고침인 경우 로딩을 보여주지 않음
		mainLayoutLoading.value = false;
		console.log('ResultContent - 새로고침: 로딩 숨김');
	} else {
		// 새로고침이 아닌 경우 2.5초 후 로딩 완료
		setTimeout(() => {
			mainLayoutLoading.value = false;
			console.log(
				'ResultContent - 2.5초 후 로딩 완료, characterInfo:',
				mainLayoutCharacterInfo.value
			);
		}, 2500);
	}

	console.log('=== ResultContent loadResultData 종료 ===');
}

// 결과 URL 업데이트 함수
function updateResultUrl(username, characterInfo) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		const encodedResult = encodeResultForUrl(characterInfo);
		const newUrl = `${window.location.origin}/result?username=${encodeURIComponent(username)}&result=${encodedResult}`;

		// 브라우저 히스토리에 추가 (뒤로가기 가능하도록)
		window.history.pushState({}, '', newUrl);
		console.log('결과 URL 업데이트됨:', newUrl);

		// URL 업데이트 후 결과를 다시 설정 (공유 가능하도록)
		mainLayoutCharacterInfo.value = characterInfo;
	} catch (error) {
		console.error('URL 업데이트 중 오류 발생:', error);
	}
}

onMounted(() => {
	console.log('=== ResultContent 마운트됨 ===');
	console.log('ResultContent - mainLayoutLoading:', mainLayoutLoading);
	console.log('ResultContent - mainLayoutCharacterInfo:', mainLayoutCharacterInfo);
	console.log('ResultContent - loading:', loading.value);
	console.log('ResultContent - characterInfo:', characterInfo.value);

	// ResultContent에서 직접 데이터 로드
	loadResultData();
});

// MainLayout의 데이터 변경 감지
watch(mainLayoutLoading, (newValue) => {
	console.log('ResultContent - loading 변경됨:', newValue);
});

watch(mainLayoutCharacterInfo, (newValue) => {
	console.log('ResultContent - characterInfo 변경됨:', newValue);
});
</script>
