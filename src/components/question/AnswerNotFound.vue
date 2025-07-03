<template>
	<SectionWrapper type="answerNotFound">
		<div class="text-center py-12">
			<h3 class="text-xl font-semibold mb-4 text-gray-700 break-keep">
				이런! 답변 데이터를 찾을 수 없네요.
			</h3>
			<p class="text-gray-600 mb-6">먼저 성격 테스트를 완료해주세요.</p>

			<div class="flex flex-col gap-y-4">
				<ButtonGroup :bluePropObject="bluePropObject" />
				<span class="text-gray-500 break-keep text-[13px] font-medium text-center"
					>또는 해당 에러가 계속 지속된다면</span
				>
				<ButtonGroup :grayPropObject="grayPropObject" />
			</div>
		</div>
	</SectionWrapper>
</template>

<script setup>
import ButtonGroup from '@/components/button/ButtonGroup.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';

const props = defineProps({
	restart: {
		type: Function,
		required: true
	}
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
