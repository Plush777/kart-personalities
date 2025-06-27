<template>
	<div :class="[pcStyle, mobile500Style, getTypeStyle()]">
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col ';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto';

const props = defineProps({
	type: {
		type: String,
		default: ''
	}
});

function getTypeStyle() {
	if (props.type === 'question') {
		return 'min-w-[400px] max-w-[400px] bg-white';
	}

	if (props.type === 'result') {
		return 'w-full max-w-[500px]';
	}

	return '';
}
</script>
