<template>
	<section class="flex flex-col items-center gap-y-2">
		<div>
			<img src="" alt="sdsdssdss" />
		</div>
		<div class="border-t border-gray-200 pt-3.5">
			<p class="text-sm text-gray-700 break-keep">{{ contentText }}</p>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	contentText: {
		type: String
	}
});
</script>
