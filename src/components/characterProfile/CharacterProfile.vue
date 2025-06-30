<template>
	<CharacterProfileWrapper>
		<figure v-if="!props.imageError && props.type === 'result'">
			<img
				:src="props.characterInfo.image"
				:alt="props.characterInfo.title"
				class="w-[150px]"
				@error="props.handleImageError"
			/>
		</figure>

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
			<img
				:class="`w-[150px] max-md:w-[128px] [&&]:max-[375px]:w-[100px] object-contain`"
				:src="character.image"
				:alt="character.name"
			/>
		</figure>

		<span v-else class="text-sm text-gray-500 text-center break-keep"
			>이미지를 불러오지 못했어요.</span
		>
	</CharacterProfileWrapper>
</template>

<script setup>
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
</style>
