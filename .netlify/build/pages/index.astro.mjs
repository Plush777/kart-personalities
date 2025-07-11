import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_QP9tuB3E.mjs';
import 'kleur/colors';
import { useSSRContext, ref, onMounted, mergeProps, withCtx, createTextVNode, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, B as Button, c as clearQuizCompleted, s as setUserName, a as CharacterProfile, b as CharacterProfileWrapper, i as introCharacterList, $ as $$HtmlLayout, M as MainLayout, F as Footer } from '../chunks/MainLayout_CYLLjD7H.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main$3 = {
  __name: 'ViewCount',
  setup(__props, { expose: __expose }) {
  __expose();

const animatedCount = ref(0);
const targetCount = ref(0);

function animateCount() {
	const duration = 500;
	const steps = 60; // 60프레임으로 나누기
	const increment = targetCount.value / steps;
	const stepDuration = duration / steps;

	let currentStep = 0;

	const timer = setInterval(() => {
		currentStep++;
		animatedCount.value = Math.min(Math.floor(increment * currentStep), targetCount.value);

		if (currentStep >= steps) {
			animatedCount.value = targetCount.value;
			clearInterval(timer);
		}
	}, stepDuration);
}

/* 
	로컬에서 테스트한 수치가 프로덕션에 그대로 반영되면 안되기 때문에 환경에 따라 다른 slug 사용

	localhost 또는 127.0.0.1은 개발 환경이므로 _home_dev 사용
	그 외는 _home (실제 배포 URL) 사용
*/

onMounted(() => {
	// views 데이터 호출
	async function fetchViewCount() {
		try {
			let slug = window.location.pathname;
			if (slug === '/') {
				const isDev =
					window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
				slug = isDev ? '_home_dev' : '_home';
			}
			slug = encodeURIComponent(slug);

			const response = await fetch(`/api/views/${slug}`);
			const data = await response.json();

			targetCount.value = data.count;
			animateCount();
		} catch (err) {
			console.error('조회수 불러오기 실패:', err);
		}
	}

	fetchViewCount();
});

const __returned__ = { animatedCount, targetCount, animateCount, ref, onMounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "font-bold mt-8 h-6 text-center text-base text-gray-800 max-md:text-sm max-md:h-5" }, _attrs))
  }><span class="flex items-center">총 <em class="min-w-[10px] block ml-[5px]" id="view-count">${
    ssrInterpolate($setup.animatedCount)
  }</em>명이 참여했어요</span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/viewCount/ViewCount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const ViewCount = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const _sfc_main$2 = {
  __name: 'TextField',
  props: {
	id: {
		type: String
	},
	heightType: {
		type: String,
		default: 'md'
	},
	styleType: {
		type: String,
		default: 'outline-white'
	},
	formType: {
		type: String,
		default: 'text'
	},
	placeholder: {
		type: String
	},
	modelValue: {
		type: String,
		default: ''
	},
	maxLength: {
		type: Number
	},
	width: {
		type: String
	},
	align: {
		type: String,
		default: 'center'
	}
},
  emits: ['update:modelValue'],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;



function getStyleType() {
	if (props.styleType === 'outline-white') {
		return 'border border-solid border-gray-300 rounded-xl p-[0_18px] text-base placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 max-md:text-sm max-md:p-[0_12px]';
	}
}

function getHeight() {
	if (props.heightType === 'md') {
		return 'h-12 max-md:h-10';
	}

	return 'h-10';
}

function getAlign() {
	if (props.align === 'center') {
		return 'text-center';
	}

	if (props.align === 'right') {
		return 'text-right';
	}

	if (props.align === 'left') {
		return 'text-left';
	}

	return 'text-center';
}

const __returned__ = { props, getStyleType, getHeight, getAlign };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    class: `${$setup.getStyleType()} ${$setup.getHeight()} ${$setup.getAlign()} ${$props.width} font-[Pretendard_Variable] 
		duration-300 ease-in-out focus:outline-none bg-white`,
    type: $props.formType,
    placeholder: $props.placeholder,
    value: $props.modelValue,
    maxlength: $props.maxLength
  }, _attrs))}>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/form/TextField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const TextField = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const textFieldStyle = 'min-w-[230px] max-w-[230px]';


const _sfc_main$1 = {
  __name: 'StartForm',
  setup(__props, { expose: __expose }) {
  __expose();

const userName = ref('');
async function handleStartTest() {
	const name = userName.value.trim();

	if (!name) {
		alert('먼저 이름을 입력해주세요');
		return;
	}

	// 조회수 증가 (환경에 따라 다른 slug 사용)
	try {
		const isDev =
			window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
		const slug = isDev ? '_home_dev' : '_home';
		await fetch(`/api/views/${slug}`, { method: 'POST' });
	} catch (err) {
		console.error('조회수 증가 실패:', err);
	}

	// 새로운 테스트 시작 시 완료 상태 초기화
	clearQuizCompleted();

	setUserName(name);
	window.location.href = '/question';
}

const __returned__ = { userName, textFieldStyle, handleStartTest, ref, get setUserName() { return setUserName }, get clearQuizCompleted() { return clearQuizCompleted }, TextField, Button };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-6 w-full max-w-[300px] max-md:gap-y-4" }, _attrs))}><div class="flex flex-col gap-y-1 mx-auto">`);
  _push(ssrRenderComponent($setup["TextField"], {
    id: "nameInput",
    width: $setup.textFieldStyle,
    maxLength: 10,
    align: "center",
    placeholder: "이름을 입력해주세요.",
    modelValue: $setup.userName,
    "onUpdate:modelValue": $event => (($setup.userName) = $event)
  }, null, _parent));
  _push(`<p class="text-xs text-center text-gray-500">*이름은 최대 10글자까지만 설정 가능해요.</p></div>`);
  _push(ssrRenderComponent($setup["Button"], {
    class: "start-button max-md:h-10",
    styleType: "fill-blue1-md",
    onClick: $setup.handleStartTest
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` 테스트 시작하기 `);
      } else {
        return [
          createTextVNode(" 테스트 시작하기 ")
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/main/StartForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const StartForm = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'CharacterIntro',
  setup(__props, { expose: __expose }) {
  __expose();

const characters = introCharacterList;

const currentIndex = ref(0);
let intervalId = null;

function startAnimation() {
	intervalId = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % characters.length;
	}, 2000); // 2초마다 다음 캐릭터로 변경
}

onMounted(() => {
	startAnimation();
});

onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId);
	}
});

const __returned__ = { characters, currentIndex, get intervalId() { return intervalId }, set intervalId(v) { intervalId = v; }, startAnimation, ref, onMounted, onUnmounted, get introCharacterList() { return introCharacterList }, CharacterProfileWrapper, CharacterProfile };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["CharacterProfile"], mergeProps({
    type: "intro",
    characterData: $setup.characters,
    currentIndex: $setup.currentIndex
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/animation/CharacterIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const CharacterIntro = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const titleStyle = "text-5xl text-blue-300 text-center leading-[1.3] font-[Recipekorea] drop-shadow-[2px_2px_0px_rgb(22,135,245)] break-keep";
  const mobileTitleStyle = "max-md:text-4xl [&&]:max-[375px]:text-[28px]";
  const descriptionStyle = "text-2xl text-center leading-[1.2] mt-4 break-keep";
  const mobileDescriptionStyle = "max-md:text-xl [&&]:max-[375px]:text-lg";
  return renderTemplate`${renderComponent($$result, "HtmlLayout", $$HtmlLayout, { "bodyClassName": "bg-sky-50" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainLayout", MainLayout, { "client:load": true, "isBackground": true, "client:component-hydration": "load", "client:component-path": "@/layouts/MainLayout.vue", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> <h1${addAttribute(`${titleStyle} ${mobileTitleStyle}`, "class")}>
카트라이더 캐릭터로 알아보는 <br> 성격 테스트
</h1> <p${addAttribute(`${descriptionStyle} ${mobileDescriptionStyle}`, "class")}>
나는 어떤 캐릭터와 같은 성격일까?
</p> </div> ${renderComponent($$result3, "CharacterIntro", CharacterIntro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/animation/CharacterIntro.vue", "client:component-export": "default" })} ${renderComponent($$result3, "StartForm", StartForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/main/StartForm.vue", "client:component-export": "default" })} ${renderComponent($$result3, "ViewCount", ViewCount, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/viewCount/ViewCount.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/Footer.vue", "client:component-export": "default" })} ` })}`;
}, "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/index.astro", void 0);

const $$file = "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
