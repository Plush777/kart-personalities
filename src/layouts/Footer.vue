<template>
	<footer :class="`${getStyle()} text-center w-full`">
		<a
			href="https://github.com/Plush777/kartrider-personality-test-app"
			target="_blank"
			:class="copyStyle"
			>Made by Plush &copy; 2025</a
		>
	</footer>
</template>

<script setup>
const copyStyle = 'text-center text-[13px] text-gray-500 underline max-md:text-xs max-md:mt-4';

const props = defineProps({
	type: {
		type: String,
		default: 'absolute'
	}
});

function getStyle() {
	if (props.type === 'absolute') return 'absolute z-0 bottom-[10px] left-1/2 -translate-x-1/2';
	if (props.type === 'static') return 'static translate-none bg-white max-w-[500px] mx-auto';

	return '';
}
</script>
