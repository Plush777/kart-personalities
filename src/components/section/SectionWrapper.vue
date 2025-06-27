<template>
	<div
		:class="`text-center bg-white w-full max-w-[500px] p-10 rounded-xl shadow-md ${props.className}`"
	>
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
