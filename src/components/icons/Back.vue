<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="props.width"
		:height="props.height"
		viewBox="0 0 48 48"
		fill="none"
	>
		<path
			d="M12.9998 8L6 14L12.9998 21"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup>
const props = defineProps({
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '18'
	},
	height: {
		type: String,
		default: '18'
	}
});
</script>
