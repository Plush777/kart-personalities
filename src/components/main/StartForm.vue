<template>
	<div class="flex flex-col gap-y-6 w-full max-w-[300px] max-md:gap-y-4">
		<div class="flex flex-col gap-y-1 mx-auto">
			<TextField
				id="nameInput"
				:width="textFieldStyle"
				:maxLength="10"
				align="center"
				placeholder="이름을 입력해주세요."
				v-model="userName"
				@keyup.enter="handleStartTest"
			/>
			<p class="text-xs text-center text-gray-500">*이름은 최대 10글자까지만 설정 가능해요.</p>
		</div>

		<Button
			bindClass="start-button max-md:h-10"
			styleType="fill-blue1-md"
			:disabled="isLoading"
			@click="handleStartTest"
		>
			{{ isLoading ? '이동하는중....' : '테스트 시작하기' }}
		</Button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { setUserName, clearQuizCompleted } from '@/util/sessionStorage';

import TextField from '@/components/form/TextField.vue';
import Button from '@/components/button/Button.vue';

const userName = ref('');
const isLoading = ref(false);
const textFieldStyle = 'min-w-[230px] max-w-[230px]';

async function handleStartTest() {
	const name = userName.value.trim();

	if (!name) {
		alert('먼저 이름을 입력해주세요');
		return;
	}

	// 로딩 상태 시작
	isLoading.value = true;

	// 조회수 증가 (환경에 따라 다른 slug 사용)
	try {
		const isDev =
			window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
		const slug = isDev ? '_home_dev' : '_home';
		await fetch(`/api/views/${slug}`, { method: 'POST' });
	} catch (err) {
		console.error('조회수 증가 실패:', err);
	}

	// 새로운 테스트 시작 시 완료 상태 초기화
	clearQuizCompleted();

	setUserName(name);
	window.location.href = '/question';
}
</script>
