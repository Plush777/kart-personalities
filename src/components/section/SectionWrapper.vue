<template>
	<article :class="`relative z-10 text-center bg-white w-full p-10  ${getTypeClass()}`">
		<slot />
	</article>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		required: true
	}
});

function getTypeClass() {
	if (props.type === 'question') return 'rounded-xl shadow-md max-md:p-6 ';
	if (props.type === 'result') return 'max-md:p-7 ';
	if (props.type === 'answerNotFound')
		return 'min-w-[500px] max-[500px]:min-w-auto flex flex-col justify-center h-screen max-md:p-7';

	return '';
}
</script>
