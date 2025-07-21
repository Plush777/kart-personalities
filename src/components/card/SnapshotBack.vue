<template>
	<div class="card-back" :style="{ transform: `rotateY(${flipRotation - 180}deg)` }">
		<div
			class="relative bg-gradient-to-br from-[#017FE8] to-[#014ED7] w-full h-full rounded-2xl flex flex-col items-center"
		>
			<div class="flex items-center w-full min-h-8 justify-end pr-4 text-[11px] text-white">
				<p class="uppercase">kartrider 면허증</p>
				<p
					class="flex items-center before:content-[''] before:border-l-[1px] before:border-white before:border-solid before:h-2.5 before:mx-1"
				>
					https://kart-personalities.netlify.app
				</p>
			</div>
			<div class="bg-black w-full min-h-8" aria-hidden="true"></div>

			<article class="max-w-[220px] max-md:max-w-[40vw] relative rotate-90">
				<ul
					class="card-list flex flex-col relative top-[-110px] left-[22px] max-md:top-[-19.5vw] max-md:left-[6vw]"
				>
					<li :class="[cardTopListStyle, commonTextStyle, 'card-list-item-text']">
						<p :class="cardTopHeadTextStyle">카트운전면허증 전용상담</p>
						<p>1544-0000</p>
					</li>
					<li :class="[cardTopListStyle, commonTextStyle, 'card-list-item-text']">
						<p :class="cardTopHeadTextStyle">분실신고</p>
						<p>1544-0000</p>
					</li>
					<li :class="[cardTopListStyle, commonTextStyle, 'card-list-item-text']">
						<p :class="cardTopHeadTextStyle">대출 서비스</p>
						<p>1661-0000</p>
					</li>
				</ul>

				<div class="flex flex-col relative top-[40px] left-[-16px]">
					<div>
						<div class="flex items-center">
							<span :class="commonTextStyle">서 명</span>
							<span :class="[commonTextStyle, 'uppercase ']">(authorized signature)</span>
						</div>

						<div class="grid grid-cols-2 mb-2 max-w-[85px] max-md:max-w-[16vw] font-[system-ui]">
							<span :class="[commonNumberStyle, 'card-number-text']">2004</span>
							<span :class="[commonNumberStyle, 'card-number-text']">0601</span>
							<span :class="[commonNumberStyle, 'card-number-text']">2004</span>
							<span :class="[commonNumberStyle, 'card-number-text']">0818</span>
						</div>
					</div>
					<div class="flex items-center gap-x-4">
						<div class="flex items-center gap-x-1 max-md:gap-x-[0.75vw]">
							<span
								:class="[
									commonTextStyle,
									'uppercase max-w-[34px] max-md:max-w-[4.434vw] leading-[10px] max-md:leading-none'
								]"
								>valid thru</span
							>
							<span
								class="card-number-text text-base text-white font-semibold font-[system-ui] tracking-wide max-md:tracking-[0.07vw]"
								>08 / 18</span
							>
						</div>

						<div class="flex items-center gap-x-2">
							<span
								:class="[
									commonTextStyle,
									'uppercase max-w-[34px] max-md:max-w-[4.434vw] leading-auto'
								]"
								>cvc</span
							>
							<span
								class="card-number-text text-base text-white font-semibold font-[system-ui] tracking-wide max-md:tracking-[0.07vw]"
								>123</span
							>
						</div>
					</div>

					<div class="mt-1 mb-3">
						<p
							class="card-username-text text-base text-white font-semibold font-[system-ui] tracking-[2px]"
						>
							{{ getUserName() }}
						</p>
					</div>

					<div class="leading-[10px] max-md:leading-none">
						<p :class="commonTextStyle">이 카드는 실제 카드가 아니므로 사용할 수 없으며,</p>
						<p :class="[commonTextStyle, 'mb-0.5']">타인에게 양도, 대여할 수 없습니다.</p>
					</div>

					<p :class="[commonTextStyle, 'mt-1']">If found, please return to KartriderCard.</p>

					<img
						src="/images/logo/logo-kartrider.svg"
						alt="카트라이더 로고"
						class="w-[80px] max-md:w-[14vw] grayscale-100 mt-2"
					/>
				</div>
			</article>
		</div>
	</div>
</template>

<script setup>
import { getUserName } from '@/util/sessionStorage';

const commonTextStyle = 'text-[10px] card-common-text text-white font-light';
const commonNumberStyle = 'text-base text-black font-semibold';
const cardTopListStyle = 'flex items-center gap-x-1';
const cardTopHeadTextStyle = 'font-semibold';

const props = defineProps({
	flipRotation: {
		type: Number,
		default: 0
	}
});
</script>
