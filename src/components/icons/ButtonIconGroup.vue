<template>
	<ResetIcon v-if="props.icon === 'reset'" />
	<BackIcon v-else-if="props.icon === 'back'" />
	<ShareIcon v-else-if="props.icon === 'share'" />
	<ChatIcon v-else-if="props.icon === 'chat'" />
</template>

<script setup>
import ResetIcon from '@/components/icons/Reset.vue';
import BackIcon from '@/components/icons/Back.vue';
import ShareIcon from '@/components/icons/Share.vue';
import ChatIcon from '@/components/icons/Chat.vue';

const props = defineProps({
	icon: {
		type: String,
		required: true
	}
});
</script>
