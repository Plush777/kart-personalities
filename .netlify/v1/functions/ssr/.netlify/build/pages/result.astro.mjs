import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_QP9tuB3E.mjs';
import 'kleur/colors';
import { $ as $$HtmlLayout, M as MainLayout } from '../chunks/MainLayout_CYLLjD7H.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HtmlLayout", $$HtmlLayout, { "bodyClassName": "bg-sky-50" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainLayout", MainLayout, { "client:load": true, "hscreen": false, "isMobilePadding": false, "client:component-hydration": "load", "client:component-path": "@/layouts/MainLayout.vue", "client:component-export": "default" })} ` })}`;
}, "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/result/index.astro", void 0);

const $$file = "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/result/index.astro";
const $$url = "/result";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
