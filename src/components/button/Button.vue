<template>
	<button
		:class="`${getStyleType()} duration-300 ease-in-out focus:outline-none ${bindClass}`"
		:type="type"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		required: true,
		default: 'button'
	},
	styleType: {
		type: String,
		required: true,
		default: 'outline-white'
	},
	bindClass: {
		type: String,
		default: ''
	},
	click: {
		type: Function,
		default: null
	},
	clickClass: {
		type: String,
		default: ''
	}
});

const handleClick = () => {
	if (props.click) {
		props.click();
	}
};

const disabledStyle = 'disabled:opacity-50 disabled:cursor-not-allowed';

/* blue */
const defaultBlueStyle =
	'bg-blue-500 text-white rounded-lg p-[0_16px] hover:bg-blue-600 disabled:hover:bg-blue-600';
const focusBlueStyle = 'focus:border-blue-300 focus:ring-2 focus:ring-blue-300';

/* white */
const outlineWhiteStyle =
	'w-full p-[16px_24px] border-2 rounded-full hover:border-blue-400 hover:text-gray-900 hover:bg-blue-50';
const focusWhiteStyle =
	'focus:outline-blue-200 focus:ring-2 focus:ring-blue-200 focus:text-gray-900 ';

/* gray */
const fillGrayStyle =
	'min-w-[80px] h-12 p-[0_16px] text-white rounded-lg bg-zinc-600 hover:bg-zinc-700 disabled:hover:bg-zinc-700';
const focusGrayStyle = 'focus:bg-zinc-600 focus:ring-2 focus:ring-zinc-400';

/* green */
const fillGreenStyle =
	'h-12 p-[0_16px] text-white rounded-lg bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600';
const focusGreenStyle = 'focus:bg-green-600 focus:ring-2 focus:ring-green-400';

function getStyleType() {
	if (props.styleType === 'fill-blue') {
		return `h-14 text-lg ${defaultBlueStyle} ${disabledStyle} ${focusBlueStyle}`;
	}

	if (props.styleType === 'fill-blue-md') {
		return `min-w-[80px] h-12 text-base ${defaultBlueStyle} ${disabledStyle} ${focusBlueStyle}`;
	}

	if (props.styleType === 'fill-blue-sm') {
		return `h-10 text-sm ${defaultBlueStyle} ${disabledStyle} ${focusBlueStyle}`;
	}

	if (props.styleType === 'outline-white') {
		return `${outlineWhiteStyle} ${props.clickClass ? 'border-blue-400 bg-blue-50 text-gray-900' : 'bg-white border-gray-200 text-gray-500'} ${focusWhiteStyle}	`;
	}

	if (props.styleType === 'fill-gray') {
		return `${fillGrayStyle} ${disabledStyle} ${focusGrayStyle}`;
	}

	if (props.styleType === 'fill-green') {
		return `${fillGreenStyle} ${disabledStyle} ${focusGreenStyle}`;
	}

	return '';
}
</script>
