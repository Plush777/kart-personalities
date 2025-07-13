<template>
	<div :class="[pcStyle, mobile500Style, getStyle()]">
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col min-w-[500px] max-w-[500px] mx-auto size-full bg-white';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto ';

const props = defineProps({
	type: {
		type: String
	}
});

function getStyle() {
	if (props.type === 'result') return 'overflow-y-auto max-h-[calc(100vh_-_68px)] scrollbar-hide';
	return '';
}
</script>
