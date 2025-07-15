// 결과 페이지 동적 메타데이터 업데이트 스크립트
(function () {
	// 결과 페이지에서만 메타데이터 동적 업데이트
	if (window.location.pathname === '/result') {
		// 캐릭터별 메타 설명 매핑 (characters.js와 동일한 내용)
		const characterMetaDescriptions = {
			다오: '원칙과 정의를 중시하는 정석파예요.',
			배찌: '낙천적이고 걱정이 없는 자유로운 영혼이에요.',
			디지니: '조용하지만 깊은 내면을 가진 따뜻한 감성형이에요.',
			우니: '밝고 순수한 꿈꾸는 이상주의자예요.',
			마리드: '사랑과 감정에 솔직한 낭만주의자예요.',
			티이라: '조용하고 신비로운 분위기를 지닌 내향형이에요.',
			케피: '늘 조용히, 하지만 꾸준히 자신의 길을 가는 성실한 완성형이에요.',
			에띠: '논리와 분석 중심의 기술형 인물이에요.',
			모스: '차분하고 실용적인 현실주의자예요.',
			크리스: '충동적이고 자유로운 천재예요.',
			에리니: '장난기 많고 생기발랄한 활동가 타입이에요.'
		};

		function updateResultMetaTags() {
			// 1. URL 파라미터에서 결과 정보 확인
			const urlParams = new URLSearchParams(window.location.search);
			const urlUsername = urlParams.get('username') || '사용자';
			const resultParam = urlParams.get('result');

			let username = urlUsername;
			let characterInfo = null;

			// 2. URL 파라미터에서 결과 데이터 파싱
			if (resultParam) {
				try {
					const base64 = resultParam.replace(/-/g, '+').replace(/_/g, '/');
					const paddedBase64 = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
					const decoded = atob(paddedBase64);
					const utf8String = decodeURIComponent(escape(decoded));
					characterInfo = JSON.parse(utf8String);
				} catch (error) {
					console.log('URL 파라미터 파싱 실패:', error);
				}
			}

			// 3. URL 파라미터에 결과가 없으면 sessionStorage에서 확인
			if (!characterInfo) {
				try {
					// 현재 사용자명 가져오기
					const currentUsername = sessionStorage.getItem('userName') || '사용자';
					username = urlUsername === '사용자' ? currentUsername : urlUsername;

					// 사용자 결과 가져오기
					const userResults = JSON.parse(sessionStorage.getItem('userResults') || '{}');
					const userResult = userResults[username];

					if (userResult && userResult.characterInfo) {
						characterInfo = userResult.characterInfo;
					}
				} catch (error) {
					console.log('sessionStorage에서 결과 가져오기 실패:', error);
				}
			}

			// 4. 결과 정보가 있으면 메타데이터 업데이트
			if (characterInfo && characterInfo.title) {
				const metaDescription =
					characterMetaDescriptions[characterInfo.title] ||
					'카트라이더 캐릭터와 가장 비슷한 성격이에요.';

				// 동적 메타데이터 설정
				const title = `${username}님은 ${characterInfo.title}와 가장 비슷한 성격을 가지고있어요.`;
				const description = `${username}님은 ${characterInfo.title}와 가장 비슷합니다. ${metaDescription}`;
				const image = new URL(
					characterInfo.popupImage || '/images/og/og.png',
					window.location.origin
				).href;

				// 메타데이터 업데이트
				document.title = title;

				// 메타태그 업데이트
				const metaTags = [
					{ selector: 'meta[name="description"]', content: description },
					{ selector: 'meta[property="og:title"]', content: title },
					{ selector: 'meta[property="og:description"]', content: description },
					{ selector: 'meta[property="og:image"]', content: image },
					{ selector: 'meta[name="twitter:title"]', content: title },
					{ selector: 'meta[name="twitter:description"]', content: description },
					{ selector: 'meta[name="twitter:image"]', content: image }
				];

				metaTags.forEach(({ selector, content }) => {
					const element = document.querySelector(selector);
					if (element) {
						element.setAttribute('content', content);
					}
				});

				console.log('결과 페이지 메타데이터 업데이트 완료:', title);
			}
		}

		// 페이지 로드 시 즉시 실행
		updateResultMetaTags();

		// DOM 로드 완료 후 다시 실행 (메타태그가 늦게 생성되는 경우 대비)
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', updateResultMetaTags);
		}

		// URL 변경 감지 (브라우저 뒤로가기/앞으로가기 대응)
		let currentUrl = window.location.href;
		window.addEventListener('popstate', function () {
			if (window.location.href !== currentUrl) {
				currentUrl = window.location.href;
				setTimeout(updateResultMetaTags, 100);
			}
		});
	}
})();
