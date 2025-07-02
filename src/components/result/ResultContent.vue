<template>
	<div v-if="loading">
		<Loading />
	</div>
	<div class="w-full" v-else>
		<ContentsInnerLayout type="result">
			<ResultWrapper :characterInfo="characterInfo" />
		</ContentsInnerLayout>
		<Footer type="static" />
	</div>
</template>

<script setup>
import Loading from '@/components/loading/Loading.vue';
import ResultWrapper from '@/components/result/ResultWrapper.vue';
import ContentsInnerLayout from '@/layouts/ContentsInnerLayout.vue';
import Footer from '@/layouts/Footer.vue';

defineProps({
	loading: {
		type: Boolean,
		default: false
	},
	characterInfo: {
		type: Object,
		default: null
	}
});
</script>
