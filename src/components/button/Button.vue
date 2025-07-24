<template>
	<button
		:class="`${commonStyle} ${getStyleType()} ${getSizeType()} ${getEffectType()} ${bindClass} max-md:w-full ${props.gapX}`"
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
		default: 'button'
	},
	styleType: {
		type: String,
		required: true,
		default: 'outline-white1'
	},
	effectType: {
		type: String,
		default: ''
	},
	bindClass: {
		type: String,
		default: ''
	},
	click: {
		type: Function,
		default: null
	},
	clickType: {
		type: String
	},
	clickClass: {
		type: String,
		default: ''
	},
	gapX: {
		type: String,
		default: 'gap-x-2'
	}
});

function handleClick() {
	if (props.clickType === 'homeRedirect') {
		window.location.href = '/';
	} else if (props.click) {
		props.click();
	}
}

const commonStyle = 'flex items-center justify-center duration-300 ease-in-out';
const disabledStyle = 'disabled:opacity-50 disabled:cursor-not-allowed';

/* size */
const lgSize = 'h-14 text-lg max-md:text-base';
const mdSize = 'h-12 text-base max-md:text-sm';
const smSize = 'h-10 text-sm max-md:text-xs';
const xsSize = 'h-8 text-[13px]';

/* padding */
const lgPadding = 'p-[0_16px] max-md:p-[0_12px]';
const mdPadding = 'p-[0_12px]';
const smPadding = 'p-[0_8px]';
const xsPadding = 'p-[0_8px]';

/* rounded */
const lgRounded = 'rounded-lg';
const mdRounded = 'rounded-md';
const fullRounded = 'rounded-full';

/* ============ color style ============ */

/* blue */
const defaultBlue1Style = 'bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-600';
const focusBlueStyle = 'focus:border-blue-300 focus:ring-2 focus:ring-blue-300';

/* white */
const outlineWhite1Style = 'w-full p-[16px_24px] border-2 rounded-full ';
const focusWhiteStyle =
	'focus:text-white focus:border-blue-600 focus:bg-blue-400 focus:border-blue-600 focus:before:bg-blue-300';
const outlineWhiteActiveClickClass =
	'border-blue-600 bg-blue-400 text-white button-3d-outline-white-active-shadow before:bg-blue-300';
const outlineWhiteInactiveClickClass = 'bg-white border-gray-600 text-black before:bg-gray-400 ';

/* gray */
const defaultGray1Style = 'text-white bg-zinc-600 hover:bg-zinc-700 disabled:hover:bg-zinc-700';
const defaultGray2Style = `text-white bg-zinc-800 hover:bg-zinc-900 disabled:hover:bg-zinc-900`;
const focusGrayStyle = 'focus:bg-zinc-600 focus:ring-2 focus:ring-zinc-400';
const focusGray2Style = 'focus:bg-zinc-900 focus:ring-2 focus:ring-zinc-700';

/* green */
const fillGreen1Style = 'text-white bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600';
const focusGreenStyle = 'focus:bg-green-600 focus:ring-2 focus:ring-green-400';

/* ============ color style ============ */

function getEffectType() {
	if (props.effectType.includes('3d') && props.styleType.includes('fill-blue1')) {
		return `button-3d-blue button-3d bg-blue-400 border-blue-600 text-white before:bg-blue-300 button-3d-blue-shadow`;
	}

	if (props.effectType.includes('3d') && props.styleType.includes('fill-gray1')) {
		return `button-3d-gray button-3d bg-zinc-600 border-zinc-700 text-white before:bg-zinc-500 button-3d-gray-shadow`;
	}

	if (props.effectType.includes('3d') && props.styleType.includes('fill-gray2')) {
		return `button-3d-gray button-3d bg-zinc-800 border-zinc-900 text-gray-50 before:bg-zinc-700 button-3d-gray2-shadow`;
	}

	if (props.effectType.includes('3d') && props.styleType.includes('outline-white1')) {
		return `button-3d-white button-3d button-3d-white-shadow ${props.clickClass ? outlineWhiteActiveClickClass : outlineWhiteInactiveClickClass}`;
	}

	if (props.effectType.includes('3d') && props.styleType.includes('fill-green1')) {
		return `button-3d-green button-3d bg-green-500 border-green-700 text-gray-50 before:bg-green-400 button-3d-green-shadow`;
	}
}

function getStyleType() {
	if (props.styleType.includes('fill-blue1') && !props.effectType.includes('3d')) {
		return `${defaultBlue1Style} ${disabledStyle} ${focusBlueStyle}`;
	}

	if (props.styleType.includes('outline-white1')) {
		return `${outlineWhite1Style} ${props.clickClass ? outlineWhiteActiveClickClass : outlineWhiteInactiveClickClass} ${focusWhiteStyle}	`;
	}

	if (props.styleType.includes('fill-gray1') && !props.effectType.includes('3d')) {
		return `${defaultGray1Style} ${disabledStyle} ${focusGrayStyle}`;
	}

	if (props.styleType.includes('fill-gray2') && !props.effectType.includes('3d')) {
		return `${defaultGray2Style} ${disabledStyle} ${focusGray2Style}`;
	}

	if (props.styleType.includes('fill-green1') && !props.effectType.includes('3d')) {
		return `${fillGreen1Style} ${disabledStyle} ${focusGreenStyle}`;
	}

	return '';
}

function getSizeType() {
	if (props.styleType.includes('lg')) {
		return `${lgSize} ${lgPadding} ${lgRounded}`;
	}

	if (props.styleType.includes('md')) {
		return `${mdSize} ${mdPadding} ${lgRounded}`;
	}

	if (props.styleType.includes('sm')) {
		return `${smSize} ${smPadding} ${mdRounded}`;
	}

	if (props.styleType.includes('xs')) {
		return `${xsSize} ${xsPadding} ${mdRounded}`;
	}

	return '';
}
</script>
