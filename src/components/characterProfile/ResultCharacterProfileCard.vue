<template>
	<div class="relative mt-5 mb-10 flex flex-col items-center gap-y-4">
		<SnapshotCard :characterInfo="props.characterInfo" :handleImageError="props.handleImageError" />
		<Button
			gapX="gap-x-1.5"
			effectType="3d-blue"
			styleType="fill-blue1-md"
			@click="bluePropObject.function"
		>
			<ButtonIconGroup :icon="bluePropObject.icon" />
			<span>{{ bluePropObject.text }}</span>
		</Button>
	</div>

	<teleport to="#popup-root">
		<Popup type="center" :isOpen="isPopupOpen" @close="closePopup">
			<template #centerContent>
				<div class="flex flex-col items-center gap-y-4">
					<SnapshotCard
						sizeType="default"
						:characterInfo="props.characterInfo"
						:handleImageError="props.handleImageError"
						:isAnimation="true"
					/>
					<Button
						gapX="gap-x-1.5"
						effectType="3d-blue"
						styleType="fill-blue1-md"
						@click="bluePropObjectPopup.function"
					>
						<ButtonIconGroup :icon="bluePropObjectPopup.icon" />
						<span>{{ bluePropObjectPopup.text }}</span>
					</Button>
				</div>
			</template>
		</Popup>
	</teleport>
</template>

<script setup>
import { ref } from 'vue';
import { scrollLock } from '@/util/event';
import { getUserName } from '@/util/sessionStorage';
import { getCharacterImageName } from '@/util/characterUtils';

import SnapshotCard from '@/components/card/SnapshotCard.vue';
import Button from '@/components/button/Button.vue';
import ButtonIconGroup from '@/components/icons/ButtonIconGroup.vue';
import Popup from '@/components/popup/Popup.vue';
import PopupSection from '@/components/popup/PopupSection.vue';

const isPopupOpen = ref(false);

const props = defineProps({
	characterInfo: {
		type: Object
	},
	imageError: {
		type: Boolean
	},
	handleImageError: {
		type: Function
	}
});

const bluePropObject = {
	function: openPopup,
	icon: 'viewDetailPlus',
	text: '카드 상세보기'
};

const bluePropObjectPopup = {
	function: downloadImage,
	icon: 'download',
	text: '카드 다운로드'
};

function openPopup() {
	isPopupOpen.value = true;
	scrollLock.enable();
}

function closePopup() {
	isPopupOpen.value = false;
	scrollLock.disable();
}

function downloadImage() {
	// 이미지 URL 생성
	const imageUrl = `/images/rider/img-${getCharacterImageName(props.characterInfo.title)}-card.png`;

	// 사용자 이름 가져오기
	const userName = getUserName();

	// 파일명 생성 (사용자명_캐릭터명_카트라이더스냅샷.png)
	const fileName = `${userName}_${props.characterInfo.title}_카트라이더스냅샷.png`;

	// 이미지 다운로드
	fetch(imageUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error('이미지를 불러올 수 없습니다.');
			}
			return response.blob();
		})
		.then((blob) => {
			// 다운로드 링크 생성
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = fileName;

			// 링크 클릭하여 다운로드 실행
			document.body.appendChild(link);
			link.click();

			// 메모리 정리
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		})
		.catch((error) => {
			console.error('이미지 다운로드 실패:', error);
			alert('이미지 다운로드에 실패했습니다.');
		});
}
</script>
