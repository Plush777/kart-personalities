<template>
	<section
		:class="`result-box flex flex-col gap-y-3 border-1 border-gray-200 rounded-lg p-3 ${contentType === 'image' ? 'gap-y-5' : ''}`"
	>
		<h3 class="text-base font-bold text-black">
			<span
				:class="`${getEmoji(props.title)} data-text-title flex items-center gap-x-1 justify-center`"
			>
				{{ props.title }}</span
			>
		</h3>

		<!-- content text -->
		<p
			class="data-text text-center text-sm leading-[1.5] break-keep text-gray-700"
			v-if="props.contentType === 'text'"
		>
			{{ dataText }}
		</p>

		<!-- content list -->
		<ul class="flex flex-col gap-y-1" v-else-if="props.contentType === 'list'">
			<li v-for="item in props.data" :key="item">
				<p
					:class="`${listBeforeStyle} data-text flex items-center gap-x-2.5 max-w-[360px] text-left relative text-sm leading-[1.5] break-keep text-gray-700`"
				>
					{{ item }}
				</p>
			</li>
		</ul>

		<!-- content image -->
		<div
			v-else-if="props.contentType === 'image'"
			class="max-[375px]:flex-col max-[375px]:gap-y-[10px] flex items-center justify-center gap-x-8"
		>
			<figure class="flex flex-col gap-y-2" v-for="item in props.data">
				<img
					:src="getImage(item)"
					:alt="item"
					:class="`w-[120px] h-[100px] max-[375px]:h-auto max-[375px]:w-[100px] object-cover ${imagePosition(item)}`"
				/>
				<figcaption class="text-center text-sm leading-[1.5] break-keep font-bold text-gray-700">
					{{ item.name }}
				</figcaption>

				<Button styleType="fill-gray1-xs" @click="() => openPopup(item)"> 캐릭터 설명 보기 </Button>
			</figure>
		</div>
	</section>
</template>

<script setup>
import Button from '@/components/button/Button.vue';

const listBeforeStyle =
	'before:content-[""] before:mb-auto before:mt-[9px] before:min-w-[4px] before:min-h-[4px] before:bg-black before:rounded-full';

const emit = defineEmits(['openPopup']);

function openPopup(characterName) {
	emit('openPopup', characterName);
}

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
	if (title === '잘 맞는 캐릭터') return 'before:content-["❤️"]';
	if (title === '안 맞는 캐릭터') return 'before:content-["💔"]';

	return '';
}

function getImage(character) {
	if (character === '에리니') return '/images/characters/img-erini.webp';
	if (character === '배찌') return '/images/characters/img-bazzi.webp';
	if (character === '디지니') return '/images/characters/img-diz.webp';
	if (character === '우니') return '/images/characters/img-uni.webp';
	if (character === '티이라') return '/images/characters/img-tiera.webp';
	if (character === '케피') return '/images/characters/img-keffy.webp';
	if (character === '모스') return '/images/characters/img-mos.webp';
	if (character === '에띠') return '/images/characters/img-ethen.webp';
	if (character === '크리스') return '/images/characters/img-kris.webp';
	if (character === '마리드') return '/images/characters/img-marid.webp';
	if (character === '다오') return '/images/characters/img-dao.webp';

	return '';
}

function imagePosition(character) {
	if (character === '티이라') return 'object-[0_-2px]';

	return '';
}
</script>
