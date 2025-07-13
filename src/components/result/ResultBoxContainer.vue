<template>
	<div :class="`flex flex-col gap-y-${getGapY()}`">
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'default'
	}
});

function getGapY() {
	if (props.type === 'default') return '6';
	if (props.type === 'popup') return '3';
}
</script>
