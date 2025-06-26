<template>
	<div :class="[pcStyle, mobile500Style, getWidthStyle()]">
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col bg-white';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto';

const props = defineProps({
	type: {
		type: String,
		default: ''
	}
});

function getWidthStyle() {
	if (props.type === 'question') {
		return 'min-w-[400px] max-w-[400px]';
	}

	if (props.type === 'result') {
		return 'min-w-[500px] max-w-[500px]';
	}

	return '';
}
</script>
