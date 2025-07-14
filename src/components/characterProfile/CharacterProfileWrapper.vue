<template>
	<div :class="`${wrapperPcStyle} ${wrapperMobileStyle}`">
		<slot />
	</div>
</template>

<script setup>
const wrapperPcStyle =
	'w-full max-w-[220px] min-h-[220px] flex justify-center items-center m-[20px_auto] border-1 border-gray-300 rounded-full bg-white';
const wrapperMobileStyle =
	'max-md:max-w-[180px] max-md:min-h-[180px] [&&]:max-[375px]:max-w-[160px] [&&]:max-[375px]:min-h-[160px]';
</script>
