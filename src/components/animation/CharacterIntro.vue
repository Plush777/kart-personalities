<template>
	<CharacterProfile type="intro" :characterData="characters" :currentIndex="currentIndex" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { introCharacterList } from '@/data/characters';
import CharacterProfileWrapper from '@/components/characterProfile/CharacterProfileWrapper.vue';
import CharacterProfile from '@/components/characterProfile/CharacterProfile.vue';

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
