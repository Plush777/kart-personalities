<template>
	<div class="card-back" :style="{ transform: `rotateY(${flipRotation - 180}deg)` }">
		<div
			class="relative bg-gradient-to-br from-[#017FE8] to-[#014ED7] w-full h-full rounded-2xl flex flex-col items-center"
		>
			<div class="flex items-center w-full h-8 justify-end pr-4 text-[11px] text-white">
				<p class="uppercase">kartrider 면허증</p>
				<p
					class="flex items-center before:content-[''] before:border-l-[1px] before:border-white before:border-solid before:h-2.5 before:mx-1"
				>
					https://kart-personalities.netlify.app
				</p>
			</div>
			<span class="bg-black w-full h-8" aria-hidden="true"></span>

			<!-- 원래 rotate-90 -->
			<article>
				<ul class="flex flex-col">
					<li :class="[cardTopListStyle, commonTextStyle]">
						<p :class="cardTopHeadTextStyle">카트운전면허증 전용상담</p>
						<p>1544-0000</p>
					</li>
					<li :class="[cardTopListStyle, commonTextStyle]">
						<p :class="cardTopHeadTextStyle">분실신고</p>
						<p>1544-0000</p>
					</li>
					<li :class="[cardTopListStyle, commonTextStyle]">
						<p :class="cardTopHeadTextStyle">대출 서비스</p>
						<p>1661-0000</p>
					</li>
				</ul>

				<div class="flex flex-col">
					<div>
						<div class="flex items-center">
							<span :class="commonTextStyle">서 명</span>
							<span :class="[commonTextStyle, 'uppercase ']">(authorized signature)</span>
						</div>

						<div class="grid grid-cols-2 mb-2 max-w-[85px] font-[system-ui]">
							<span :class="[commonNumberStyle]">2004</span>
							<span :class="[commonNumberStyle]">0601</span>
							<span :class="[commonNumberStyle]">2004</span>
							<span :class="[commonNumberStyle]">0818</span>
						</div>
					</div>
					<div class="flex items-center gap-x-4">
						<div class="flex items-center gap-x-1">
							<span :class="[commonTextStyle, 'uppercase max-w-[34px] leading-[10px]']"
								>valid thru</span
							>
							<span class="text-sm text-white font-semibold font-[system-ui] tracking-wide"
								>08 / 18</span
							>
						</div>

						<div class="flex items-center gap-x-2">
							<span :class="[commonTextStyle, 'uppercase max-w-[34px] leading-auto']">cvc</span>
							<span class="text-sm text-white font-semibold font-[system-ui] tracking-wide"
								>123</span
							>
						</div>
					</div>

					<div class="mt-1 mb-3">
						<p class="text-sm text-white font-semibold font-[system-ui] tracking-[2px]">
							{{ getUserName() }}
						</p>
					</div>

					<div>
						<p :class="commonTextStyle">이 카드는 실제 카드가 아니므로 사용할 수 없으며,</p>
						<p :class="[commonTextStyle, 'mb-0.5']">타인에게 양도, 대여할 수 없습니다.</p>
						<p :class="commonTextStyle">If found, please return to KartriderCard.</p>

						<img
							src="/images/logo/logo-kartrider.svg"
							alt="카트라이더 로고"
							class="w-[15%] grayscale-100 mt-1"
						/>
					</div>
				</div>
			</article>

			<!-- <img src="/images/logo/logo-kartrider.svg" alt="카트라이더 로고" class="w-[250px] h-[71px]" /> -->
		</div>
	</div>
</template>

<script setup>
import { getUserName } from '@/util/sessionStorage';

const commonTextStyle = 'text-[11px] text-white font-light';
const commonNumberStyle = 'text-sm text-black font-semibold';
const cardTopListStyle = 'flex items-center gap-x-1';
const cardTopHeadTextStyle = 'min-w-[119px] font-semibold';

const props = defineProps({
	flipRotation: {
		type: Number,
		default: 0
	}
});
</script>
