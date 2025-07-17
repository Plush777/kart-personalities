<template>
	<div class="flex flex-col justify-center gap-5 items-center">
		<Button
			effectType="3d-blue"
			styleType="fill-blue1-md"
			@click="bluePropObject.function"
			v-if="bluePropObject?.show == true"
		>
			<ButtonIconGroup :icon="bluePropObject.icon" />
			<span>{{ bluePropObject.text }}</span>
		</Button>

		<Button
			effectType="3d-gray"
			styleType="fill-gray1-md"
			@click="grayPropObject.function"
			v-if="grayPropObject?.show == true"
		>
			<ButtonIconGroup :icon="grayPropObject.icon" />
			<span>{{ grayPropObject.text }}</span>
		</Button>

		<Button
			effectType="3d-gray"
			styleType="fill-gray2-md"
			@click="gray2PropObject.function"
			v-if="gray2PropObject?.show == true"
		>
			<ButtonIconGroup :icon="gray2PropObject.icon" />
			<span>{{ gray2PropObject.text }}</span>
		</Button>
	</div>
</template>

<script setup>
import ButtonIconGroup from '@/components/icons/ButtonIconGroup.vue';
import Button from '@/components/button/Button.vue';
import ResetIcon from '@/components/icons/Reset.vue';
import BackIcon from '@/components/icons/Back.vue';
import ShareIcon from '@/components/icons/Share.vue';

const props = defineProps({
	bluePropObject: {
		type: Object
	},
	grayPropObject: {
		type: Object
	},
	gray2PropObject: {
		type: Object
	}
});

const bluePropObject = props.bluePropObject;
const grayPropObject = props.grayPropObject;
const gray2PropObject = props.gray2PropObject;
</script>

<style scoped>
button {
	width: 100%;
}
</style>
