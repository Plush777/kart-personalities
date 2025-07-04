<template>
	<section class="pt-[190px] relative flex flex-col items-center gap-y-2">
		<div :class="characterObject.top" class="absolute -translate-1/2 left-1/2 z-0">
			<img
				:class="characterObject.imgSize"
				:src="props.data?.popupImage"
				:alt="props.data?.title"
			/>
		</div>
		<div class="relative z-10 border-t border-gray-200 pt-3.5">
			<p class="text-sm text-gray-700 break-keep">{{ contentText }}</p>
		</div>
	</section>
</template>

<script setup>
import { computed, ref, watch, onUnmounted } from 'vue';

const props = defineProps({
	data: {
		type: Object
	},
	contentText: {
		type: String
	},
	isPopupOpen: {
		type: Boolean
	}
});

// 팝업 상태 변화를 추적하기 위한 ref
const isAnimating = ref(false);
const shouldShowStyles = ref(false);
let closeTimer = null;

// 팝업 상태 변화 감지
watch(
	() => props.isPopupOpen,
	(newValue, oldValue) => {
		// 이전 타이머가 있다면 정리
		if (closeTimer) {
			clearTimeout(closeTimer);
			closeTimer = null;
		}

		if (newValue && !oldValue) {
			// 팝업이 열릴 때
			shouldShowStyles.value = true;
			isAnimating.value = false;
		} else if (!newValue && oldValue) {
			// 팝업이 닫힐 때
			isAnimating.value = true;
			// 700ms 후에 스타일 제거 (팝업 타이머 중복 방지)
			closeTimer = setTimeout(() => {
				shouldShowStyles.value = false;
				isAnimating.value = false;
				closeTimer = null;
			}, 700);
		}
	},
	{ immediate: true }
);

// 컴포넌트가 언마운트될 때 타이머 정리
onUnmounted(() => {
	if (closeTimer) {
		clearTimeout(closeTimer);
		closeTimer = null;
	}
});

const characterObject = computed(() => {
	if (!props.data) return { top: '', imgSize: '' };

	const characterName = props.data.title;

	// 팝업이 열려있거나 애니메이션 중일 때만 스타일 적용
	if (props.isPopupOpen || (isAnimating.value && shouldShowStyles.value)) {
		if (characterName === '디지니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '배찌')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '크리스')
			return {
				top: 'top-[90px]',
				imgSize: ''
			};
		if (characterName === '에리니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '티이라')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '모스')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '우니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '다오')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '마리드')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '케피')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '에띠')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
	}

	// 팝업이 닫혀있고 애니메이션도 완료된 경우 기본값
	return { top: '', imgSize: '' };
});
</script>
