<template>
	<div
		:class="`relative z-10 text-center bg-white w-full p-10 max-md:p-7 scroll ${getTypeClass()}`"
	>
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		required: true
	}
});

function getTypeClass() {
	if (props.type === 'question') return 'rounded-xl shadow-md';
	if (props.type === 'result') return 'scrollbar-hide overflow-y-auto h-screen';

	return '';
}
</script>
