<template>
	<div class="max-[500px]:flex-col max-[500px]:flex max-[500px]:m-[0_auto] space-y-2">
		<Button
			v-for="(option, index) in options"
			:key="index"
			styleType="outline-white"
			bindClass="max-[500px]:max-w-[300px] text-center"
			:clickClass="getOptionClasses(index)"
			:click="() => selectOption(index)"
		>
			{{ option.text }}
		</Button>
	</div>
</template>

<script setup>
import Button from '@/components/button/Button.vue';

const props = defineProps({
	options: {
		type: Array,
		required: true
	},
	selectedOption: {
		type: Number,
		default: null
	}
});

const emit = defineEmits(['select']);

const getOptionClasses = (optionIndex) => {
	const selectedClasses = 'border-blue-400 bg-blue-50';
	return props.selectedOption === optionIndex ? selectedClasses : '';
};

const selectOption = (optionIndex) => {
	emit('select', optionIndex);
};
</script>
