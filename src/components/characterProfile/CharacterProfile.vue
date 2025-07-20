<template>
	<CharacterProfileWrapper :type="props.type">
		<!-- result -->
		<ResultCharacterProfileCard
			v-if="!props.imageError && props.type === 'result'"
			:characterInfo="props.characterInfo"
			:imageError="props.imageError"
			:handleImageError="props.handleImageError"
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
	imageError: {
		type: Boolean
	},
	handleImageError: {
		type: Function
	},
	characterData: {
		type: Array
	},
	currentIndex: {
		type: Number
	}
});

const bluePropObject = {
	function: '',
	icon: 'viewDetailPlus',
	text: '상세보기',
	show: true
};
</script>
