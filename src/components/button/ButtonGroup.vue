<template>
	<div class="flex flex-col justify-center gap-2 items-center">
		<Button
			styleType="fill-blue-sm"
			@click="bluePropObject.function"
			v-if="bluePropObject?.show == true"
		>
			<ResetIcon v-if="bluePropObject.icon === 'reset'" />
			<BackIcon v-if="bluePropObject.icon === 'back'" />
			<ShareIcon v-if="bluePropObject.icon === 'share'" />
			<span>{{ bluePropObject.text }}</span>
		</Button>

		<Button
			styleType="fill-gray-sm"
			@click="grayPropObject.function"
			v-if="grayPropObject?.show == true"
		>
			<ResetIcon v-if="grayPropObject.icon === 'reset'" />
			<BackIcon v-if="grayPropObject.icon === 'back'" />
			<ShareIcon v-if="grayPropObject.icon === 'share'" />
			<span>{{ grayPropObject.text }}</span>
		</Button>

		<Button
			styleType="fill-gray2-sm"
			@click="gray2PropObject.function"
			v-if="gray2PropObject?.show == true"
		>
			<ResetIcon v-if="gray2PropObject.icon === 'reset'" />
			<BackIcon v-if="gray2PropObject.icon === 'back'" />
			<ShareIcon v-if="gray2PropObject.icon === 'share'" />
			<span>{{ gray2PropObject.text }}</span>
		</Button>
	</div>
</template>

<script setup>
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
