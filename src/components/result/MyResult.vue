<template>
	<SectionWrapper>
		<h2 class="text-2xl font-bold text-gray-800 break-keep">
			{{ userName }}님은 "{{ props.characterInfo.title }}" 와 가장 비슷한 성격을 가지고 있어요.
		</h2>
		<div class="flex flex-col">
			<CharacterProfile
				type="result"
				:characterInfo="props.characterInfo"
				:imageError="props.imageError"
				:handleImageError="props.handleImageError"
			/>
			<p class="text-base leading-[1.5] break-keep text-gray-600 max-w-2xl mx-auto">
				{{ props.characterInfo.description }}
			</p>
		</div>

		<ButtonGroup
			className="mt-10"
			:restartTest="props.restartTest"
			:goToQuestion="props.goToQuestion"
		/>
	</SectionWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserName } from '@/util/getUserName.js';
import CharacterProfile from '@/components/characterProfile/CharacterProfile.vue';
import SectionWrapper from '@/components/section/SectionWrapper.vue';
import ButtonGroup from '@/components/button/ButtonGroup.vue';

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
	}
});

const userName = ref('');

onMounted(() => {
	userName.value = getUserName() || 'undefined';
});
</script>
