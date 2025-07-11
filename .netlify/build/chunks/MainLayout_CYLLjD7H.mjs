import { e as createComponent, f as createAstro, r as renderTemplate, l as renderSlot, h as addAttribute, n as renderHead } from './astro/server_QP9tuB3E.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { useSSRContext, ref, onMounted, mergeProps, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, watch, onUnmounted, computed, provide } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderTeleport } from 'vue/server-renderer';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$HtmlLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HtmlLayout;
  const { bodyClassName = "" } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<!--
  _  __             _   
 | |/ /            | |  
 | ' /  __ _  _ __ | |_ 
 |  <  / _\` || '__|| __|
 | . \\| (_| || |   | |_ 
 |_|\\_\\\\__,_||_|    \\__|

--><html lang="ko" data-astro-cid-c752q66h> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"`, '><meta property="og:description" content="\uB098\uB294 \uC5B4\uB5A4 \uCE90\uB9AD\uD130\uC758 \uC131\uACA9\uC77C\uAE4C?"><meta property="og:title" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta property="og:image" content="/images/og/og.png"><meta property="og:type" content="website"><meta property="og:site_name" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta property="og:locale" content="ko_KR"><meta property="og:image:width" content="1920"><meta property="og:image:height" content="1080"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta name="twitter:description" content="\uB098\uB294 \uC5B4\uB5A4 \uCE90\uB9AD\uD130\uC758 \uC131\uACA9\uC77C\uAE4C?"><meta name="twitter:image" content="/images/og/og.png"><meta name="keywords" content="\uCE74\uD2B8\uB77C\uC774\uB354, \uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130, \uCE74\uD2B8\uB77C\uC774\uB354 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><link rel="shortcut icon" id="favi" href="/favicon/32x32/img-dao-face.png"><script src="/scripts/console.js"><\/script><script src="/scripts/favi.js"><\/script><link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"><title>\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8</title>', "</head> <body", ' data-astro-cid-c752q66h> <div id="app" class="select-none" data-astro-cid-c752q66h> ', ' </div> <div id="popup-root" data-astro-cid-c752q66h></div> </body></html>'], [`<!--
  _  __             _   
 | |/ /            | |  
 | ' /  __ _  _ __ | |_ 
 |  <  / _\\\` || '__|| __|
 | . \\\\| (_| || |   | |_ 
 |_|\\\\_\\\\\\\\__,_||_|    \\\\__|

--><html lang="ko" data-astro-cid-c752q66h> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"`, '><meta property="og:description" content="\uB098\uB294 \uC5B4\uB5A4 \uCE90\uB9AD\uD130\uC758 \uC131\uACA9\uC77C\uAE4C?"><meta property="og:title" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta property="og:image" content="/images/og/og.png"><meta property="og:type" content="website"><meta property="og:site_name" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta property="og:locale" content="ko_KR"><meta property="og:image:width" content="1920"><meta property="og:image:height" content="1080"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><meta name="twitter:description" content="\uB098\uB294 \uC5B4\uB5A4 \uCE90\uB9AD\uD130\uC758 \uC131\uACA9\uC77C\uAE4C?"><meta name="twitter:image" content="/images/og/og.png"><meta name="keywords" content="\uCE74\uD2B8\uB77C\uC774\uB354, \uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130, \uCE74\uD2B8\uB77C\uC774\uB354 \uC131\uACA9 \uD14C\uC2A4\uD2B8"><link rel="shortcut icon" id="favi" href="/favicon/32x32/img-dao-face.png"><script src="/scripts/console.js"><\/script><script src="/scripts/favi.js"><\/script><link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"><title>\uCE74\uD2B8\uB77C\uC774\uB354 \uCE90\uB9AD\uD130\uB85C \uC54C\uC544\uBCF4\uB294 \uC131\uACA9 \uD14C\uC2A4\uD2B8</title>', "</head> <body", ' data-astro-cid-c752q66h> <div id="app" class="select-none" data-astro-cid-c752q66h> ', ' </div> <div id="popup-root" data-astro-cid-c752q66h></div> </body></html>'])), addAttribute(Astro2.generator, "content"), renderHead(), addAttribute(bodyClassName, "class"), renderSlot($$result, $$slots["default"]));
}, "C:/myProjects/kart-character-test/kart-character-personality-test-app/src/layouts/HtmlLayout.astro", void 0);

const characters = {
	다오: {
		title: '다오',
		image: '/images/characters/img-dao.webp',
		popupImage: '/images/profile/img-dao-profile.webp',
		info: {
			summary:
				'원칙과 정의를 중시하는 "정석파". 무슨 일이든 바르게 해내야 직성이 풀리는 사람입니다.',
			meritArray: [
				'책임감이 강하고 신뢰할 수 있음',
				'위기 상황에서도 중심을 잡음',
				'원칙과 기준이 분명함'
			],
			shortcomingArray: [
				'융통성이 부족할 수 있음',
				'감정보다 논리를 우선시함',
				'고집이 있어 끝까지 자기 방식을 고수함'
			],
			commentArray: [
				'너랑 같이 일하면 믿음은 간다.',
				'너무 딱딱하게 굴지 마.',
				'말보단 행동으로 보여주는 스타일이네.'
			],
			well: ['케피', '모스'],
			bad: ['배찌', '크리스'],
			originalExplanation:
				'다오는 정통파 드라이버의 대표주자입니다. 정의로운 성격으로 인해 레이싱 중 다른 라이더를 공격하거나, 비정상적인 방법으로 승리를 쟁취하는 것을 꺼려합니다. 어려서부터 아버지의 일을 돕기 위해 카트를 종종 몰아 본 경험이 풍부한 라이더입니다. 좁고 구불구불한 산길을 많이 다녀 봤기에 드리프트를 자유자재로 구사합니다.'
		}
	},
	배찌: {
		title: '배찌',
		popupImage: '/images/profile/img-bazzi-profile.webp',
		info: {
			summary:
				'낙천적이고 걱정이 없는 자유로운 영혼. 게으르고 둔해 보이지만, 누구보다 타고난 재능을 지닌 ‘천재 게으름뱅이’입니다.',
			meritArray: [
				'근심 걱정 없는 긍정적 태도',
				'뛰어난 감각과 선천적 실력',
				'한번 시작한 일은 끝까지 해내는 성실함'
			],
			shortcomingArray: [
				'계획 없이 즉흥적으로 행동함',
				'타인에게 무심하거나 둔감한 면이 있음',
				'완벽해야된다는 강박때문에 최후의 순간까지 일을 미루는 경향이 있음'
			],
			commentArray: [
				'쟤는 연습을 안 하는데도 왜 잘하지?',
				'진짜 아무 생각 없는 듯한데, 갑자기 천재 같을 때 있음.',
				'귀찮아서 안 움직이는 거지, 못 하는 게 아니야.'
			],
			well: ['에리니', '크리스'],
			bad: ['다오', '케피'],
			originalExplanation:
				'배찌는 낙천적이고 무신경한 성격으로 인해 스피드를 두려워하지 않는 타고난 라이더입니다. 다오의 운전을 곁눈질로 보고 독학으로 카트를 배운 까닭에 가끔 멋대로의 운전을 하지만, 발전가능성이 매우 높은 라이더입니다.'
		},
		image: '/images/characters/img-bazzi.webp'
	},
	디지니: {
		title: '디지니',
		popupImage: '/images/profile/img-diz-profile.webp',
		info: {
			summary:
				'조용하지만 깊은 내면을 가진 따뜻한 감성형. 혼자서도 잘하지만 누군가 옆에 있으면 더 힘이 나는 타입입니다.',
			meritArray: ['공감 능력이 높고 섬세함', '관계 중심적으로 배려 깊음', '진심을 담아 행동함'],
			shortcomingArray: [
				'감정 기복이 있음',
				'생각이 많아서 결정이 느릴 수 있음',
				'쉽게 상처받을 수 있음'
			],
			commentArray: [
				'겉보다 속이 더 단단한 사람.',
				'생각보다 열정적이네?',
				'자신보다 남을 더 우선적으로 배려하는 스타일.'
			],
			well: ['우니', '티이라'],
			bad: ['크리스', '모스'],
			originalExplanation:
				'디지니는 수줍어하는 성격으로 차를 무서워했으나 다오가 카트운전 면허를 딴 이후 자신도 많은 노력을 하여 상당한 수준에 이르게 된 라이더입니다. 남자친구인 다오와 함께 악당 로두마니를 찾아 나서는 것이 지금 당장의 목표입니다. 곱상한 외모와는 달리 의외로 과감한 드라이빙을 할 때가 있습니다.'
		},
		image: '/images/characters/img-diz.webp'
	},
	우니: {
		title: '우니',
		popupImage: '/images/profile/img-uni-profile.webp',
		info: {
			summary: '밝고 순수한 꿈꾸는 이상주의자. 겉은 귀엽지만 내면은 부지런한 성장러입니다.',
			meritArray: ['밝은 에너지를 보여줌', '노력파, 꾸준히 성장하려는 태도', '긍정적이고 친절함'],
			shortcomingArray: [
				'지나치게 순수해서 상처받기 쉬움',
				'현실 감각 부족',
				'감정 조절이 미숙할 수 있음'
			],
			commentArray: [
				'보기만 해도 기분 좋아져.',
				'뭔가 보호해주고 싶은 느낌.',
				'쟨 언젠가 진짜 크게 될 애야.'
			],
			well: ['디지니', '에리니'],
			bad: ['모스', '에띠'],
			originalExplanation:
				'우니는 어린 나이에도 불구하고 놀라운 운전실력을 보여주는 타고난 카트라이더입니다. 손발이 짧아 모스에게 특별히 부탁한 개조카트를 빌려서 레이스에 참가합니다. 레이스로 루찌를 모아 장차 자신의 체형에 맞는 카트를 특별주문해서 타는 것이 목표입니다.'
		},
		image: '/images/characters/img-uni.webp'
	},
	마리드: {
		title: '마리드',
		popupImage: '/images/profile/img-marid-profile.webp',
		info: {
			summary:
				'사랑과 감정에 솔직한 낭만주의자. 감성에 따라 움직이고, 그 속에서 열정을 불태우는 스타일입니다.',
			meritArray: ['따뜻한 공감과 배려', '감정 표현이 자연스럽고 풍부함', '로맨틱하고 창의적임'],
			shortcomingArray: [
				'감정에 휘둘릴 수 있음',
				'현실 감각이 부족할 수 있음',
				'질투심, 감정기복 존재'
			],
			commentArray: [
				'너무 감정적이야.',
				'진심이 느껴져서 좋다.',
				'마음이 너무 앞서서 다칠까 걱정돼.'
			],
			well: ['디지니', '티이라'],
			bad: ['모스', '에띠'],
			originalExplanation:
				'마리드는 로맨틱 라이더입니다. 운전을 귀찮아했었음에도 불구하고 자신이 짝사랑하는 다오의 마음을 디지니에게서 뺏기 위해 멋진 카트 드라이빙을 항상 연습합니다. 레이싱의 승패보다는 사랑의 승패가 중요하다고 생각하는 마리드에게 레이스는 탈락하는 불명예를 얻지 않는 이상 큰 의미가 없다고 생각합니다.'
		},
		image: '/images/characters/img-marid.webp'
	},
	티이라: {
		title: '티이라',
		popupImage: '/images/profile/img-tiera-profile.webp',
		info: {
			summary:
				'조용하고 신비로운 분위기를 지닌 내향형. 말은 적지만 깊은 감정을 지닌 조용한 도우미 타입입니다.',
			meritArray: [
				'공감과 배려의 깊이',
				'침착하고 감정에 휘둘리지 않음',
				'비밀을 잘 지키고 신중함'
			],
			shortcomingArray: [
				'표현 부족으로 오해 살 수 있음',
				'마음을 열기까지 시간이 오래 걸림',
				'혼자 있고 싶어하는 시간 많음'
			],
			commentArray: [
				'뭔가 비밀이 많은 것 같아.',
				'속을 알 수 없어서 더 궁금해.',
				'말은 없지만 진짜 따뜻한 사람.'
			],
			well: ['디지니', '마리드'],
			bad: ['에리니', '크리스'],
			originalExplanation:
				'동화나라 프레티온에서 만난 귀여운 여자마법사입니다. 어린 나이에도 불구하고 훌륭한 마법사가 되기 위해서 노력하는 착한 소녀아이로 우수에 가득찬 눈망울과 수줍은 표정을 지니고 있습니다. 언제나 말이 없고 조용한 성격이며, 무엇인가 비밀스러운 사연이 있는 것 같습니다. 하지만 티이라에게 무슨 일이 있었는지는 아무도 알 수 없습니다. 내성적인 성격에도 다오와 친구들의 모험을 도와주는 착한 마음씨의 티이라. 과연 티이라에게는 어떠한 비밀이 숨겨져 있을까요?'
		},
		image: '/images/characters/img-tiera.webp'
	},
	케피: {
		title: '케피',
		popupImage: '/images/profile/img-keffy-profile.webp',
		info: {
			summary:
				'늘 조용히, 하지만 꾸준히 자신의 길을 가는 성실한 완성형 타입. 남들보다 속도는 느릴 수 있지만, 포기하지 않고 끝까지 간다.',
			meritArray: [
				'실수를 최소화하려 노력하는 꼼꼼함',
				'감정에 휘둘리지 않는 꾸준함',
				'팀 내에서 조용한 실력자 역할'
			],
			shortcomingArray: [
				'낯을 가리거나 처음엔 표현이 적어 오해받기 쉬움',
				'즉흥적인 상황에선 다소 긴장하거나 유연하지 못할 수 있음'
			],
			commentArray: [
				'처음엔 잘 모르겠는데 보면 볼수록 믿음직한 사람.',
				'존재감이 엄청 있지는 않지만, 꼭 필요한 사람.',
				'이런 사람이 진짜 꾸준히 자기 일 잘 하는 스타일이야.'
			],
			well: ['다오', '에띠'],
			bad: ['에리니', '배찌'],
			originalExplanation:
				'케피는 노력파 라이더입니다. 속도를 무서워해서 높은 속력에서의 운전을 힘들어하지만 감각적인 드라이빙 아이템 사용으로 그 단점을 커버하는 꾸준한 드라이빙이 케피의 특성입니다.'
		},
		image: '/images/characters/img-keffy.webp'
	},
	에띠: {
		title: '에띠',
		popupImage: '/images/profile/img-ethen-profile.webp',
		info: {
			summary:
				'논리와 분석 중심의 기술형 인물. 감정보다 이성과 구조를 우선시하며, 문제 해결 능력이 탁월합니다.',
			meritArray: [
				'분석력, 논리력 뛰어남',
				'기술적인 이해도 높음',
				'집중력이 강하고 자기 주도적임'
			],
			shortcomingArray: [
				'감정 공감이 약함',
				'말이 부족해 오해를 살 수 있음',
				'지나치게 이성적일 수 있음'
			],
			commentArray: [
				'뭐 생각하는지 모르겠어.',
				'말 없이 혼자 잘 해.',
				'설명은 어렵지만 믿음은 간다.'
			],
			well: ['에띠', '케피'],
			bad: ['마리드', '디지니'],
			originalExplanation:
				'에띠는 카트 운전보다는 차량을 설계하고, 성능을 높이기 위한 연구에서 더 큰 기쁨을 느끼는 테크니션입니다. 자신이 설계한 차량을 직접 테스트해 보기 위해 운전을 배운 타고난 엔지니어라고 할 수 있죠. 에띠는 카트의 메커니즘에 대해 깊은 이해가 장점입니다.'
		},
		image: '/images/characters/img-ethen.webp'
	},
	모스: {
		title: '모스',
		popupImage: '/images/profile/img-mos-profile.webp',
		info: {
			summary:
				'차분하고 실용적인 현실주의자. 기술, 기계, 분석에 강하고 꾸준히 최선을 다하는 타입입니다.',
			meritArray: [
				'감정 기복이 적고 신뢰감 있음',
				'자기 분야에 대한 높은 이해도',
				'꾸준함, 실용성'
			],
			shortcomingArray: [
				'표현이 부족하고 다소 무뚝뚝함',
				'감성적인 이야기에는 반응이 적음',
				'즉흥적 변화에 약함'
			],
			commentArray: [
				'말은 없는데 든든해.',
				'차보다 사람이 더 좋아지면 어떨래?',
				'조용히 다 해놓는 스타일.'
			],
			well: ['에띠', '케피'],
			bad: ['마리드', '에리니'],
			originalExplanation:
				'모스는 버블힐 최고의 카 매니아 입니다. 차에 대한 애정이 남다르며, 스스로 차량을 정비하고 개조하는 능력까지 갖춘 멋진 라이더이자 엔지니어입니다. 모스는 레이스에서 항상 1위를 차지하는 것보다는 꾸준히 순위권 안에 들어오는 것이 진정한 실력이라고 생각합니다..'
		},
		image: '/images/characters/img-mos.webp'
	},
	크리스: {
		title: '크리스',
		popupImage: '/images/profile/img-kris-profile.webp',
		info: {
			summary:
				'충동적이고 자유로운 천재. 감정도 표현도 거침없으며, 무엇이든 흥미롭고 도전적이면 뛰어드는 타입입니다.',
			meritArray: ['빠른 사고와 천재성', '즉흥적 행동력', '자유로운 감정 표현'],
			shortcomingArray: ['감정기복, 충동성', '팀워크보다 개인플레이', '공감 능력 부족'],
			commentArray: [
				'어디로 튈지 모르는 애.',
				'똑똑하긴 한데 사람 피곤하게 해.',
				'매번 사고 쳐도 미워할 수가 없어.'
			],
			well: ['배찌', '에리니'],
			bad: ['다오', '티이라'],
			originalExplanation:
				'블랙 컴퍼니의 새로운 멤버 크리스입니다. 재미있어 보이거나 하고 싶은 일이 생기면 무조건 하고 보는 성격이며, 직설적이고 다혈질이라 자주 화를 냅니다. 하지만 머리는 무척 좋아 천재적인 해킹 실력을 자랑합니다. 단순히 재미있어 보인다는 이유로 블랙 컴퍼니에 합류해 블랙 컴퍼니의 세계 정복을 돕고 있습니다.'
		},
		image: '/images/characters/img-kris.webp'
	},
	에리니: {
		title: '에리니',
		popupImage: '/images/profile/img-erini-profile.webp',
		info: {
			summary:
				'장난기 많고 생기발랄한 활동가 타입. 가벼운 에너지를 주지만, 깊은 애정도 가지고 있습니다.',
			meritArray: ['긍정적이고 적응력 높음', '분위기를 환기시키는 역할', '새로운 경험에 열려 있음'],
			shortcomingArray: ['산만할 수 있음', '집중력이 짧고 쉽게 싫증 냄', '진지한 상황에 약함'],
			commentArray: [
				'걔 없으면 분위기 싸해져.',
				'정신없긴 한데, 재밌다.',
				'마냥 애 같지만 은근히 감정 풍부해.'
			],
			well: ['우니', '배찌'],
			bad: ['케피', '모스'],
			originalExplanation:
				'에리니는 노르테유 행성에 살고 있는 장난꾸러기 여자아이입니다. 단짝친구인 타키가 사라져 무료한 나날을 보내고 있던 어느날 리바스키 박사가 타키와 함께 고향으로 돌아왔다는 소식을 듣게 되고, 카트레이스라는 새로운 즐길거리를 접하게 됩니다. 활동적인 성격으로 인해 새로운 탈것인 카트에도 금방 적응했으며 카트레이스의 매력에 깊이 빠져들었습니다. 홈그라운드의 이점을 살린 탄탄한 플레이가 강점입니다.'
		},
		image: '/images/characters/img-erini.webp'
	}
};

const introCharacterList = [
	{ name: 'dao', image: '/images/characters/img-dao.webp' },
	{ name: 'bazzi', image: '/images/characters/img-bazzi.webp' },
	{ name: 'diz', image: '/images/characters/img-diz.webp' },
	{ name: 'uni', image: '/images/characters/img-uni.webp' },
	{ name: 'marid', image: '/images/characters/img-marid.webp' },
	{ name: 'tiera', image: '/images/characters/img-tiera.webp' },
	{ name: 'keffy', image: '/images/characters/img-keffy.webp' },
	{ name: 'erini', image: '/images/characters/img-erini.webp' },
	{ name: 'kris', image: '/images/characters/img-kris.webp' },
	{ name: 'ethen', image: '/images/characters/img-ethen.webp' },
	{ name: 'mos', image: '/images/characters/img-mos.webp' }
];

const questions = [
	{
		question: '사람 많은 모임에 초대받았다! 그랬을 때 당신은?',
		options: [
			{ text: '중심에 서서 분위기를 이끈다', types: ['다오', '배찌'] },
			{ text: '조용히 사람들과 어울린다', types: ['디지니', '우니'] },
			{ text: '혼자 있는 게 편해서 안 간다', types: ['마리드', '티이라'] },
			{ text: '분위기를 지켜보다가 맞으면 끼어든다', types: ['케피', '에띠'] }
		]
	},
	{
		question: '중요한 결정을 내려야 할 때 당신은?',
		options: [
			{ text: '빠르게 결정을 내리고 행동한다', types: ['다오', '배찌'] },
			{ text: '충분히 생각하고 분석 후 결정한다', types: ['에띠', '모스'] },
			{ text: '주변 사람의 의견을 듣고 참고한다', types: ['우니', '디지니'] },
			{ text: '감정이나 직감을 따르는 편이다', types: ['마리드', '크리스'] }
		]
	},
	{
		question: '예상치 못한 일이 생기면?',
		options: [
			{ text: '즉시 대응하며 해결한다', types: ['다오', '크리스'] },
			{ text: '우선 상황을 분석하고 정리한다', types: ['에띠', '모스'] },
			{ text: '감정이 흔들리지만 차분히 기다린다', types: ['마리드', '티이라'] },
			{ text: '누군가에게 도움을 요청한다', types: ['디지니', '우니'] }
		]
	},
	{
		question: '친구와의 약속이 취소되면 당신은?',
		options: [
			{ text: '아쉽지만 다른 약속을 만든다', types: ['배찌', '우니'] },
			{ text: '나이스! 혼자만의 시간을 즐긴다', types: ['티이라', '마리드'] },
			{ text: '그 시간에 하고 싶은 걸 미리 한다', types: ['모스', '케피'] },
			{ text: '괜히 섭섭해진다', types: ['디지니', '크리스'] }
		]
	},
	{
		question: '나는 평소에 일을',
		options: [
			{ text: '즉흥적으로 해치운다', types: ['배찌', '크리스'] },
			{ text: '계획표를 세워 실천한다', types: ['에띠', '케피'] },
			{ text: '주변과 협업해서 해결한다', types: ['다오', '우니'] },
			{ text: '천천히, 꼼꼼하게 한다', types: ['모스', '디지니'] }
		]
	},
	{
		question: '누군가 실수했을 때 당신은?',
		options: [
			{ text: '웃으며 넘긴다', types: ['배찌', '우니'] },
			{ text: '부드럽게 알려준다', types: ['디지니', '마리드'] },
			{ text: '원인을 같이 분석한다', types: ['에띠', '모스'] },
			{ text: '바로 지적하고 고친다', types: ['다오', '크리스'] }
		]
	},
	{
		question: '나는 정리정돈을',
		options: [
			{ text: '매우 깔끔하고 계획적으로 한다', types: ['케피', '에띠'] },
			{ text: '대충 하지만 내가 이해할 수 있다면 OK', types: ['배찌', '크리스'] },
			{ text: '필요한 순간에만 정리한다', types: ['모스', '다오'] },
			{ text: '자주하지만 감정 상태에 따라 편차가 있다', types: ['디지니', '마리드'] }
		]
	},
	{
		question: '감정 표현에 대해 당신은?',
		options: [
			{ text: '기분을 바로바로 드러낸다', types: ['배찌', '크리스'] },
			{ text: '속마음을 잘 드러내지 않는다', types: ['마리드', '티이라'] },
			{ text: '솔직하되, 상대를 배려하려 한다', types: ['우니', '디지니'] },
			{ text: '상황에 맞게 조절하며 표현한다', types: ['다오', '모스'] }
		]
	},
	{
		question: '처음 만난 사람과의 대화는?',
		options: [
			{ text: '먼저 말을 걸며 친해진다', types: ['배찌', '우니'] },
			{ text: '눈치를 보며 서서히 다가간다', types: ['디지니', '에띠'] },
			{ text: '말수가 적고 조용히 관찰한다', types: ['마리드', '티이라'] },
			{ text: '친하지만 깊은 이야기는 잘 안 한다', types: ['다오', '모스'] }
		]
	},
	{
		question: '내가 생각하는 나의 강점은?',
		options: [
			{ text: '추진력과 실행력', types: ['다오', '크리스'] },
			{ text: '분석력과 계획성', types: ['에띠', '케피'] },
			{ text: '친화력과 감정 공감', types: ['우니', '디지니'] },
			{ text: '독립성과 창의성', types: ['마리드', '모스'] }
		]
	},
	{
		question: '친구와 갈등이 생기면?',
		options: [
			{ text: '먼저 화해를 시도한다', types: ['우니', '디지니'] },
			{ text: '대화를 피하고 시간이 지나길 바란다', types: ['마리드', '티이라'] },
			{ text: '단도직입적으로 말해서 해결', types: ['다오', '크리스'] },
			{ text: '감정은 감정이고, 거리두기를 둔다', types: ['모스', '케피'] }
		]
	},
	{
		question: '시간을 보내는 걸 가장 좋아하는 방식은?',
		options: [
			{ text: '친구들과 놀기', types: ['배찌', '우니'] },
			{ text: '혼자 있는 시간', types: ['마리드', '티이라'] },
			{ text: '무언가 배우거나 만들기', types: ['에띠', '케피'] },
			{ text: '몸을 움직이는 활동', types: ['모스', '크리스'] }
		]
	},
	{
		question: '당신의 생각 방식은?',
		options: [
			{ text: '감정과 직감 중심', types: ['마리드', '크리스'] },
			{ text: '논리와 분석 중심', types: ['에띠', '모스'] },
			{ text: '사람과 관계 중심', types: ['디지니', '우니'] },
			{ text: '목표와 결과 중심', types: ['다오', '케피'] }
		]
	},
	{
		question: '성공에 대한 정의는?',
		options: [
			{ text: '남을 이기는 것', types: ['다오', '배찌'] },
			{ text: '나를 성장시키는 것', types: ['케피', '에띠'] },
			{ text: '행복하고 여유롭게 사는 것', types: ['마리드', '에리니'] },
			{ text: '함께 의미 있는 경험을 만드는 것', types: ['디지니', '우니'] }
		]
	},
	{
		question: '아래 중에 가장 공감되는 말은?',
		options: [
			{ text: '일단 부딪혀 봐야 안다', types: ['배찌', '크리스'] },
			{ text: '천천히 해도 꾸준히 하면 된다', types: ['케피', '모스'] },
			{ text: '마음이 가는 대로 살고 싶다', types: ['마리드', '티이라'] },
			{ text: '계획 없이 움직이면 불안하다', types: ['에띠', '디지니'] }
		]
	}
];

// 캐릭터 정보 반환 함수
function getCharacterInfo(type) {
	return (
		characters[type] || {
			title: '알 수 없음',
			description: '캐릭터 정보를 찾을 수 없습니다.',
			image: '/images/characters/default.png'
		}
	);
}

function getUserName() {
	// SSR 환경에서는 window 객체가 없으므로 체크
	if (typeof window === 'undefined') {
		return '';
	}

	try {
		return sessionStorage.getItem('userName') || '';
	} catch (error) {
		console.error('localStorage 접근 중 오류 발생:', error);
		return '';
	}
}

function setUserName(name) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.setItem('userName', name);
	} catch (error) {
		console.error('localStorage 설정 중 오류 발생:', error);
	}
}

// 퀴즈 답변 관련 함수들
function getQuizAnswers() {
	if (typeof window === 'undefined') {
		return [];
	}

	try {
		const answers = sessionStorage.getItem('quizAnswers');
		return answers ? JSON.parse(answers) : [];
	} catch (error) {
		console.error('퀴즈 답변 가져오기 중 오류 발생:', error);
		return [];
	}
}

// 퀴즈 데이터 초기화
function clearQuizData() {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.removeItem('quizAnswers');
		sessionStorage.removeItem('currentQuestionIndex');
	} catch (error) {
		console.error('퀴즈 데이터 초기화 중 오류 발생:', error);
	}
}

function getQuizCompleted() {
	if (typeof window === 'undefined') {
		return false;
	}

	try {
		const completed = sessionStorage.getItem('quizCompleted');
		return completed === 'true';
	} catch (error) {
		console.error('퀴즈 완료 상태 가져오기 중 오류 발생:', error);
		return false;
	}
}

function clearQuizCompleted() {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.removeItem('quizCompleted');
	} catch (error) {
		console.error('퀴즈 완료 상태 초기화 중 오류 발생:', error);
	}
}

// 사용자별 결과 저장 및 불러오기 기능
function saveUserResult(username, characterInfo) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		const userResults = getUserResults();
		userResults[username] = {
			characterInfo,
			timestamp: Date.now()
		};
		sessionStorage.setItem('userResults', JSON.stringify(userResults));
	} catch (error) {
		console.error('사용자 결과 저장 중 오류 발생:', error);
	}
}

function getUserResult(username) {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		const userResults = getUserResults();
		return userResults[username] || null;
	} catch (error) {
		console.error('사용자 결과 불러오기 중 오류 발생:', error);
		return null;
	}
}

function getUserResults() {
	if (typeof window === 'undefined') {
		return {};
	}

	try {
		const results = sessionStorage.getItem('userResults');
		return results ? JSON.parse(results) : {};
	} catch (error) {
		console.error('사용자 결과 목록 불러오기 중 오류 발생:', error);
		return {};
	}
}

// URL에서 username 파라미터 가져오기
function getUsernameFromUrl() {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('username');
	} catch (error) {
		console.error('URL 파라미터 파싱 중 오류 발생:', error);
		return null;
	}
}

// URL에서 결과 데이터 가져오기 (해시 프래그먼트 사용)
function getResultFromUrl() {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		// 해시 프래그먼트에서 결과 데이터 확인
		const hash = window.location.hash.substring(1); // # 제거

		console.log('=== URL 해시 디버깅 ===');
		console.log('현재 URL:', window.location.href);
		console.log('해시 프래그먼트:', window.location.hash);
		console.log('해시 데이터:', hash ? '있음' : '없음');

		if (hash) {
			// Base64 디코딩 후 UTF-8 디코딩, JSON 파싱
			const decoded = atob(hash);
			const utf8String = decodeURIComponent(escape(decoded));
			const compressedData = JSON.parse(utf8String);

			// 압축된 데이터 복원
			const parsed = decompressResultData(compressedData);
			console.log('파싱된 결과:', parsed.title);
			return parsed;
		}

		return null;
	} catch (error) {
		console.error('URL에서 결과 데이터 파싱 중 오류 발생:', error);
		return null;
	}
}

// 순환 참조를 제거하는 함수
function removeCircularReferences(obj, seen = new WeakSet()) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (seen.has(obj)) {
		return undefined; // 순환 참조 제거
	}

	seen.add(obj);

	if (Array.isArray(obj)) {
		return obj
			.map((item) => removeCircularReferences(item, seen))
			.filter((item) => item !== undefined);
	}

	const cleanObj = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = removeCircularReferences(obj[key], seen);
			if (value !== undefined) {
				cleanObj[key] = value;
			}
		}
	}

	return cleanObj;
}

// 텍스트 압축 매핑 (자주 사용되는 텍스트)
const textCompressionMap = {
	다오: 'd',
	디즈: 'z',
	바지: 'b',
	에리니: 'e',
	에덴: 'h',
	케피: 'k',
	크리스: 'r',
	마리드: 'm',
	모스: 'o',
	티에라: 't',
	유니: 'u',
	장점: 'j',
	단점: 'n',
	'자주 듣는 말': 'c',
	'잘 맞는 캐릭터': 'w',
	'안 맞는 캐릭터': 'a'
};

// 텍스트 압축 복원 매핑
const textCompressionReverseMap = Object.fromEntries(
	Object.entries(textCompressionMap).map(([key, value]) => [value, key])
);

// 배열 텍스트 압축
function compressTextArray(array) {
	return array.map((item) => textCompressionMap[item] || item);
}

// 배열 텍스트 복원
function decompressTextArray(array) {
	return array.map((item) => textCompressionReverseMap[item] || item);
}

// 이미지 경로 단축 매핑
const imagePathMap = {
	'/images/characters/img-bazzi.webp': 'b',
	'/images/characters/img-dao.webp': 'd',
	'/images/characters/img-diz.webp': 'z',
	'/images/characters/img-erini.webp': 'e',
	'/images/characters/img-ethen.webp': 'h',
	'/images/characters/img-keffy.webp': 'k',
	'/images/characters/img-kris.webp': 'r',
	'/images/characters/img-marid.webp': 'm',
	'/images/characters/img-mos.webp': 'o',
	'/images/characters/img-tiera.webp': 't',
	'/images/characters/img-uni.webp': 'u'
};

// 이미지 경로 복원 매핑
const imagePathReverseMap = Object.fromEntries(
	Object.entries(imagePathMap).map(([key, value]) => [value, key])
);

// 결과 데이터 압축 함수
function compressResultData(characterInfo) {
	// 공유에 필요한 핵심 정보만 추출 (더 짧은 키 사용)
	return {
		t: textCompressionMap[characterInfo.title] || characterInfo.title, // 압축된 title
		i: imagePathMap[characterInfo.image] || characterInfo.image, // 압축된 이미지 경로
		s: characterInfo.info.summary, // summary
		m: compressTextArray(characterInfo.info.meritArray), // 압축된 meritArray
		d: compressTextArray(characterInfo.info.shortcomingArray), // 압축된 shortcomingArray
		c: compressTextArray(characterInfo.info.commentArray), // 압축된 commentArray
		w: compressTextArray(characterInfo.info.well), // 압축된 well
		b: compressTextArray(characterInfo.info.bad), // 압축된 bad
		o: characterInfo.info.originalExplanation // originalExplanation
	};
}

// 압축된 결과 데이터 복원 함수
function decompressResultData(compressedData) {
	return {
		title: textCompressionReverseMap[compressedData.t] || compressedData.t,
		popupImage: imagePathReverseMap[compressedData.i] || compressedData.i,
		image: imagePathReverseMap[compressedData.i] || compressedData.i,
		info: {
			summary: compressedData.s,
			meritArray: decompressTextArray(compressedData.m),
			shortcomingArray: decompressTextArray(compressedData.d),
			commentArray: decompressTextArray(compressedData.c),
			well: decompressTextArray(compressedData.w),
			bad: decompressTextArray(compressedData.b),
			originalExplanation: compressedData.o
		}
	};
}

// URL 단축 함수 (서버 API 사용)
async function shortenUrl(originalUrl) {
	if (typeof window === 'undefined') {
		return originalUrl;
	}

	try {
		const response = await fetch('/api/shorten', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ originalUrl })
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result.shortUrl;
	} catch (error) {
		console.error('URL 단축 중 오류 발생:', error);
		return originalUrl; // 실패 시 원본 URL 반환
	}
}

// 결과 데이터를 URL 파라미터로 인코딩
function encodeResultForUrl(characterInfo) {
	if (typeof window === 'undefined') {
		return '';
	}

	try {
		// 순환 참조 제거 후 압축
		const cleanObject = removeCircularReferences(characterInfo);
		const compressedData = compressResultData(cleanObject);

		// JSON을 문자열로 변환 후 UTF-8 인코딩으로 Base64 변환
		const jsonString = JSON.stringify(compressedData);
		const utf8String = unescape(encodeURIComponent(jsonString));
		return btoa(utf8String);
	} catch (error) {
		console.error('결과 데이터 인코딩 중 오류 발생:', error);
		return '';
	}
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$l = {
  __name: 'Loading',
  setup(__props, { expose: __expose }) {
  __expose();

const userName = ref('');

onMounted(() => {
	// URL에서 username 파라미터 확인
	const urlUsername = getUsernameFromUrl();
	const currentUsername = getUserName();

	// URL 파라미터의 username을 우선적으로 사용
	userName.value = urlUsername || currentUsername || 'undefined';
});

const __returned__ = { userName, ref, onMounted, get getUserName() { return getUserName }, get getUsernameFromUrl() { return getUsernameFromUrl } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-4 w-full" }, _attrs))
  } data-v-00ca5242><div class="flex justify-center items-center" data-v-00ca5242><img src="/images/face/img-dao-face.webp" alt="" class="loading-image dao-image size-[130px] max-md:size-[25%]" data-v-00ca5242><img src="/images/face/img-diz-face.webp" alt="" class="loading-image diz-image size-[120px] max-md:size-[25%]" data-v-00ca5242><img src="/images/face/img-bazzi-face.webp" alt="" class="loading-image bazzi-image size-[130px] max-md:size-[25%]" data-v-00ca5242></div><p class="text-xl font-bold text-gray-600 max-md:text-lg max-[375px]:text-base" data-v-00ca5242>${
    ssrInterpolate($setup.userName)
  }님의 결과를 분석하고 있어요. </p></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/loading/Loading.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : undefined
};
const Loading = /*#__PURE__*/_export_sfc(_sfc_main$l, [['ssrRender',_sfc_ssrRender$l],['__scopeId',"data-v-00ca5242"]]);

const _sfc_main$k = {
  __name: 'Reset',
  props: {
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '18'
	},
	height: {
		type: String,
		default: '18'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: $setup.props.width,
    height: $setup.props.height,
    viewBox: "0 0 24 24",
    class: $setup.props.svgClassName
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-width="2" d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/Reset.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : undefined
};
const ResetIcon = /*#__PURE__*/_export_sfc(_sfc_main$k, [['ssrRender',_sfc_ssrRender$k]]);

const _sfc_main$j = {
  __name: 'Back',
  props: {
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '18'
	},
	height: {
		type: String,
		default: '18'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: $setup.props.width,
    height: $setup.props.height,
    viewBox: "0 0 48 48",
    fill: "none"
  }, _attrs))}><path d="M12.9998 8L6 14L12.9998 21" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/Back.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : undefined
};
const BackIcon = /*#__PURE__*/_export_sfc(_sfc_main$j, [['ssrRender',_sfc_ssrRender$j]]);

const _sfc_main$i = {
  __name: 'Share',
  props: {
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '18'
	},
	height: {
		type: String,
		default: '18'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: $setup.props.width,
    height: $setup.props.height,
    viewBox: "0 0 24 24",
    fill: "none",
    class: $setup.props.svgClassName
  }, _attrs))}><g id="Communication / Share_iOS_Export"><path id="Vector" d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/Share.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : undefined
};
const ShareIcon = /*#__PURE__*/_export_sfc(_sfc_main$i, [['ssrRender',_sfc_ssrRender$i]]);

const _sfc_main$h = {
  __name: 'Chat',
  props: {
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '18'
	},
	height: {
		type: String,
		default: '18'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: $setup.props.width,
    height: $setup.props.height,
    viewBox: "0 0 24 24",
    fill: "none",
    class: $setup.props.svgClassName
  }, _attrs))}><path d="M12.9886 20.9463L12.88 19.9522L12.35 20.0101L12.1027 20.4825L12.9886 20.9463ZM6.45572 19.09L7.06966 19.8793L8.08109 19.0927L7.07226 18.3027L6.45572 19.09ZM4.23006 20.8211L3.61612 20.0317L3.61611 20.0317L4.23006 20.8211ZM20 12C20 16.1206 16.8838 19.5148 12.88 19.9522L13.0973 21.9404C18.1043 21.3933 22 17.1523 22 12H20ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM7.07226 18.3027C5.20015 16.8366 4 14.5587 4 12H2C2 15.1996 3.50381 18.0485 5.83917 19.8773L7.07226 18.3027ZM4.844 21.6104L7.06966 19.8793L5.84178 18.3006L3.61612 20.0317L4.844 21.6104ZM4.29145 20C5.1484 20 5.52041 21.0843 4.84401 21.6104L3.61611 20.0317C2.78939 20.6747 3.24408 22 4.29145 22V20ZM12 20H4.29145V22H12V20ZM12.9 20H12V22H12.9V20ZM12.1027 20.4825C12.2517 20.1979 12.5519 20 12.9 20V22C13.3252 22 13.6921 21.7586 13.8746 21.4102L12.1027 20.4825Z" fill="currentColor"></path><path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="currentColor"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"></path><path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/Chat.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : undefined
};
const ChatIcon = /*#__PURE__*/_export_sfc(_sfc_main$h, [['ssrRender',_sfc_ssrRender$h]]);

const _sfc_main$g = {
  __name: 'ButtonIconGroup',
  props: {
	icon: {
		type: String,
		required: true
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, ResetIcon, BackIcon, ShareIcon, ChatIcon };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.props.icon === 'reset') {
    _push(ssrRenderComponent($setup["ResetIcon"], _attrs, null, _parent));
  } else if ($setup.props.icon === 'back') {
    _push(ssrRenderComponent($setup["BackIcon"], _attrs, null, _parent));
  } else if ($setup.props.icon === 'share') {
    _push(ssrRenderComponent($setup["ShareIcon"], _attrs, null, _parent));
  } else if ($setup.props.icon === 'chat') {
    _push(ssrRenderComponent($setup["ChatIcon"], _attrs, null, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/ButtonIconGroup.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : undefined
};
const ButtonIconGroup = /*#__PURE__*/_export_sfc(_sfc_main$g, [['ssrRender',_sfc_ssrRender$g]]);

const commonStyle = 'flex items-center justify-center duration-300 ease-in-out';
const disabledStyle = 'disabled:opacity-50 disabled:cursor-not-allowed';

/* size */
const lgSize = 'h-14 text-lg max-md:text-base';
const mdSize = 'h-12 text-base max-md:text-sm';
const smSize = 'h-10 text-sm max-md:text-xs';
const xsSize = 'h-8 text-[13px]';

/* padding */
const lgPadding = 'p-[0_16px] max-md:p-[0_12px]';
const mdPadding = 'p-[0_12px]';
const smPadding = 'p-[0_8px]';
const xsPadding = 'p-[0_4px]';

/* rounded */
const lgRounded = 'rounded-lg';
const mdRounded = 'rounded-md';
const fullRounded = 'rounded-full';

/* ============ color style ============ */

/* blue */
const defaultBlue1Style = 'bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-600';
const focusBlueStyle = 'focus:border-blue-300 focus:ring-2 focus:ring-blue-300';

/* white */
const outlineWhite1Style =
	'w-full p-[16px_24px] border-2 rounded-full hover:border-blue-400 hover:text-gray-900 hover:bg-blue-50';
const focusWhiteStyle =
	'focus:outline-blue-200 focus:ring-2 focus:ring-blue-200 focus:text-gray-900 ';
const outlineWhiteActiveClickClass = 'border-blue-400 bg-blue-50 text-gray-900';
const outlineWhiteInactiveClickClass = 'bg-white border-gray-200 text-gray-500';

/* gray */
const defaultGray1Style = 'text-white bg-zinc-600 hover:bg-zinc-700 disabled:hover:bg-zinc-700';
const defaultGray2Style = `text-white bg-zinc-800 hover:bg-zinc-900 disabled:hover:bg-zinc-900`;
const focusGrayStyle = 'focus:bg-zinc-600 focus:ring-2 focus:ring-zinc-400';

/* green */
const fillGreen1Style = 'text-white bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600';
const focusGreenStyle = 'focus:bg-green-600 focus:ring-2 focus:ring-green-400';

/* ============ color style ============ */


const _sfc_main$f = {
  __name: 'Button',
  props: {
	type: {
		type: String,
		default: 'button'
	},
	styleType: {
		type: String,
		required: true,
		default: 'outline-white1'
	},
	bindClass: {
		type: String,
		default: ''
	},
	click: {
		type: Function,
		default: null
	},
	clickClass: {
		type: String,
		default: ''
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

function handleClick() {
	if (props.click) {
		props.click();
	}
}

function getStyleType() {
	if (props.styleType.includes('fill-blue1')) {
		return `${defaultBlue1Style} ${disabledStyle} ${focusBlueStyle}`;
	}

	if (props.styleType.includes('outline-white1')) {
		return `${outlineWhite1Style} ${props.clickClass ? outlineWhiteActiveClickClass : outlineWhiteInactiveClickClass} ${focusWhiteStyle}	`;
	}

	if (props.styleType.includes('fill-gray1')) {
		return `${defaultGray1Style} ${disabledStyle} ${focusGrayStyle}`;
	}

	if (props.styleType.includes('fill-gray2')) {
		return `${defaultGray2Style} ${disabledStyle} ${focusGrayStyle}`;
	}

	if (props.styleType.includes('fill-green1')) {
		return `${fillGreen1Style} ${disabledStyle} ${focusGreenStyle}`;
	}

	return '';
}

function getSizeType() {
	if (props.styleType.includes('lg')) {
		return `${lgSize} ${lgPadding} ${lgRounded}`;
	}

	if (props.styleType.includes('md')) {
		return `${mdSize} ${mdPadding} ${lgRounded}`;
	}

	if (props.styleType.includes('sm')) {
		return `${smSize} ${smPadding} ${mdRounded}`;
	}

	if (props.styleType.includes('xs')) {
		return `${xsSize} ${xsPadding} ${mdRounded}`;
	}

	return '';
}

const __returned__ = { props, handleClick, commonStyle, disabledStyle, lgSize, mdSize, smSize, xsSize, lgPadding, mdPadding, smPadding, xsPadding, lgRounded, mdRounded, fullRounded, defaultBlue1Style, focusBlueStyle, outlineWhite1Style, focusWhiteStyle, outlineWhiteActiveClickClass, outlineWhiteInactiveClickClass, defaultGray1Style, defaultGray2Style, focusGrayStyle, fillGreen1Style, focusGreenStyle, getStyleType, getSizeType };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: `${$setup.commonStyle} ${$setup.getStyleType()} ${$setup.getSizeType()} ${$props.bindClass} max-md:w-full gap-x-2`,
    type: $props.type
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/button/Button.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : undefined
};
const Button = /*#__PURE__*/_export_sfc(_sfc_main$f, [['ssrRender',_sfc_ssrRender$f]]);

const _sfc_main$e = {
  __name: 'ButtonGroup',
  props: {
	bluePropObject: {
		type: Object
	},
	grayPropObject: {
		type: Object
	},
	gray2PropObject: {
		type: Object
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const bluePropObject = props.bluePropObject;
const grayPropObject = props.grayPropObject;
const gray2PropObject = props.gray2PropObject;

const __returned__ = { props, bluePropObject, grayPropObject, gray2PropObject, ButtonIconGroup, Button, ResetIcon, BackIcon, ShareIcon };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center gap-2 items-center" }, _attrs))} data-v-50902936>`);
  if ($setup.bluePropObject?.show == true) {
    _push(ssrRenderComponent($setup["Button"], {
      styleType: "fill-blue1-sm",
      onClick: $setup.bluePropObject.function
    }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent($setup["ButtonIconGroup"], {
            icon: $setup.bluePropObject.icon
          }, null, _parent, _scopeId));
          _push(`<span data-v-50902936${
            _scopeId
          }>${
            ssrInterpolate($setup.bluePropObject.text)
          }</span>`);
        } else {
          return [
            createVNode($setup["ButtonIconGroup"], {
              icon: $setup.bluePropObject.icon
            }, null, 8, ["icon"]),
            createVNode("span", null, toDisplayString($setup.bluePropObject.text), 1)
          ]
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.grayPropObject?.show == true) {
    _push(ssrRenderComponent($setup["Button"], {
      styleType: "fill-gray1-sm",
      onClick: $setup.grayPropObject.function
    }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent($setup["ButtonIconGroup"], {
            icon: $setup.grayPropObject.icon
          }, null, _parent, _scopeId));
          _push(`<span data-v-50902936${
            _scopeId
          }>${
            ssrInterpolate($setup.grayPropObject.text)
          }</span>`);
        } else {
          return [
            createVNode($setup["ButtonIconGroup"], {
              icon: $setup.grayPropObject.icon
            }, null, 8, ["icon"]),
            createVNode("span", null, toDisplayString($setup.grayPropObject.text), 1)
          ]
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.gray2PropObject?.show == true) {
    _push(ssrRenderComponent($setup["Button"], {
      styleType: "fill-gray2-sm",
      onClick: $setup.gray2PropObject.function
    }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent($setup["ButtonIconGroup"], {
            icon: $setup.gray2PropObject.icon
          }, null, _parent, _scopeId));
          _push(`<span data-v-50902936${
            _scopeId
          }>${
            ssrInterpolate($setup.gray2PropObject.text)
          }</span>`);
        } else {
          return [
            createVNode($setup["ButtonIconGroup"], {
              icon: $setup.gray2PropObject.icon
            }, null, 8, ["icon"]),
            createVNode("span", null, toDisplayString($setup.gray2PropObject.text), 1)
          ]
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/button/ButtonGroup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined
};
const ButtonGroup = /*#__PURE__*/_export_sfc(_sfc_main$e, [['ssrRender',_sfc_ssrRender$e],['__scopeId',"data-v-50902936"]]);

const _sfc_main$d = {
  __name: 'SectionWrapper',
  props: {
	type: {
		type: String,
		default: 'default'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

function getTypeClass() {
	if (props.type === 'default') return 'max-md:p-7 max-[500px]:w-full';
	if (props.type === 'answerNotFound')
		return 'min-w-[500px] max-[500px]:min-w-auto flex flex-col justify-center h-screen max-md:p-7 max-[500px]:w-full';

	return '';
}

const __returned__ = { props, getTypeClass };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `flex flex-col justify-center relative z-10 text-center  size-full p-10 ${$setup.getTypeClass()}`
  }, _attrs))}><article>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</article></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/section/SectionWrapper.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined
};
const SectionWrapper = /*#__PURE__*/_export_sfc(_sfc_main$d, [['ssrRender',_sfc_ssrRender$d]]);

const _sfc_main$c = {
  __name: 'AnswerNotFound',
  props: {
	restart: {
		type: Function,
		required: true
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const isSharedLink = ref(false);

onMounted(() => {
	// URL에 username 파라미터가 있으면 공유 링크로 간주
	isSharedLink.value = !!getUsernameFromUrl();
});

const bluePropObject = {
	function: props.restart,
	icon: 'back',
	text: '테스트 하러가기',
	show: true
};

const grayPropObject = {
	function: props.restart,
	icon: 'chat',
	text: '오픈채팅으로 문의하기',
	show: true
};

const __returned__ = { props, isSharedLink, bluePropObject, grayPropObject, ref, onMounted, ButtonGroup, SectionWrapper, get getUsernameFromUrl() { return getUsernameFromUrl } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["SectionWrapper"], mergeProps({ type: "answerNotFound" }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="text-center py-12"${
          _scopeId
        }><h3 class="text-xl font-semibold mb-4 text-gray-700 break-keep"${
          _scopeId
        }>${
          ssrInterpolate($setup.isSharedLink
						? '해당 사용자의 결과를 찾을 수 없어요.'
						: '이런! 답변 데이터를 찾을 수 없네요.')
        }</h3><p class="text-gray-600 mb-6"${
          _scopeId
        }>${
          ssrInterpolate($setup.isSharedLink
						? '링크가 만료되었거나 잘못된 링크일 수 있습니다.'
						: '먼저 성격 테스트를 완료해주세요.')
        }</p><div class="flex flex-col gap-y-4"${
          _scopeId
        }>`);
        _push(ssrRenderComponent($setup["ButtonGroup"], { bluePropObject: $setup.bluePropObject }, null, _parent, _scopeId));
        if (!$setup.isSharedLink) {
          _push(`<span class="text-gray-500 break-keep text-[13px] font-medium text-center"${_scopeId}>또는 해당 에러가 계속 지속된다면</span>`);
        } else {
          _push(`<!---->`);
        }
        if (!$setup.isSharedLink) {
          _push(ssrRenderComponent($setup["ButtonGroup"], { grayPropObject: $setup.grayPropObject }, null, _parent, _scopeId));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center py-12" }, [
            createVNode("h3", { class: "text-xl font-semibold mb-4 text-gray-700 break-keep" }, toDisplayString($setup.isSharedLink
						? '해당 사용자의 결과를 찾을 수 없어요.'
						: '이런! 답변 데이터를 찾을 수 없네요.'), 1),
            createVNode("p", { class: "text-gray-600 mb-6" }, toDisplayString($setup.isSharedLink
						? '링크가 만료되었거나 잘못된 링크일 수 있습니다.'
						: '먼저 성격 테스트를 완료해주세요.'), 1),
            createVNode("div", { class: "flex flex-col gap-y-4" }, [
              createVNode($setup["ButtonGroup"], { bluePropObject: $setup.bluePropObject }),
              (!$setup.isSharedLink)
                ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-gray-500 break-keep text-[13px] font-medium text-center"
                  }, "또는 해당 에러가 계속 지속된다면"))
                : createCommentVNode("", true),
              (!$setup.isSharedLink)
                ? (openBlock(), createBlock($setup["ButtonGroup"], {
                    key: 1,
                    grayPropObject: $setup.grayPropObject
                  }))
                : createCommentVNode("", true)
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/question/AnswerNotFound.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined
};
const AnswerNotFound = /*#__PURE__*/_export_sfc(_sfc_main$c, [['ssrRender',_sfc_ssrRender$c]]);

const scrollLock = {
	enable() {
		document.body.style.overflow = 'hidden';
		document.body.style.width = '100%';
	},

	disable() {
		document.body.style.removeProperty('overflow');
		document.body.style.removeProperty('width');
	}
};

const wrapperPcStyle =
	'w-full max-w-[220px] h-[220px] flex justify-center items-center m-[20px_auto] border-1 border-gray-300 rounded-full bg-white';
const wrapperMobileStyle =
	'max-md:max-w-[200px] max-md:h-[200px] [&&]:max-[375px]:max-w-[160px] [&&]:max-[375px]:h-[160px]';

const _sfc_main$b = {
  __name: 'CharacterProfileWrapper',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { wrapperPcStyle, wrapperMobileStyle };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `${$setup.wrapperPcStyle} ${$setup.wrapperMobileStyle}`
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/characterProfile/CharacterProfileWrapper.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined
};
const CharacterProfileWrapper = /*#__PURE__*/_export_sfc(_sfc_main$b, [['ssrRender',_sfc_ssrRender$b]]);

const imageStyle = 'w-[150px] max-md:w-[128px] [&&]:max-[375px]:w-[100px] object-contain';


const _sfc_main$a = {
  __name: 'CharacterProfile',
  props: {
	type: {
		type: String,
		required: true
	},
	characterInfo: {
		type: Object
	},
	imageError: {
		type: Boolean
	},
	handleImageError: {
		type: Function
	},
	characterData: {
		type: Array
	},
	currentIndex: {
		type: Number
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { imageStyle, props, CharacterProfileWrapper };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["CharacterProfileWrapper"], _attrs, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if (!$setup.props.imageError && $setup.props.type === 'result') {
          _push(`<figure data-v-bebfbfa9${
            _scopeId
          }><img${
            ssrRenderAttr("src", $setup.props.characterInfo.image)
          }${
            ssrRenderAttr("alt", $setup.props.characterInfo.title)
          } class="${
            ssrRenderClass($setup.imageStyle)
          }" data-v-bebfbfa9${
            _scopeId
          }></figure>`);
        } else if ($setup.props.type === 'intro') {
          _push(`<!--[-->`);
          ssrRenderList($props.characterData, (character, index) => {
            _push(`<figure class="${
              ssrRenderClass([{
				active: $props.currentIndex === index,
				'fade-out': $props.currentIndex > index
			}, "character-item"])
            }" data-v-bebfbfa9${
              _scopeId
            }><img class="${
              ssrRenderClass($setup.imageStyle)
            }"${
              ssrRenderAttr("src", character.image)
            }${
              ssrRenderAttr("alt", character.name)
            } data-v-bebfbfa9${
              _scopeId
            }></figure>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<span class="text-sm text-gray-500 text-center break-keep" data-v-bebfbfa9${_scopeId}>이미지를 불러오지 못했어요.</span>`);
        }
      } else {
        return [
          (!$setup.props.imageError && $setup.props.type === 'result')
            ? (openBlock(), createBlock("figure", { key: 0 }, [
                createVNode("img", {
                  src: $setup.props.characterInfo.image,
                  alt: $setup.props.characterInfo.title,
                  class: $setup.imageStyle,
                  onError: $setup.props.handleImageError
                }, null, 40, ["src", "alt", "onError"])
              ]))
            : ($setup.props.type === 'intro')
              ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList($props.characterData, (character, index) => {
                  return (openBlock(), createBlock("figure", {
                    key: character.name,
                    class: ["character-item", {
				active: $props.currentIndex === index,
				'fade-out': $props.currentIndex > index
			}]
                  }, [
                    createVNode("img", {
                      class: $setup.imageStyle,
                      src: character.image,
                      alt: character.name
                    }, null, 8, ["src", "alt"])
                  ], 2))
                }), 128))
              : (openBlock(), createBlock("span", {
                  key: 2,
                  class: "text-sm text-gray-500 text-center break-keep"
                }, "이미지를 불러오지 못했어요."))
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/characterProfile/CharacterProfile.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined
};
const CharacterProfile = /*#__PURE__*/_export_sfc(_sfc_main$a, [['ssrRender',_sfc_ssrRender$a],['__scopeId',"data-v-bebfbfa9"]]);

const listBeforeStyle =
	'before:content-[""] before:mb-auto before:mt-[9px] before:min-w-[4px] before:min-h-[4px] before:bg-black before:rounded-full';


const _sfc_main$9 = {
  __name: 'ResultBox',
  props: {
	title: {
		type: String,
		required: true,
		default: ''
	},
	dataText: {
		type: String
	},
	contentType: {
		type: String,
		default: 'text'
	},
	data: {
		type: Array
	}
},
  emits: ['openPopup'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

function openPopup(characterName) {
	emit('openPopup', characterName);
}

const props = __props;

function getEmoji(title) {
	if (title === '한줄 요약') return 'before:content-["📌"]';
	if (title === '장점') return 'before:content-["👍"]';
	if (title === '단점') return 'before:content-["👎"]';
	if (title === '자주 듣는 말') return 'before:content-["💬"]';
	if (title === '잘 맞는 캐릭터') return 'before:content-["❤️"]';
	if (title === '안 맞는 캐릭터') return 'before:content-["💔"]';

	return '';
}

function getImage(character) {
	if (character === '에리니') return '/images/characters/img-erini.webp';
	if (character === '배찌') return '/images/characters/img-bazzi.webp';
	if (character === '디지니') return '/images/characters/img-diz.webp';
	if (character === '우니') return '/images/characters/img-uni.webp';
	if (character === '티이라') return '/images/characters/img-tiera.webp';
	if (character === '케피') return '/images/characters/img-keffy.webp';
	if (character === '모스') return '/images/characters/img-mos.webp';
	if (character === '에띠') return '/images/characters/img-ethen.webp';
	if (character === '크리스') return '/images/characters/img-kris.webp';
	if (character === '마리드') return '/images/characters/img-marid.webp';
	if (character === '다오') return '/images/characters/img-dao.webp';

	return '';
}

function imagePosition(character) {
	if (character === '티이라') return 'object-[0_-2px]';

	return '';
}

const __returned__ = { listBeforeStyle, emit, openPopup, props, getEmoji, getImage, imagePosition, Button };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    ssrRenderAttrs(mergeProps({
      class: `flex flex-col gap-y-3 border-1 border-gray-200 rounded-lg p-3 ${$props.contentType === 'image' ? 'gap-y-5' : ''}`
    }, _attrs))
  }><h3 class="text-base font-bold text-black"><span class="${
    ssrRenderClass(`${$setup.getEmoji($setup.props.title)} flex items-center gap-x-1 justify-center`)
  }">${
    ssrInterpolate($setup.props.title)
  }</span></h3>`);
  if ($setup.props.contentType === 'text') {
    _push(`<p class="text-center text-sm leading-[1.5] break-keep text-gray-700">${ssrInterpolate($props.dataText)}</p>`);
  } else if ($setup.props.contentType === 'list') {
    _push(`<ul class="flex flex-col gap-y-1"><!--[-->`);
    ssrRenderList($setup.props.data, (item) => {
      _push(`<li><p class="${
        ssrRenderClass(`${$setup.listBeforeStyle} flex items-center gap-x-2.5 max-w-[360px] text-left relative text-sm leading-[1.5] break-keep text-gray-700`)
      }">${
        ssrInterpolate(item)
      }</p></li>`);
    });
    _push(`<!--]--></ul>`);
  } else if ($setup.props.contentType === 'image') {
    _push(`<div class="max-[375px]:flex-col max-[375px]:gap-y-[10px] flex items-center justify-center gap-x-8"><!--[-->`);
    ssrRenderList($setup.props.data, (item) => {
      _push(`<figure class="flex flex-col gap-y-2"><img${
        ssrRenderAttr("src", $setup.getImage(item))
      }${
        ssrRenderAttr("alt", item)
      } class="${
        ssrRenderClass(`w-[120px] h-[100px] max-[375px]:h-auto max-[375px]:w-[100px] object-cover ${$setup.imagePosition(item)}`)
      }"><figcaption class="text-center text-sm leading-[1.5] break-keep font-bold text-gray-700">${
        ssrInterpolate(item.name)
      }</figcaption>`);
      _push(ssrRenderComponent($setup["Button"], {
        styleType: "fill-gray1-xs",
        onClick: () => $setup.openPopup(item)
      }, {
        default: withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(` 캐릭터 설명 보기 `);
          } else {
            return [
              createTextVNode(" 캐릭터 설명 보기 ")
            ]
          }
        }),
        _: 2
      }, _parent));
      _push(`</figure>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/result/ResultBox.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined
};
const ResultBox = /*#__PURE__*/_export_sfc(_sfc_main$9, [['ssrRender',_sfc_ssrRender$9]]);

const _sfc_main$8 = {
  __name: 'Close',
  props: {
	svgClassName: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '24'
	},
	height: {
		type: String,
		default: '24'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: $setup.props.width,
    height: $setup.props.height,
    viewBox: "0 0 24 24",
    fill: "none",
    class: $setup.props.svgClassName
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/Close.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined
};
const Close = /*#__PURE__*/_export_sfc(_sfc_main$8, [['ssrRender',_sfc_ssrRender$8]]);

const openStyle = 'visible pointer-events-auto';
const closeStyle = 'invisible pointer-events-none';
const transitionStyle = 'duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all';


const _sfc_main$7 = {
  __name: 'Popup',
  props: {
	isOpen: {
		type: Boolean,
		default: false
	},
	maxWidth: {
		type: String,
		default: '500px'
	},
	minWidth: {
		type: String,
		default: '500px'
	}
},
  emits: ['close'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

function closePopup() {
	emit('close');
}

const props = __props;

function minWidthStyle() {
	return `min-w-[${props.minWidth}]`;
}

function maxWidthStyle() {
	return `max-w-[${props.maxWidth}]`;
}

// props MaxWidth, minWidth 기준으로 min-w-auto, max-w-none 적용
function mobileWidthStyle() {
	const maxWidth = parseInt(props.maxWidth);
	const minWidth = parseInt(props.minWidth);
	const mobileWidth = Math.min(maxWidth, minWidth);
	return `max-[${mobileWidth}px]:min-w-auto max-[${mobileWidth}px]:max-w-none`;
}

const __returned__ = { emit, closePopup, openStyle, closeStyle, transitionStyle, props, minWidthStyle, maxWidthStyle, mobileWidthStyle, Close };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="${ssrRenderClass(`fixed left-1/2 -translate-x-1/2 bottom-0 ${$setup.transitionStyle} w-full 
        ${$setup.props.isOpen ? `${$setup.openStyle} z-[100] translate-y-0` : `${$setup.closeStyle} z-[-1] translate-y-full`} 
        ${$setup.minWidthStyle()} ${$setup.maxWidthStyle()} ${$setup.mobileWidthStyle()}`)}"><div class="bg-white rounded-[8px_8px_0_0] w-full"><header class="p-4 h-12 flex justify-between items-center"><button type="button" class="text-gray-900 h-full p-[5px] flex items-center justify-end m-[-5px_-5px_-5px_auto]">`);
  _push(ssrRenderComponent($setup["Close"], null, null, _parent));
  _push(`</button></header><article class="h-[calc(100vh_-_200px)] overflow-y-auto p-4">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</article></div></div><div id="dimmed" class="${ssrRenderClass(`fixed left-0 top-0 size-full inset-0 bg-black/50  ${$setup.transitionStyle} ${$setup.props.isOpen ? `${$setup.openStyle} z-[30] opacity-100` : `${$setup.closeStyle} opacity-0`}`)}"></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/popup/Popup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const Popup = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7]]);

const _sfc_main$6 = {
  __name: 'PopupSection',
  props: {
	data: {
		type: Object
	},
	contentText: {
		type: String
	},
	isPopupOpen: {
		type: Boolean
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

// 팝업 상태 변화를 추적하기 위한 ref
const isAnimating = ref(false);
const shouldShowStyles = ref(false);
let closeTimer = null;

// 팝업 상태 변화 감지
watch(
	() => props.isPopupOpen,
	(newValue, oldValue) => {
		// 이전 타이머가 있다면 정리
		if (closeTimer) {
			clearTimeout(closeTimer);
			closeTimer = null;
		}

		if (newValue && !oldValue) {
			// 팝업이 열릴 때
			shouldShowStyles.value = true;
			isAnimating.value = false;
		} else if (!newValue && oldValue) {
			// 팝업이 닫힐 때
			isAnimating.value = true;
			// 700ms 후에 스타일 제거 (팝업 타이머 중복 방지)
			closeTimer = setTimeout(() => {
				shouldShowStyles.value = false;
				isAnimating.value = false;
				closeTimer = null;
			}, 700);
		}
	},
	{ immediate: true }
);

// 컴포넌트가 언마운트될 때 타이머 정리
onUnmounted(() => {
	if (closeTimer) {
		clearTimeout(closeTimer);
		closeTimer = null;
	}
});

const characterObject = computed(() => {
	if (!props.data) return { top: '', imgSize: '' };

	const characterName = props.data.title;

	// 팝업이 열려있거나 애니메이션 중일 때만 스타일 적용
	if (props.isPopupOpen || (isAnimating.value && shouldShowStyles.value)) {
		if (characterName === '디지니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '배찌')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '크리스')
			return {
				top: 'top-[90px]',
				imgSize: ''
			};
		if (characterName === '에리니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '티이라')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '모스')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '우니')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '다오')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '마리드')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '케피')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
		if (characterName === '에띠')
			return {
				top: 'top-[70px]',
				imgSize: 'w-[200px]'
			};
	}

	// 팝업이 닫혀있고 애니메이션도 완료된 경우 기본값
	return { top: '', imgSize: '' };
});

const __returned__ = { props, isAnimating, shouldShowStyles, get closeTimer() { return closeTimer }, set closeTimer(v) { closeTimer = v; }, characterObject, computed, ref, watch, onUnmounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    ssrRenderAttrs(mergeProps({ class: "pt-[190px] relative flex flex-col items-center gap-y-2" }, _attrs))
  }><div class="${
    ssrRenderClass([$setup.characterObject.top, "absolute -translate-1/2 left-1/2 z-0"])
  }"><img class="${
    ssrRenderClass($setup.characterObject.imgSize)
  }"${
    ssrRenderAttr("src", $setup.props.data?.popupImage)
  }${
    ssrRenderAttr("alt", $setup.props.data?.title)
  }></div><div class="relative z-10 border-t border-gray-200 pt-3.5"><p class="text-sm text-gray-700 break-keep">${
    ssrInterpolate($props.contentText)
  }</p></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/popup/PopupSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined
};
const PopupSection = /*#__PURE__*/_export_sfc(_sfc_main$6, [['ssrRender',_sfc_ssrRender$6]]);

const _sfc_main$5 = {
  __name: 'ResultSection',
  props: {
	characterInfo: {
		type: Object,
		required: true
	},
	restartTest: {
		type: Function,
		required: true
	},
	goToQuestion: {
		type: Function,
		required: true
	},
	imageError: {
		type: Boolean,
		required: true
	},
	handleImageError: {
		type: Function,
		required: true
	},
	copyToClipboard: {
		type: Function,
		required: true
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const characterOriginData = ref(characters);
const isPopupOpen = ref(false);
const selectedCharacter = ref(null);

function openPopup(characterName) {
	selectedCharacter.value = characters[characterName];
	isPopupOpen.value = true;
	scrollLock.enable();
}

function closePopup() {
	isPopupOpen.value = false;
	scrollLock.disable();
}

const props = __props;

const bluePropObject = {
	function: props.restartTest,
	icon: 'reset',
	text: '다시 테스트하기',
	show: true
};

const grayPropObject = {
	function: props.goToQuestion,
	icon: 'back',
	text: '질문으로 돌아가기',
	show: true
};

const gray2PropObject = {
	function: props.copyToClipboard,
	icon: 'share',
	text: '테스트 결과 공유하기',
	show: true
};

const characterInfo = ref(props.characterInfo);

const userName = ref('');

onMounted(() => {
	// URL에서 username 파라미터 확인
	const urlUsername = getUsernameFromUrl();
	const currentUsername = getUserName();

	// URL 파라미터의 username을 우선적으로 사용
	userName.value = urlUsername || currentUsername || 'undefined';
});

const __returned__ = { characterOriginData, isPopupOpen, selectedCharacter, openPopup, closePopup, props, bluePropObject, grayPropObject, gray2PropObject, characterInfo, userName, ref, onMounted, get getUserName() { return getUserName }, get getUsernameFromUrl() { return getUsernameFromUrl }, get scrollLock() { return scrollLock }, get characters() { return characters }, CharacterProfile, SectionWrapper, ButtonGroup, ResultBox, Popup, PopupSection };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["SectionWrapper"], null, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-2xl font-bold text-gray-800 break-keep"${
          _scopeId
        }>${
          ssrInterpolate($setup.userName)
        }님은 &quot;<em${
          _scopeId
        }>${
          ssrInterpolate($setup.props.characterInfo.title)
        }</em>&quot; 와 가장 비슷한 성격을 가지고 있어요. </h2><div class="flex flex-col"${
          _scopeId
        }>`);
        _push(ssrRenderComponent($setup["CharacterProfile"], {
          type: "result",
          characterInfo: $setup.characterInfo,
          imageError: $setup.props.imageError,
          handleImageError: $setup.props.handleImageError
        }, null, _parent, _scopeId));
        _push(`<div class="flex flex-col gap-y-6 mb-10"${_scopeId}>`);
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "한줄 요약",
          contentType: "text",
          dataText: $setup.characterInfo.info.summary
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "장점",
          contentType: "list",
          data: $setup.characterInfo.info.meritArray
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "단점",
          contentType: "list",
          data: $setup.characterInfo.info.shortcomingArray
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "자주 듣는 말",
          contentType: "list",
          data: $setup.characterInfo.info.commentArray
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "잘 맞는 캐릭터",
          contentType: "image",
          data: $setup.characterInfo.info.well,
          onOpenPopup: $setup.openPopup
        }, null, _parent, _scopeId));
        _push(ssrRenderComponent($setup["ResultBox"], {
          title: "안 맞는 캐릭터",
          contentType: "image",
          data: $setup.characterInfo.info.bad,
          onOpenPopup: $setup.openPopup
        }, null, _parent, _scopeId));
        _push(`</div></div>`);
        _push(ssrRenderComponent($setup["ButtonGroup"], {
          bluePropObject: $setup.bluePropObject,
          grayPropObject: $setup.grayPropObject,
          gray2PropObject: $setup.gray2PropObject
        }, null, _parent, _scopeId));
      } else {
        return [
          createVNode("h2", { class: "text-2xl font-bold text-gray-800 break-keep" }, [
            createTextVNode(toDisplayString($setup.userName) + "님은 \"", 1),
            createVNode("em", null, toDisplayString($setup.props.characterInfo.title), 1),
            createTextVNode("\" 와 가장 비슷한 성격을 가지고 있어요. ")
          ]),
          createVNode("div", { class: "flex flex-col" }, [
            createVNode($setup["CharacterProfile"], {
              type: "result",
              characterInfo: $setup.characterInfo,
              imageError: $setup.props.imageError,
              handleImageError: $setup.props.handleImageError
            }, null, 8, ["characterInfo", "imageError", "handleImageError"]),
            createVNode("div", { class: "flex flex-col gap-y-6 mb-10" }, [
              createVNode($setup["ResultBox"], {
                title: "한줄 요약",
                contentType: "text",
                dataText: $setup.characterInfo.info.summary
              }, null, 8, ["dataText"]),
              createVNode($setup["ResultBox"], {
                title: "장점",
                contentType: "list",
                data: $setup.characterInfo.info.meritArray
              }, null, 8, ["data"]),
              createVNode($setup["ResultBox"], {
                title: "단점",
                contentType: "list",
                data: $setup.characterInfo.info.shortcomingArray
              }, null, 8, ["data"]),
              createVNode($setup["ResultBox"], {
                title: "자주 듣는 말",
                contentType: "list",
                data: $setup.characterInfo.info.commentArray
              }, null, 8, ["data"]),
              createVNode($setup["ResultBox"], {
                title: "잘 맞는 캐릭터",
                contentType: "image",
                data: $setup.characterInfo.info.well,
                onOpenPopup: $setup.openPopup
              }, null, 8, ["data"]),
              createVNode($setup["ResultBox"], {
                title: "안 맞는 캐릭터",
                contentType: "image",
                data: $setup.characterInfo.info.bad,
                onOpenPopup: $setup.openPopup
              }, null, 8, ["data"])
            ])
          ]),
          createVNode($setup["ButtonGroup"], {
            bluePropObject: $setup.bluePropObject,
            grayPropObject: $setup.grayPropObject,
            gray2PropObject: $setup.gray2PropObject
          })
        ]
      }
    }),
    _: 1
  }, _parent));
  ssrRenderTeleport(_push, (_push) => {
    _push(ssrRenderComponent($setup["Popup"], {
      isOpen: $setup.isPopupOpen,
      onClose: $setup.closePopup
    }, {
      content: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent($setup["PopupSection"], {
            isPopupOpen: $setup.isPopupOpen,
            data: $setup.selectedCharacter,
            contentText: $setup.selectedCharacter?.info.originalExplanation
          }, null, _parent, _scopeId));
        } else {
          return [
            createVNode($setup["PopupSection"], {
              isPopupOpen: $setup.isPopupOpen,
              data: $setup.selectedCharacter,
              contentText: $setup.selectedCharacter?.info.originalExplanation
            }, null, 8, ["isPopupOpen", "data", "contentText"])
          ]
        }
      }),
      _: 1
    }, _parent));
  }, "#popup-root", false, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/result/ResultSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const ResultSection = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5]]);

const _sfc_main$4 = {
  __name: 'ResultWrapper',
  props: {
	characterInfo: {
		type: Object,
		default: null
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const imageError = ref(false);

function handleImageError(event) {
	// 이미지 로드 실패 시 에러 상태로 변경
	imageError.value = true;
	// 이미지 요소를 숨김
	event.target.style.display = 'none';
}

function restartTest() {
	window.location.href = '/';
}

function goToQuestion() {
	window.location.href = '/question';
}

async function copyToClipboard() {
	try {
		// URL에서 username 파라미터 확인
		const urlUsername = getUsernameFromUrl();
		const currentUsername = getUserName();
		const currentCharacterInfo = props.characterInfo;

		let shareUrl;

		if (currentCharacterInfo) {
			// 결과 데이터를 해시 프래그먼트에 포함
			const encodedResult = encodeResultForUrl(currentCharacterInfo);
			const shareUsername = urlUsername || currentUsername || 'user';

			shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}#${encodedResult}`;
		} else {
			// 결과가 없으면 기존 방식 사용
			const shareUsername = urlUsername || currentUsername;
			if (shareUsername) {
				shareUrl = `${window.location.origin}/result?username=${encodeURIComponent(shareUsername)}`;
			} else {
				shareUrl = window.location.href;
			}
		}

		// URL 단축
		const shortUrl = await shortenUrl(shareUrl);

		// 단축된 URL을 클립보드에 복사
		await navigator.clipboard.writeText(shortUrl);
		alert('단축된 URL이 클립보드에 복사되었습니다!');
	} catch (err) {
		console.error('클립보드 복사 실패:', err);
		alert('URL 복사에 실패했습니다.');
	}
}

const __returned__ = { props, imageError, handleImageError, restartTest, goToQuestion, copyToClipboard, ref, AnswerNotFound, ResultSection, get getUserName() { return getUserName }, get getUsernameFromUrl() { return getUsernameFromUrl }, get encodeResultForUrl() { return encodeResultForUrl }, get shortenUrl() { return shortenUrl } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.characterInfo) {
    _push(ssrRenderComponent($setup["ResultSection"], mergeProps({
      characterInfo: $props.characterInfo,
      restartTest: $setup.restartTest,
      goToQuestion: $setup.goToQuestion,
      imageError: $setup.imageError,
      handleImageError: $setup.handleImageError,
      copyToClipboard: $setup.copyToClipboard
    }, _attrs), null, _parent));
  } else {
    _push(ssrRenderComponent($setup["AnswerNotFound"], mergeProps({ restart: $setup.restartTest }, _attrs), null, _parent));
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/result/ResultWrapper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const ResultWrapper = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4]]);

const pcStyle = 'flex flex-col min-w-[500px] max-w-[500px] mx-auto size-full bg-white';
const mobile500Style = 'max-[500px]:max-w-none max-[500px]:min-w-auto ';

const _sfc_main$3 = {
  __name: 'ContentsInnerLayout',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { pcStyle, mobile500Style };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$setup.pcStyle, $setup.mobile500Style]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/ContentsInnerLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const ContentsInnerLayout = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const copyStyle = 'text-center text-[13px] text-gray-500 underline max-md:text-xs max-md:mt-4';


const _sfc_main$2 = {
  __name: 'Footer',
  props: {
	type: {
		type: String,
		default: 'absolute'
	}
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

function getStyle() {
	if (props.type === 'absolute') return 'absolute z-0 bottom-[10px] left-1/2 -translate-x-1/2';
	if (props.type === 'static') return 'static translate-none bg-white max-w-[500px] mx-auto';

	return '';
}

const __returned__ = { copyStyle, props, getStyle };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${
    ssrRenderAttrs(mergeProps({
      class: `${$setup.getStyle()} text-center w-full`
    }, _attrs))
  }><a href="https://github.com/Plush777/kartrider-personality-test-app" target="_blank" class="${
    ssrRenderClass($setup.copyStyle)
  }">Made by Plush © 2025</a></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const Footer = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  __name: 'ResultContent',
  props: {
	loading: {
		type: Boolean,
		default: false
	},
	characterInfo: {
		type: Object,
		default: null
	}
},
  setup(__props, { expose: __expose }) {
  __expose();



const __returned__ = { Loading, ResultWrapper, ContentsInnerLayout, Footer };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.loading) {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    _push(ssrRenderComponent($setup["Loading"], null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
    _push(ssrRenderComponent($setup["ContentsInnerLayout"], { type: "result" }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(ssrRenderComponent($setup["ResultWrapper"], { characterInfo: $props.characterInfo }, null, _parent, _scopeId));
        } else {
          return [
            createVNode($setup["ResultWrapper"], { characterInfo: $props.characterInfo }, null, 8, ["characterInfo"])
          ]
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent($setup["Footer"], { type: "static" }, null, _parent));
    _push(`</div>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/result/ResultContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const ResultContent = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'MainLayout',
  props: {
	align: {
		type: String,
		default: 'center'
	},
	hscreen: {
		type: Boolean,
		default: true
	},
	isMobilePadding: {
		type: Boolean,
		default: true
	},
	isBackground: {
		type: Boolean,
		default: false
	}
},
  setup(__props, { expose: __expose }) {

const props = __props;

const loading = ref(true);
const characterInfo = ref(null);

// result 페이지 여부 확인 (하이드레이션 오류 방지)
const isResultPage = ref(false);

// 컴포넌트 마운트 시 데이터 로드 (result 페이지에서만)
onMounted(() => {
	isResultPage.value = window.location.pathname === '/result';

	// result 페이지에서만 데이터 로드
	if (isResultPage.value) {
		loadResultData();
	} else {
		// 메인 페이지에서는 세션 스토리지 초기화
		if (window.location.pathname === '/') {
			clearQuizData();
		}
		// 다른 페이지에서는 로딩을 즉시 완료
		loading.value = false;
	}
});

// 캐릭터 타입 계산 함수
function calculateCharacterType(answers) {
	const typeCounts = {};

	answers.forEach((answerIndex, questionIndex) => {
		const question = questions[questionIndex];
		if (question && question.options[answerIndex]) {
			const selectedOption = question.options[answerIndex];

			selectedOption.types.forEach((type) => {
				typeCounts[type] = (typeCounts[type] || 0) + 1;
			});
		}
	});

	// 가장 많이 선택된 타입 찾기
	const maxCount = Math.max(...Object.values(typeCounts));
	const topTypes = Object.keys(typeCounts).filter((type) => typeCounts[type] === maxCount);
	return topTypes[0]; // 첫 번째 타입 선택
}

// 데이터 로딩 함수
function loadResultData() {
	try {
		// 1. URL에서 결과 데이터 확인 (가장 우선순위)
		const urlResult = getResultFromUrl();
		console.log('MainLayout - URL에서 읽은 결과:', urlResult ? '있음' : '없음');

		if (urlResult) {
			// URL에서 결과를 바로 읽어온 경우 로딩 상태 건너뛰기
			characterInfo.value = urlResult;
			console.log('MainLayout - 결과 설정됨:', characterInfo.value.title);
			loading.value = false; // 즉시 로딩 완료
			return;
		}

		// 2. URL에서 username 파라미터 확인
		const urlUsername = getUsernameFromUrl();

		if (urlUsername) {
			// URL에 username이 있으면 로컬 sessionStorage에서 시도
			const userResult = getUserResult(urlUsername);
			if (userResult && userResult.characterInfo) {
				characterInfo.value = userResult.characterInfo;
			} else {
				console.log('해당 사용자의 결과를 찾을 수 없습니다.');
			}
		} else {
			// URL에 username이 없으면 현재 사용자의 답변으로 결과 계산
			const answers = getQuizAnswers();
			const currentUsername = getUserName();
			const isQuizCompleted = getQuizCompleted();

			if (answers && answers.length > 0) {
				// 답변 데이터가 있으면 결과 계산
				const characterType = calculateCharacterType(answers);
				characterInfo.value = getCharacterInfo(characterType);

				// 현재 사용자의 결과를 저장 (username이 있는 경우에만)
				if (currentUsername) {
					saveUserResult(currentUsername, characterInfo.value);
				}

				// 결과가 계산되면 URL 업데이트 (공유 가능하도록)
				updateResultUrl(currentUsername, characterInfo.value);
			} else if (isQuizCompleted && currentUsername) {
				// 답변 데이터는 없지만 테스트가 완료되었고 사용자명이 있으면 저장된 결과 사용
				const userResult = getUserResult(currentUsername);
				if (userResult && userResult.characterInfo) {
					characterInfo.value = userResult.characterInfo;
					// 저장된 결과로 URL 업데이트
					updateResultUrl(currentUsername, characterInfo.value);
				} else {
					console.log('저장된 결과를 찾을 수 없습니다.');
				}
			} else {
				console.log('답변 데이터가 없습니다.');
			}
		}
	} catch (error) {
		console.error('답변 데이터를 불러오는 중 오류가 발생했습니다:', error);
	}

	// 2.5초 후 로딩 완료
	setTimeout(() => {
		loading.value = false;
	}, 2500);
}

// 결과 URL 업데이트 함수
function updateResultUrl(username, characterInfo) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		const encodedResult = encodeResultForUrl(characterInfo);
		const newUrl = `${window.location.origin}/result?username=${encodeURIComponent(username)}#${encodedResult}`;

		// 브라우저 히스토리에 추가 (뒤로가기 가능하도록)
		window.history.pushState({}, '', newUrl);
		console.log('결과 URL 업데이트됨:', newUrl);

		// URL 업데이트 후 결과를 다시 설정 (공유 가능하도록)
		characterInfo.value = characterInfo;
	} catch (error) {
		console.error('URL 업데이트 중 오류 발생:', error);
	}
}

// 자식 컴포넌트에 전달할 데이터
__expose({
	loading,
	characterInfo
});

// provide를 통해 자식 컴포넌트들이 데이터에 접근할 수 있도록 함
const mainLayoutData = {
	loading,
	characterInfo
};

provide('mainLayoutRef', mainLayoutData);

const __returned__ = { props, loading, characterInfo, isResultPage, calculateCharacterType, loadResultData, updateResultUrl, mainLayoutData, ref, onMounted, provide, computed, get questions() { return questions }, get getCharacterInfo() { return getCharacterInfo }, ResultContent, get getQuizAnswers() { return getQuizAnswers }, get getUserResult() { return getUserResult }, get saveUserResult() { return saveUserResult }, get getUsernameFromUrl() { return getUsernameFromUrl }, get getUserName() { return getUserName }, get clearQuizData() { return clearQuizData }, get getQuizCompleted() { return getQuizCompleted }, get clearQuizCompleted() { return clearQuizCompleted }, get getResultFromUrl() { return getResultFromUrl }, get encodeResultForUrl() { return encodeResultForUrl } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${
    ssrRenderAttrs(mergeProps({
      class: ["relative z-0 flex flex-col items-center", [$props.hscreen ? 'h-screen' : '', $props.align === 'center' ? 'justify-center' : '']]
    }, _attrs))
  }><div class="${
    ssrRenderClass([$props.isBackground ? 'bg-sky-50' : '', "flex flex-col size-full items-center justify-center z-20"])
  }">`);
  if ($setup.isResultPage) {
    _push(ssrRenderComponent($setup["ResultContent"], {
      loading: $setup.loading,
      characterInfo: $setup.characterInfo
    }, null, _parent));
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const MainLayout = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { $$HtmlLayout as $, Button as B, ContentsInnerLayout as C, Footer as F, MainLayout as M, _export_sfc as _, CharacterProfile as a, CharacterProfileWrapper as b, clearQuizCompleted as c, introCharacterList as i, questions as q, setUserName as s };
