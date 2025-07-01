<template>
	<div class="flex flex-col gap-y-3 border-1 border-gray-200 rounded-lg p-3">
		<h3 class="text-base font-bold text-black">
			<span :class="`${getEmoji(props.title)} flex items-center gap-x-1 justify-center`">
				{{ props.title }}</span
			>
		</h3>

		<!-- content -->
		<div v-if="props.contentType === 'text'">
			<p class="text-center text-sm leading-[1.5] break-keep text-gray-700">
				{{ dataText }}
			</p>
		</div>

		<div v-else-if="props.contentType === 'list'">
			<ul class="flex flex-col gap-y-1">
				<li v-for="item in props.data" :key="item">
					<p
						:class="`${listBeforeStyle} inline-flex max-w-[360px] pl-3.5 text-center relative text-sm leading-[1.5] break-keep text-gray-700`"
					>
						{{ item }}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const listBeforeStyle =
	'before:content-[""] before:absolute before:size-1 before:top-[8px] before:left-0 before:bg-black before:rounded-full';

const props = defineProps({
	title: {
		type: String,
		required: true,
		default: ''
	},
	dataText: {
		type: String
	},
	contentType: {
		type: String,
		default: 'text'
	},
	data: {
		type: Array
	}
});

function getEmoji(title) {
	if (title === '한줄 요약') return 'before:content-["📌"]';
	if (title === '장점') return 'before:content-["👍"]';
	if (title === '단점') return 'before:content-["👎"]';
	if (title === '자주 듣는 말') return 'before:content-["💬"]';
	if (title === '잘 맞는 유형') return 'before:content-["❤️"]';
	if (title === '안 맞는 유형') return 'before:content-["💔"]';

	return '';
}
</script>
