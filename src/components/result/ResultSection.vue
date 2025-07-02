<template>
	<SectionWrapper type="result">
		<h2 class="text-2xl font-bold text-gray-800 break-keep">
			{{ userName }}님은 "{{ props.characterInfo.title }}" 와 가장 비슷한 성격을 가지고 있어요.
		</h2>
		<div class="flex flex-col">
			<CharacterProfile
				type="result"
				:characterInfo="characterInfo"
				:imageError="props.imageError"
				:handleImageError="props.handleImageError"
			/>

			<div class="flex flex-col gap-y-6">
				<ResultBox title="한줄 요약" contentType="text" :dataText="characterInfo.info.summary" />
				<ResultBox title="장점" contentType="list" :data="characterInfo.info.meritArray" />
				<ResultBox title="단점" contentType="list" :data="characterInfo.info.shortcomingArray" />
				<ResultBox
					title="자주 듣는 말"
					contentType="list"
					:data="characterInfo.info.commentArray"
				/>
				<ResultBox title="잘 맞는 유형" contentType="image" :data="characterInfo.info.well" />
				<ResultBox title="안 맞는 유형" contentType="image" :data="characterInfo.info.bad" />
			</div>
		</div>

		<ButtonGroup
			className="mt-10"
			:bluePropObject="bluePropObject"
			:grayPropObject="grayPropObject"
			:gray2PropObject="gray2PropObject"
		/>
	</SectionWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserName } from '@/util/getUserName.js';

import CharacterProfile from '@/components/characterProfile/CharacterProfile.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';
import ButtonGroup from '@/components/button/ButtonGroup.vue';
import ResultBox from '@/components/result/ResultBox.vue';

const props = defineProps({
	characterInfo: {
		type: Object,
		required: true
	},
	restartTest: {
		type: Function,
		required: true
	},
	goToQuestion: {
		type: Function,
		required: true
	},
	imageError: {
		type: Boolean,
		required: true
	},
	handleImageError: {
		type: Function,
		required: true
	},
	copyToClipboard: {
		type: Function,
		required: true
	}
});

const bluePropObject = {
	function: props.restartTest,
	icon: 'reset',
	text: '다시 테스트하기',
	show: true
};

const grayPropObject = {
	function: props.goToQuestion,
	icon: 'back',
	text: '질문으로 돌아가기',
	show: true
};

const gray2PropObject = {
	function: props.copyToClipboard,
	icon: 'share',
	text: '공유하기',
	show: true
};

const characterInfo = ref(props.characterInfo);

const userName = ref('');

onMounted(() => {
	userName.value = getUserName() || 'undefined';
});
</script>
