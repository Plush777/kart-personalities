<template>
	<div :class="`relative z-10 text-center bg-white w-full p-10 max-md:p-7 ${getTypeClass()}`">
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
	if (props.type === 'result') return '';
	if (props.type === 'answerNotFound')
		return 'min-w-[500px] max-[500px]:min-w-auto flex flex-col justify-center h-screen';

	return '';
}
</script>
