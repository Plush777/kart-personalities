<template>
	<div :class="[pcStyle, mobile500Style]">
		<slot />
	</div>
</template>

<script setup>
const pcStyle = 'flex flex-col min-w-[500px] max-w-[500px] mx-auto size-full bg-white';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto ';
</script>
