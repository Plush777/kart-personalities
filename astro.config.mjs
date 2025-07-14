// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

// Vite 플러그인: 프로덕션에서 console.log 제거 (public/scripts/console.js 제외)
const removeConsolePlugin = () => {
	return {
		name: 'remove-console',
		transform(code, id) {
			// 프로덕션 환경에서만 적용
			if (process.env.NODE_ENV === 'production') {
				// public/scripts/console.js 파일은 제외 (정확한 경로 매칭)
				const isConsoleJsFile =
					id.includes('public/scripts/console.js') ||
					id.includes('/scripts/console.js') ||
					id.includes('console.js') ||
					id.endsWith('console.js') ||
					// KARTRIDER will be forever!!! 메시지가 포함된 파일은 제외
					code.indexOf('KARTRIDER will be forever') !== -1;

				if (isConsoleJsFile) {
					return code; // 이 파일은 그대로 유지
				}

				// 나머지 파일들에서 console.log, console.warn, console.info, console.debug 제거
				// 더 안전한 정규식 사용
				let modifiedCode = code;
				modifiedCode = modifiedCode.replace(/console\.log\s*\([^)]*\);?/g, '');
				modifiedCode = modifiedCode.replace(/console\.warn\s*\([^)]*\);?/g, '');
				modifiedCode = modifiedCode.replace(/console\.info\s*\([^)]*\);?/g, '');
				modifiedCode = modifiedCode.replace(/console\.debug\s*\([^)]*\);?/g, '');

				return modifiedCode;
			}
			return code;
		}
	};
};

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss(), removeConsolePlugin()]
	},

	devToolbar: {
		enabled: false
	},

	integrations: [vue()],

	output: 'server',
	adapter: netlify()
});
