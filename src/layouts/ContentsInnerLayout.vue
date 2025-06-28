<template>
	<div :class="[pcStyle, mobile500Style, getTypeStyle()]">
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col ';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto w-[calc(100vw_-_40px)]';

const props = defineProps({
	type: {
		type: String,
		default: ''
	}
});

function getTypeStyle() {
	if (props.type === 'question') {
		return 'min-w-[500px] max-w-[500px] ';
	}

	if (props.type === 'result') {
		return 'w-full max-w-[500px]';
	}

	return '';
}
</script>
