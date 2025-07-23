<template>
	<CharacterProfileWrapper :type="props.type">
		<!-- result -->
		<ResultCharacterProfileCard
			v-if="props.type === 'result'"
			:characterInfo="props.characterInfo"
			:ssrUserName="props.ssrUserName"
			:isSsr="props.isSsr"
		/>

		<!-- intro -->
		<IntroCharacterProfileCircle
			v-else-if="props.type === 'intro'"
			:characterData="props.characterData"
			:currentIndex="props.currentIndex"
		/>

		<span v-else class="text-sm text-gray-500 text-center break-keep"
			>이미지를 불러오지 못했어요.</span
		>
	</CharacterProfileWrapper>
</template>

<script setup>
import ResultCharacterProfileCard from '@/components/characterProfile/ResultCharacterProfileCard.vue';
import IntroCharacterProfileCircle from '@/components/characterProfile/IntroCharacterProfileCircle.vue';
import CharacterProfileWrapper from '@/components/characterProfile/CharacterProfileWrapper.vue';

const props = defineProps({
	type: {
		type: String,
		required: true
	},
	characterInfo: {
		type: Object
	},

	characterData: {
		type: Array
	},
	currentIndex: {
		type: Number
	},
	ssrUserName: {
		type: String
	},
	isSsr: {
		type: Boolean
	}
});

const bluePropObject = {
	function: '',
	icon: 'viewDetailPlus',
	text: '상세보기',
	show: true
};
</script>
