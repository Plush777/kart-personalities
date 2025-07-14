<template>
	<input
		:id="id"
		:class="`${getStyleType()} ${getHeight()} ${getAlign()} ${width} font-[Pretendard_Variable] 
		duration-300 ease-in-out focus:outline-none bg-white`"
		:type="formType"
		:placeholder="placeholder"
		:value="modelValue"
		:maxlength="maxLength"
		@input="$emit('update:modelValue', $event.target.value)"
		@focus="handleFocus"
		@blur="handleBlur"
	/>
</template>

<script setup>
const props = defineProps({
	id: {
		type: String
	},
	heightType: {
		type: String,
		default: 'md'
	},
	styleType: {
		type: String,
		default: 'outline-white'
	},
	formType: {
		type: String,
		default: 'text'
	},
	placeholder: {
		type: String
	},
	modelValue: {
		type: String,
		default: ''
	},
	maxLength: {
		type: Number
	},
	width: {
		type: String
	},
	align: {
		type: String,
		default: 'center'
	}
});

defineEmits(['update:modelValue']);

function getStyleType() {
	if (props.styleType === 'outline-white') {
		return 'border border-solid border-gray-300 rounded-xl p-[0_18px] text-base placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 max-md:text-sm max-md:p-[0_12px]';
	}
}

function getHeight() {
	if (props.heightType === 'md') {
		return 'h-12 max-md:h-10';
	}

	return 'h-10';
}

function getAlign() {
	if (props.align === 'center') {
		return 'text-center';
	}

	if (props.align === 'right') {
		return 'text-right';
	}

	if (props.align === 'left') {
		return 'text-left';
	}

	return 'text-center';
}

// 모바일에서 input focus 시 스크롤 위치 조정
function handleFocus(event) {
	console.log('TextField - handleFocus 호출됨');

	// 전역 이벤트 발생
	const focusEvent = new CustomEvent('input-focus');
	window.dispatchEvent(focusEvent);
	console.log('TextField - input-focus 전역 이벤트 발생');

	// 모바일 환경인지 확인
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);

	if (isMobile) {
		const element = event.target;

		// 즉시 스크롤 조정 (키보드가 올라오기 전)
		setTimeout(() => {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			});
		}, 100);

		// Visual Viewport API를 사용한 키보드 감지 및 조정
		if (window.visualViewport) {
			const handleViewportChange = () => {
				const rect = element.getBoundingClientRect();
				const viewportHeight = window.visualViewport.height;
				const viewportTop = window.visualViewport.offsetTop;

				// input이 키보드 위에 보이도록 조정
				const inputBottom = rect.bottom + viewportTop;
				const viewportBottom = viewportTop + viewportHeight;

				if (inputBottom > viewportBottom) {
					const scrollAdjustment = inputBottom - viewportBottom + 20; // 20px 여백
					window.scrollBy({
						top: scrollAdjustment,
						behavior: 'smooth'
					});
				}
			};

			// 키보드가 올라올 때 이벤트 리스너 추가
			window.visualViewport.addEventListener('resize', handleViewportChange);

			// blur 시 이벤트 리스너 제거
			element.addEventListener(
				'blur',
				() => {
					window.visualViewport.removeEventListener('resize', handleViewportChange);
				},
				{ once: true }
			);
		}
	}
}

// blur 이벤트 핸들러 추가
function handleBlur() {
	console.log('TextField - handleBlur 호출됨');

	// 전역 이벤트 발생
	const blurEvent = new CustomEvent('input-blur');
	window.dispatchEvent(blurEvent);
	console.log('TextField - input-blur 전역 이벤트 발생');
}
</script>
