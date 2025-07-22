<template>
	<div
		:class="[
			pcStyle,
			mobile500Style,
			getStyle(),
			props.type === '404' ? 'max-w-[520px]' : 'min-w-[500px]'
		]"
	>
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col mx-auto ';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto ';

const props = defineProps({
	type: {
		type: String
	}
});

function getStyle() {
	if (props.type === 'result') return 'w-full ';
	if (props.type === 'question') return 'min-h-[calc(100vh_-_64px)]';
	if (props.type === '404') return 'w-full';

	return 'size-full';
}
</script>
