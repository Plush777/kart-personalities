<template>
	<CharacterProfileWrapper>
		<figure
			v-for="(character, index) in characters"
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
	</CharacterProfileWrapper>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { introCharacterList } from '@/data/characters';
import CharacterProfileWrapper from '@/components/characterProfile/CharacterProfileWrapper.vue';

const characters = introCharacterList;

const currentIndex = ref(0);
let intervalId = null;

const startAnimation = () => {
	intervalId = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % characters.length;
	}, 2000); // 2초마다 다음 캐릭터로 변경
};

onMounted(() => {
	startAnimation();
});

onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId);
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
