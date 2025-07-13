<template>
	<footer :class="`${getStyle()} w-full`">
		<Copyright />
		<Supportbar />
	</footer>
</template>

<script setup>
import Copyright from '@/layouts/Copyright.vue';
import Supportbar from '@/components/supportBar/Supportbar.vue';

const props = defineProps({
	type: {
		type: String,
		default: 'absolute'
	}
});

function getStyle() {
	if (props.type === 'absolute') return 'absolute z-0 bottom-0 left-1/2 -translate-x-1/2';
	if (props.type === 'static') return 'static translate-none bg-white max-w-[500px] mx-auto';

	return '';
}
</script>
