<template>
	<input
		:id="id"
		:class="`${getStyleType()} ${getHeight()} ${getAlign()} ${width} font-[Pretendard_Variable] 
		duration-300 ease-in-out focus:outline-none bg-white`"
		:type="formType"
		:placeholder="placeholder"
		:value="modelValue"
		:maxlength="maxLength"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script setup>
const props = defineProps({
	id: {
		type: String
	},
	heightType: {
		type: String,
		default: 'md'
	},
	styleType: {
		type: String,
		default: 'outline-white'
	},
	formType: {
		type: String,
		default: 'text'
	},
	placeholder: {
		type: String
	},
	modelValue: {
		type: String,
		default: ''
	},
	maxLength: {
		type: Number
	},
	width: {
		type: String
	},
	align: {
		type: String,
		default: 'center'
	}
});

defineEmits(['update:modelValue']);

function getStyleType() {
	if (props.styleType === 'outline-white') {
		return 'border border-solid border-gray-300 rounded-xl p-[0_18px] text-base placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 max-md:text-sm max-md:p-[0_12px]';
	}
}

function getHeight() {
	if (props.heightType === 'md') {
		return 'h-12 max-md:h-10';
	}

	return 'h-10';
}

function getAlign() {
	if (props.align === 'center') {
		return 'text-center';
	}

	if (props.align === 'right') {
		return 'text-right';
	}

	if (props.align === 'left') {
		return 'text-left';
	}

	return 'text-center';
}
</script>
