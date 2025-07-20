<template>
	<div
		ref="cardRef"
		class="card-container"
		:class="{ 'card-3d': isAnimation }"
		:style="cardStyle"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
	>
		<img
			:src="`/images/rider/img-${getCharacterImageName(props.characterInfo.title)}-card.png`"
			:width="imageSize.width"
			:height="imageSize.height"
			:alt="`${props.characterInfo.title} 의 카트라이더 스냅샷 이미지`"
			class="aspect-[16/9]"
			@error="props.handleImageError"
		/>
		<span
			:class="`profile-name absolute ${props.isAnimation ? 'top-[5.4%]' : 'top-[4.4%]'}
             left-1/2 -translate-x-1/2 text-white font-light whitespace-nowrap`"
			><strong class="text-[#20D5FF] font-normal">{{ getUserName() }}</strong
			>의 카트라이더 스냅샷</span
		>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getUserName } from '@/util/sessionStorage';
import { getCharacterImageName } from '@/util/characterUtils';

const props = defineProps({
	isAnimation: {
		type: Boolean,
		default: false
	},
	characterInfo: {
		type: Object
	},
	handleImageError: {
		type: Function
	},
	sizeType: {
		type: String,
		default: 'sm'
	}
});

const cardRef = ref(null);
const rotationX = ref(0);
const rotationY = ref(0);
const isHovered = ref(false);

function getImageSize() {
	if (props.sizeType === 'sm') {
		return { width: '420', height: '237' };
	}

	if (props.sizeType === 'default') {
		return { width: '500', height: '281' };
	}

	return { width: '420', height: '237' };
}

const imageSize = getImageSize();

// 마우스 이동 처리
function handleMouseMove(event) {
	if (!props.isAnimation || !cardRef.value) return;

	isHovered.value = true;

	const rect = cardRef.value.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	const mouseX = event.clientX - centerX;
	const mouseY = event.clientY - centerY;

	// 회전 각도 계산 (최대 20도)
	const maxRotation = 20;
	rotationX.value = (mouseY / (rect.height / 2)) * -maxRotation;
	rotationY.value = (mouseX / (rect.width / 2)) * maxRotation;
}

// 마우스가 카드를 벗어날 때 원래 위치로 복원
function handleMouseLeave() {
	if (!props.isAnimation) return;

	isHovered.value = false;
	rotationX.value = 0;
	rotationY.value = 0;
}

// 3D 변환 스타일 계산
const cardStyle = computed(() => {
	if (!props.isAnimation) return {};

	const transform = `perspective(1000px) rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg) scale(${isHovered.value ? 1.05 : 1})`;

	// 그림자 효과 계산
	const shadowX = rotationY.value * -0.5;
	const shadowY = rotationX.value * 0.5;
	const shadowBlur = isHovered.value ? 20 : 10;
	const shadowOpacity = isHovered.value ? 0.3 : 0.2;

	return {
		transform,
		boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`
	};
});
</script>
