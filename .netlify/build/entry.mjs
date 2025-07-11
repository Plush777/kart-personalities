import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CmeMSkVX.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/shorten/_id_.astro.mjs');
const _page2 = () => import('./pages/api/shorten.astro.mjs');
const _page3 = () => import('./pages/api/views/_slug_.astro.mjs');
const _page4 = () => import('./pages/question.astro.mjs');
const _page5 = () => import('./pages/result.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/shorten/[id].ts", _page1],
    ["src/pages/api/shorten.ts", _page2],
    ["src/pages/api/views/[slug].ts", _page3],
    ["src/pages/question/index.astro", _page4],
    ["src/pages/result/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f7cd60a-1b09-4f42-ad7b-9a67c223b93f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
