<template>
	<div :class="`flex justify-center gap-2 items-center max-[500px]:flex-col ${props.className}`">
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	className: {
		type: String,
		default: ''
	}
});
</script>
