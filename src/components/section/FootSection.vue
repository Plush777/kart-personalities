<template>
	<footer :class="`${getStyle()} w-full`">
		<Copyright />
		<Supportbar v-if="isSupportbar" />
	</footer>
</template>

<script setup>
import Copyright from '@/layouts/Copyright.vue';
import Supportbar from '@/components/supportBar/Supportbar.vue';

const props = defineProps({
	type: {
		type: String,
		default: 'default'
	},
	isSupportbar: {
		type: Boolean,
		default: true
	}
});

function getStyle() {
	if (props.type === 'default') return 'bg-white max-w-[500px] mx-auto';
	if (props.type === 'main') return '';

	return '';
}
</script>
