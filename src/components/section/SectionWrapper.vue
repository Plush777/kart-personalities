<template>
	<div :class="`flex flex-col relative z-10 text-center  size-full p-10 ${getTypeClass()}`">
		<article>
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
	if (props.type === 'default') return 'max-md:p-7 max-[500px]:w-full justify-center';
	if (props.type === 'question') return 'max-md:p-7 max-[500px]:w-full ';
	if (props.type === 'answerNotFound')
		return 'min-w-[500px] max-[500px]:min-w-auto flex flex-col justify-center h-screen max-md:px-7 max-[500px]:w-full';

	return '';
}
</script>
