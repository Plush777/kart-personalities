<template>
	<CharacterProfileWrapper :type="props.type">
		<div class="relative mt-5 mb-10" v-if="!props.imageError && props.type === 'result'">
			<img src="/images/rider/img-rider-snapshot-frame.png" alt="" class="aspect-[16/9]" />
			<span
				class="profile-name absolute top-[5%] left-1/2 -translate-x-1/2 text-white font-light whitespace-nowrap"
				><strong class="text-[#20D5FF] font-normal">{{ getUserName() }}</strong
				>의 카트라이더 스냅샷</span
			>
			<img
				:src="props.characterInfo.image"
				:alt="props.characterInfo.title"
				:class="resultImageStyle"
				@error="props.handleImageError"
			/>
		</div>

		<figure
			v-else-if="props.type === 'intro'"
			v-for="(character, index) in characterData"
			:key="character.name"
			class="character-item"
			:class="{
				active: currentIndex === index,
				'fade-out': currentIndex > index
			}"
		>
			<img :class="imageStyle" :src="character.image" :alt="character.name" />
		</figure>

		<span v-else class="text-sm text-gray-500 text-center break-keep"
			>이미지를 불러오지 못했어요.</span
		>
	</CharacterProfileWrapper>
</template>

<script setup>
import { getUserName } from '@/util/sessionStorage';
import CharacterProfileWrapper from '@/components/characterProfile/CharacterProfileWrapper.vue';

const imageStyle =
	'w-[150px] max-md:w-[128px] [&&]:max-[500px]:w-[112px] [&&]:max-[375px]:w-[100px] object-contain';
const resultImageStyle = 'absolute w-[95px] top-[41%] left-[9%] object-contain ';

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
</script>

<style scoped>
.character-item {
	position: absolute;
	opacity: 0;
	transform: scale(0.8);
	transition: all 0.5s ease-in-out;
}

.character-item.active {
	opacity: 1;
	transform: scale(1);
}

.character-item.fade-out {
	opacity: 0;
	transform: scale(0.8);
}

.profile-name {
	font-size: clamp(14px, 4vw, 20px);
}
</style>
