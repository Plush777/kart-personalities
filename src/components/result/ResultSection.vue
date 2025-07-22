<template>
	<SectionWrapper>
		<h2 class="text-2xl font-bold text-gray-800 break-keep">
			{{ userName }}님은 "<em>{{ props.characterInfo.title }}</em
			>" 와 가장 비슷한 성격을 가지고 있어요.
		</h2>
		<div class="flex flex-col mb-10">
			<CharacterProfile type="result" :characterInfo="characterInfo" :ssrUserName="ssrUserName" />

			<ResultBoxContainer type="default">
				<ResultBox title="한줄 요약" contentType="text" :dataText="characterInfo.info.summary" />
				<ResultBox title="장점" contentType="list" :data="characterInfo.info.meritArray" />
				<ResultBox title="단점" contentType="list" :data="characterInfo.info.shortcomingArray" />
				<ResultBox
					title="자주 듣는 말"
					contentType="list"
					:data="characterInfo.info.commentArray"
				/>
				<ResultBox
					title="잘 맞는 캐릭터"
					contentType="image"
					:data="characterInfo.info.well"
					@openPopup="openPopup"
				/>
				<ResultBox
					title="안 맞는 캐릭터"
					contentType="image"
					:data="characterInfo.info.bad"
					@openPopup="openPopup"
				/>
			</ResultBoxContainer>
		</div>

		<ButtonGroup
			:bluePropObject="bluePropObject"
			:grayPropObject="grayPropObject"
			:gray2PropObject="gray2PropObject"
		/>
	</SectionWrapper>

	<teleport to="#popup-root">
		<Popup type="bottom" :isOpen="isPopupOpen" @close="closePopup">
			<template #content>
				<PopupSection
					:isPopupOpen="isPopupOpen"
					:data="selectedCharacter"
					:contentText="selectedCharacter?.info.originalExplanation"
				/>
			</template>
		</Popup>
	</teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserName } from '@/util/sessionStorage.js';
import { getUsernameFromUrl } from '@/util/urlShortener.js';
import { scrollLock } from '@/util/event';
import { characters } from '@/data/characters.js';

import CharacterProfile from '@/components/characterProfile/CharacterProfile.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';
import ButtonGroup from '@/components/button/ButtonGroup.vue';
import ResultBox from '@/components/result/ResultBox.vue';
import ResultBoxContainer from '@/components/result/ResultBoxContainer.vue';
import Popup from '@/components/popup/Popup.vue';
import PopupSection from '@/components/popup/PopupSection.vue';

const characterOriginData = ref(characters);
const isPopupOpen = ref(false);
const selectedCharacter = ref(null);

function openPopup(characterName) {
	selectedCharacter.value = characters[characterName];
	isPopupOpen.value = true;
	scrollLock.enable();
}

function closePopup() {
	isPopupOpen.value = false;
	scrollLock.disable();
}

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
	copyToClipboard: {
		type: Function,
		required: true
	},
	ssrUserName: {
		type: String
	}
});

console.log('characterInfo:', props.characterInfo);

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
	text: '테스트 결과 공유하기',
	show: true
};

const characterInfo = ref(props.characterInfo);

const userName = ref(props.ssrUserName || '');

onMounted(() => {
	// SSR에서 받은 값이 있으면 덮어쓰지 않음
	if (props.ssrUserName) return;
	const urlUsername = getUsernameFromUrl();
	const currentUsername = getUserName();
	userName.value = urlUsername || currentUsername || 'undefined';
});
</script>
