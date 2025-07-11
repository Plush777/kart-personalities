import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_QP9tuB3E.mjs';
import 'kleur/colors';
import { $ as $$HtmlLayout, M as MainLayout, C as ContentsInnerLayout, q as questions, F as Footer } from '../chunks/MainLayout_CYLLjD7H.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const initialAnswers = [];
  return renderTemplate`${renderComponent($$result, "HtmlLayout", $$HtmlLayout, { "bodyClassName": "bg-sky-50" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainLayout", MainLayout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/MainLayout.vue", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentsInnerLayout", ContentsInnerLayout, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Question", null, { "client:only": "vue", "questions": questions, "initialAnswers": initialAnswers, "client:component-hydration": "only", "client:component-path": "@/components/question/Question.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result3, "Footer", Footer, { "type": "static", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/Footer.vue", "client:component-export": "default" })} ` })} ` })}`;
}, "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/question/index.astro", void 0);

const $$file = "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/question/index.astro";
const $$url = "/question";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
