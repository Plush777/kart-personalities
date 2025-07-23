<template>
	<div class="relative mt-5 mb-10 flex flex-col items-center gap-y-4">
		<SnapshotCard
			:isAnimation="false"
			sizeType="sm"
			:characterInfo="props.characterInfo"
			:ssrUserName="props.ssrUserName"
		/>
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
					<div ref="cardRef" class="card-container">
						<SnapshotCard
							ref="snapshotCardRef"
							sizeType="default"
							:characterInfo="props.characterInfo"
							:isAnimation="true"
							:ssrUserName="props.ssrUserName"
						/>
					</div>
					<!-- 캡처용 숨겨진 카드 -->
					<div
						ref="captureCardRef"
						class="capture-card-container fixed"
						style="left: -9999px; top: -9999px"
					>
						<SnapshotCard
							ref="captureSnapshotCardRef"
							sizeType="default"
							:characterInfo="props.characterInfo"
							:isAnimation="false"
							:ssrUserName="props.ssrUserName"
							:isCapture="true"
						/>
					</div>
					<Button
						v-if="!props.isSsr"
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
import domtoimage from 'dom-to-image';
import { scrollLock } from '@/util/event';
import { getUserName } from '@/util/sessionStorage';
import { getCharacterImageName } from '@/util/characterUtils';

import SnapshotCard from '@/components/card/SnapshotCard.vue';
import Button from '@/components/button/Button.vue';
import ButtonIconGroup from '@/components/icons/ButtonIconGroup.vue';
import Popup from '@/components/popup/Popup.vue';

const isPopupOpen = ref(false);
const cardRef = ref(null);
const snapshotCardRef = ref(null);
const captureCardRef = ref(null);
const captureSnapshotCardRef = ref(null);

const props = defineProps({
	characterInfo: {
		type: Object
	},
	ssrUserName: {
		type: String
	},
	isSsr: {
		type: Boolean
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
	text: '다운로드'
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
	if (!captureSnapshotCardRef.value) {
		console.error('캡처 카드 요소를 찾을 수 없습니다.');
		return;
	}

	// 사용자 이름 가져오기
	const userName = getUserName();

	// 파일명 생성 (사용자명_캐릭터명_카트운전면허증_날짜_시간.png)
	const fileName = `${userName}_${props.characterInfo.title}_카트운전면허증_${new Date().toLocaleDateString()}_${new Date().toLocaleTimeString()}.png`;

	// 카드가 완전히 렌더링될 때까지 잠시 대기
	setTimeout(() => {
		// 캡처용 카드를 화면 밖에서 보이게 함 (사용자에게는 보이지 않음)
		const captureCard = captureCardRef.value;
		captureCard.style.opacity = '1';
		captureCard.style.left = '-9999px';
		captureCard.style.top = '-9999px';
		captureCard.style.zIndex = '9999';

		// dom-to-image 옵션 설정
		const options = {
			quality: 1.0
		};

		// 카드 컴포넌트를 이미지로 캡처
		domtoimage
			.toPng(captureSnapshotCardRef.value.$el, options)
			.then((dataUrl) => {
				// data URL을 blob으로 변환
				fetch(dataUrl)
					.then((res) => res.blob())
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
					});
			})
			.catch((error) => {
				console.error('이미지 캡처 실패:', error);
				alert('이미지 다운로드에 실패했습니다.');
			})
			.finally(() => {
				// 캡처용 카드를 다시 숨김
				captureCard.style.opacity = '0';
				captureCard.style.zIndex = '-9999';
			});
	}, 300);
}
</script>
