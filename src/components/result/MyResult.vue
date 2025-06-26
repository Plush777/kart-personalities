<template>
	<div class="text-center">
		<h2 class="text-2xl font-bold text-gray-800 break-keep">
			당신은 "{{ props.characterInfo.title }}" 와 가장 비슷한 성격을 가지고 있어요.
		</h2>
		<div class="flex flex-col gap-y-4 m-[40px_auto]">
			<div class="rounded-full flex items-center justify-center">
				<figure v-if="!props.imageError">
					<img
						:src="props.characterInfo.image"
						:alt="props.characterInfo.title"
						class="w-[200px] h-[170px]"
						@error="props.handleImageError"
					/>
				</figure>

				<span v-else class="text-sm text-gray-500 text-center break-keep"
					>이미지를 불러오지 못했어요.</span
				>
			</div>
			<p class="text-base leading-[1.5] break-keep text-gray-600 max-w-2xl mx-auto">
				{{ props.characterInfo.description }}
			</p>
		</div>

		<div class="flex flex-col gap-2 justify-center flex-wrap">
			<Button styleType="fill-blue-sm" @click="props.restartTest">다시 테스트하기</Button>
			<Button styleType="fill-blue-sm" @click="props.goToQuestion">질문으로 돌아가기</Button>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/button/Button.vue';

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
</script>
