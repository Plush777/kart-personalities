export const characters = {
	다오: {
		title: '다오',
		image: '/images/characters/img-dao.webp',
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
			well: '케피, 모스처럼 성실하고 신중한 사람',
			bad: '배찌, 크리스처럼 즉흥적이고 자유로운 사람'
		}
	},
	배찌: {
		title: '배찌',
		info: {
			summary:
				'낙천적이고 걱정이 없는 자유로운 영혼. 게으르고 둔해 보이지만, 누구보다 타고난 재능을 지닌 ‘천재 게으름뱅이’입니다.',
			meritArray: [
				'근심 걱정 없는 긍정적 태도',
				'뛰어난 감각과 선천적 실력',
				'부담 없이 다가가는 편안한 분위기'
			],
			shortcomingArray: [
				'게으르고 귀찮아함',
				'계획 없이 즉흥적으로 행동함',
				'타인에게 무심하거나 둔감한 면이 있음'
			],
			commentArray: [
				'쟤가 연습을 안 하는데도 왜 잘하지?',
				'진짜 아무 생각 없는 듯한데, 갑자기 천재 같을 때 있음.',
				'귀찮아서 안 움직이는 거지, 못 하는 게 아니야.'
			],
			well: '에리니, 크리스처럼 즉흥적이고 유쾌한 스타일',
			bad: '다오, 케피처럼 계획적이거나 내향적인 성향'
		},
		image: '/images/characters/img-bazzi.webp'
	},
	디지니: {
		title: '디지니',
		info: {
			summary:
				'조용하지만 깊은 내면을 가진 따뜻한 감성형. 혼자서도 잘하지만 누군가 옆에 있으면 더 힘이 나는 타입입니다.',
			meritArray: ['공감 능력이 높고 섬세함', '관계 중심적으로 배려 깊음', '진심을 담아 행동함'],
			shortcomingArray: ['감정 기복이 있음', '결정이 느릴 수 있음', '쉽게 상처받을 수 있음'],
			commentArray: [
				'겉보다 속이 더 단단한 사람.',
				'생각보다 열정적이네?',
				'너무 배려하다가 네 마음 다치지 마.'
			],
			well: '우니, 티이라처럼 안정적이고 배려심 깊은 사람',
			bad: '크리스, 모스처럼 직설적이고 거친 사람'
		},
		image: '/images/characters/img-diz.webp'
	},
	우니: {
		title: '우니',
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
			well: '디지니, 에리니처럼 따뜻하고 격려해주는 사람',
			bad: '모스, 에띠처럼 강하고 직선적이거나 공감을 못해주는 사람'
		},
		image: '/images/characters/img-uni.webp'
	},
	마리드: {
		title: '마리드',
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
			well: '디지니, 티이라처럼 감정을 공감해주는 사람',
			bad: '모스, 에띠처럼 이성적이고 분석적인 사람'
		},
		image: '/images/characters/img-marid.webp'
	},
	티이라: {
		title: '티이라',
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
			well: '디지니, 마리드처럼 감성을 이해해주는 사람',
			bad: '에리니, 크리스처럼 활발한 사람'
		},
		image: '/images/characters/img-tiera.webp'
	},
	케피: {
		title: '케피',
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
				'갑자기 튀지는 않지만, 꼭 필요한 존재.',
				'이런 사람이 진짜 꾸준히 자기 일 잘 하는 스타일이야.'
			],
			well: '다오, 에띠 같이 계획적이고 신중한 타입',
			bad: '에리니, 배찌 같이 충동적이고 자유로운 타입'
		},
		image: '/images/characters/img-keffy.webp'
	},
	에띠: {
		title: '에띠',
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
			well: '에띠, 케피처럼 실용적이고 분석적인 사람',
			bad: '마리드, 디지니처럼 감정 중심형 사람'
		},
		image: '/images/characters/img-ethen.webp'
	},
	모스: {
		title: '모스',
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
			well: '에띠, 케피처럼 차분하고 계획적인 사람',
			bad: '마리드, 에리니처럼 감성적이거나 즉흥적인 사람'
		},
		image: '/images/characters/img-mos.webp'
	},
	크리스: {
		title: '크리스',
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
			well: '배찌, 에리니처럼 유쾌하거나 가벼운 스타일',
			bad: '다오, 티이라처럼 안정적이고 배려심 많은 사람'
		},
		image: '/images/characters/img-kris.webp'
	},
	에리니: {
		title: '에리니',
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
			well: '우니, 배찌처럼 활동적이고 외향적인 사람',
			bad: '케피, 모스처럼 조용하고 무게감 있는 사람'
		},
		image: '/images/characters/img-erini.webp'
	}
};

export const introCharacterList = [
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
