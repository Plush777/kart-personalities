<template>
	<input
		:id="id"
		:class="`${getStyleType()} ${getHeight()} ${getAlign()} ${width} font-[Pretendard_Variable] 
		duration-300 ease-in-out focus:outline-none bg-white`"
		:type="formType"
		:placeholder="placeholder"
		:value="value"
		:maxlength="maxLength"
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
		required: true,
		default: 'outline-white'
	},
	formType: {
		type: String,
		required: true,
		default: 'text'
	},
	placeholder: {
		type: String
	},
	value: {
		type: String
	},
	maxLength: {
		type: Number
	},
	width: {
		type: String
	},
	height: {
		type: Number
	},
	align: {
		type: String,
		default: 'center'
	}
});

function getStyleType() {
	if (props.styleType === 'outline-white') {
		return 'border border-solid border-gray-300 rounded-xl p-[0_18px] text-base placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500';
	}
}

function getHeight() {
	if (props.heightType === 'md') {
		return 'h-12';
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
