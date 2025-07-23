<template>
	<div :class="centerStyle()">
		<ImageLoading v-if="!imageLoaded" />
		<div
			v-show="imageLoaded"
			class="card-front size-full relative"
			:style="props.isAnimation ? { transform: `rotateY(${props.rotateValue}deg)` } : {}"
		>
			<img
				:src="`/images/rider/img-${getCharacterImageName(props.characterInfo.title)}-card.png`"
				:alt="`${getDisplayUserName()}의 카트운전면허증 이미지`"
				:class="`aspect-[16/9] rounded-xl card-image bg-gray-200 w-full max-w-none block`"
				@load="handleImageLoad"
				@error="handleImageError"
				style="display: block"
			/>
			<span
				:class="`profile-name absolute ${textTopStyle} left-1/2 -translate-x-1/2 text-white font-light whitespace-nowrap`"
				><strong :class="`${skyText} font-normal`">{{ getDisplayUserName() }}</strong
				>의 카트운전면허증</span
			>

			<ul :class="`absolute card-text-ul ${cardInformationStyle} flex flex-col gap-y-2 `">
				<li class="flex items-center whitespace-nowrap">
					<span class="text-white profile-description">라이더명:</span>
					<span :class="`${skyText} profile-description ml-2`">{{ getDisplayUserName() }}</span>
				</li>
				<li class="flex items-center whitespace-nowrap">
					<span class="text-white profile-description">발급일:</span>
					<!-- 한국기준 오늘 날짜 -->
					<span :class="`${skyText} profile-description ml-2`">{{ today }}</span>
				</li>
				<li class="flex items-center whitespace-nowrap">
					<span class="text-white profile-description">성격 유형:</span>
					<span :class="`${skyText} profile-description ml-2`">{{
						props.characterInfo.title
					}}</span>
				</li>
				<li class="flex items-center whitespace-nowrap">
					<span class="text-white profile-description">조건:</span>
					<span :class="`${skyText} profile-description ml-2`">A</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getUserName } from '@/util/sessionStorage';
import { getCharacterImageName } from '@/util/characterUtils';
import ImageLoading from '@/components/loading/ImageLoading.vue';
import { onMounted } from 'vue';

const skyText = 'text-[#20D5FF]';
const today = new Date().toLocaleDateString('ko-KR');

const props = defineProps({
	isAnimation: {
		type: Boolean,
		default: false
	},
	rotateValue: {
		type: Number,
		default: 0
	},
	characterInfo: {
		type: Object
	},
	sizeType: {
		type: String
	},
	userName: {
		type: String,
		default: ''
	},
	ssrUserName: {
		type: String
	},
	isCapture: {
		type: Boolean
	}
});

function getDisplayUserName() {
	return props.ssrUserName || props.userName || getUserName();
}

const cardInformationStyle = props.isAnimation
	? 'top-[95px] left-[200px] max-md:gap-y-[calc(4vw_-_10px)] max-md:top-[16vw] max-md:left-[33vw] [&&]:max-[375px]:top-[60px] [&&]:max-[375px]:left-[130px] [&&]:max-[375px]:gap-y-2'
	: 'top-[80px] left-[170px] max-[500px]:gap-y-[1.62vw] max-[500px]:top-[17vw] max-[500px]:left-[36vw] ';

const textTopStyle = props.isAnimation ? 'top-[5.4%]' : 'top-[4.4%]';

const imageError = ref(false);
const imageLoaded = ref(false);

function handleImageLoad() {
	imageLoaded.value = true;
}

function handleImageError(event) {
	imageError.value = true;
	event.target.style.display = 'none';
}

function centerStyle() {
	if (!props.isAnimation && !props.isCapture) {
		return 'flex items-center justify-center h-full';
	}

	return '';
}

onMounted(() => {
	if (props.ssrUserName) {
		imageLoaded.value = true;
	}
});
</script>
