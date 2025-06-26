<template>
	<div class="mb-8">
		<h2 class="text-xl font-semibold text-gray-800 text-center leading-relaxed break-keep">
			{{ question }}
		</h2>
	</div>
</template>

<script setup>
const props = defineProps({
	question: {
		type: String,
		required: true
	}
});
</script>
