<template>
	<div :class="`${wrapperPcStyle} ${wrapperMobileStyle}`">
		<slot />
	</div>
</template>

<script setup>
const wrapperPcStyle =
	'w-full max-w-[220px] h-[220px] flex justify-center items-center m-[40px_auto] border-1 border-gray-300 rounded-full bg-white';
const wrapperMobileStyle =
	'max-md:max-w-[200px] max-md:h-[200px] [&&]:max-[375px]:max-w-[160px] [&&]:max-[375px]:h-[160px]';
</script>
