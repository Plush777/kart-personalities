<template>
	<div :class="`flex flex-col relative z-10 text-center size-full ${getTypeClass()}`">
		<article :class="`flex flex-col h-full ${props.type === 'question' ? 'min-h-[769px]' : ''}`">
			<slot />
		</article>
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'default'
	}
});

function getTypeClass() {
	if (props.type === 'default') return 'max-md:p-7 max-[500px]:w-full justify-center p-10';
	if (props.type === 'question') return 'max-md:p-7 max-[500px]:w-full px-10 pb-10 pt-9.5';
	if (props.type === 'answerNotFound')
		return 'min-w-[500px] max-[500px]:min-w-auto flex flex-col justify-center h-screen max-md:px-7 max-[500px]:w-full p-10';

	return '';
}
</script>
