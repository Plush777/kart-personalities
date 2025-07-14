// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

// 환경 변수 기반 로깅 제어 (Vite 플러그인 대신 사용)
// 프로덕션에서는 VITE_ENABLE_LOGGING=false로 설정하여 로깅 비활성화

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},

	devToolbar: {
		enabled: false
	},

	integrations: [vue()],

	output: 'server',
	adapter: netlify()
});
