<template>
	<div
		:class="`fixed left-1/2 -translate-x-1/2 bottom-0 ${transitionStyle} w-full 
        ${props.isOpen ? `${openStyle} z-[100] translate-y-0` : `${closeStyle} z-[-1] translate-y-full`} 
        ${minWidthStyle()} ${maxWidthStyle()} ${mobileWidthStyle()}`"
	>
		<div class="bg-white rounded-[8px_8px_0_0] w-full">
			<header class="p-4 h-12 flex justify-between items-center">
				<button
					type="button"
					class="text-gray-900 h-full p-[5px] flex items-center justify-end m-[-5px_-5px_-5px_auto]"
					@click="closePopup"
				>
					<Close />
				</button>
			</header>
			<article class="h-[calc(100vh_-_200px)] overflow-y-auto p-4">
				<slot name="content" />
			</article>
		</div>
	</div>

	<div
		id="dimmed"
		@click="closePopup"
		:class="`fixed left-0 top-0 size-full inset-0 bg-black/50 ${transitionStyle} ${props.isOpen ? `${openStyle} z-[30] opacity-100` : `${closeStyle} opacity-0`}`"
	></div>
</template>

<script setup>
import Close from '@/components/icons/Close.vue';

const emit = defineEmits(['close']);

function closePopup() {
	emit('close');
}

const openStyle = 'visible pointer-events-auto';
const closeStyle = 'invisible pointer-events-none';
const transitionStyle = 'duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all';

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false
	},
	maxWidth: {
		type: String,
		default: '500px'
	},
	minWidth: {
		type: String,
		default: '500px'
	}
});

function minWidthStyle() {
	return `min-w-[${props.minWidth}]`;
}

function maxWidthStyle() {
	return `max-w-[${props.maxWidth}]`;
}

// props MaxWidth, minWidth 기준으로 min-w-auto, max-w-none 적용
function mobileWidthStyle() {
	const maxWidth = parseInt(props.maxWidth);
	const minWidth = parseInt(props.minWidth);
	const mobileWidth = Math.min(maxWidth, minWidth);
	return `max-[${mobileWidth}px]:min-w-auto max-[${mobileWidth}px]:max-w-none`;
}
</script>
