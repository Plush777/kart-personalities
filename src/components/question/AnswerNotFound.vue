<template>
	<SectionWrapper type="answerNotFound">
		<div class="text-center py-12">
			<h3 class="text-xl font-semibold mb-4 text-gray-700 break-keep">
				{{
					isSharedLink
						? '해당 사용자의 결과를 찾을 수 없어요.'
						: '이런! 답변 데이터를 찾을 수 없네요.'
				}}
			</h3>
			<p class="text-gray-600 mb-6">
				{{
					isSharedLink
						? '링크가 만료되었거나 잘못된 링크일 수 있습니다.'
						: '먼저 성격 테스트를 완료해주세요.'
				}}
			</p>

			<div class="flex flex-col gap-y-4">
				<ButtonGroup :bluePropObject="bluePropObject" />
				<span
					v-if="!isSharedLink"
					class="text-gray-500 break-keep text-[13px] font-medium text-center"
					>또는 해당 에러가 계속 지속된다면</span
				>
				<ButtonGroup v-if="!isSharedLink" :grayPropObject="grayPropObject" />
			</div>
		</div>
	</SectionWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ButtonGroup from '@/components/button/ButtonGroup.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';
import { getUsernameFromUrl } from '@/util/sessionStorage.js';

const props = defineProps({
	restart: {
		type: Function,
		required: true
	}
});

const isSharedLink = ref(false);

onMounted(() => {
	// URL에 username 파라미터가 있으면 공유 링크로 간주
	isSharedLink.value = !!getUsernameFromUrl();
});

const bluePropObject = {
	function: props.restart,
	icon: 'back',
	text: '테스트 하러가기',
	show: true
};

const grayPropObject = {
	function: props.restart,
	icon: 'chat',
	text: '오픈채팅으로 문의하기',
	show: true
};
</script>
