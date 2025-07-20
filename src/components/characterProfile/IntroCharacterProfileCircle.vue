<template>
	<figure
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
</template>

<script setup>
const imageStyle =
	'w-[150px] max-md:w-[128px] [&&]:max-[500px]:w-[112px] [&&]:max-[375px]:w-[100px] object-contain';

const props = defineProps({
	characterData: {
		type: Array
	},
	currentIndex: {
		type: Number
	}
});
</script>
