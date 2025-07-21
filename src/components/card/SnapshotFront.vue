<template>
	<div
		class="card-front size-full relative"
		:style="props.isAnimation ? { transform: `rotateY(${props.rotateValue}deg)` } : {}"
	>
		<img
			:src="`/images/rider/img-${getCharacterImageName(props.characterInfo.title)}-card.png`"
			:alt="`${getUserName()}의 카트운전면허증 이미지`"
			:class="`aspect-[16/9] rounded-xl size-full`"
			@error="handleImageError"
		/>
		<span
			:class="`profile-name absolute ${textTopStyle} left-1/2 -translate-x-1/2 text-white font-light whitespace-nowrap`"
			><strong class="text-[#20D5FF] font-normal">{{ getUserName() }}</strong
			>의 카트운전면허증</span
		>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getUserName } from '@/util/sessionStorage';
import { getCharacterImageName } from '@/util/characterUtils';

const props = defineProps({
	isAnimation: {
		type: Boolean,
		default: false
	},
	rotateValue: {
		type: Number,
		default: 0
	},
	characterInfo: {
		type: Object
	},
	sizeType: {
		type: String
	}
});

const textTopStyle = props.isAnimation ? 'top-[5.4%]' : 'top-[4.4%]';

const imageError = ref(false);

function handleImageError(event) {
	// 이미지 로드 실패 시 에러 상태로 변경
	imageError.value = true;
	// 이미지 요소를 숨김
	event.target.style.display = 'none';
}
</script>
