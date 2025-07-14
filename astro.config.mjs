// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		esbuild: {
			drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
		}
	},

	devToolbar: {
		enabled: false
	},

	integrations: [vue()],

	output: 'server',
	adapter: netlify()
});
