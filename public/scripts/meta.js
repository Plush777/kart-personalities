// 결과 페이지 동적 메타데이터 업데이트 스크립트
(function () {
	// 결과 페이지에서만 메타데이터 동적 업데이트
	if (window.location.pathname === '/result') {
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

		let isUpdating = false; // 업데이트 중인지 확인하는 플래그
		let updateTimeout = null; // 디바운싱을 위한 타임아웃

		function updateResultMetaTags() {
			// 이미 업데이트 중이면 중단
			if (isUpdating) return;

			console.log('메타데이터 업데이트 시작...');

			// 1. URL 파라미터에서 결과 정보 확인
			const urlParams = new URLSearchParams(window.location.search);
			const urlUsername = urlParams.get('username') || '사용자';
			const resultParam = urlParams.get('result');

			console.log('URL 파라미터 확인:', {
				urlUsername,
				resultParam: resultParam ? '있음' : '없음'
			});

			let username = urlUsername;
			let characterInfo = null;

			// 2. URL 파라미터에서 결과 데이터 파싱
			if (resultParam) {
				try {
					// Base64 디코딩 (URL 안전 문자 처리)
					const base64 = resultParam.replace(/-/g, '+').replace(/_/g, '/');
					const paddedBase64 = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
					const decoded = atob(paddedBase64);
					const utf8String = decodeURIComponent(escape(decoded));
					characterInfo = JSON.parse(utf8String);

					console.log('URL 파라미터에서 캐릭터 정보 파싱 성공:', characterInfo);
				} catch (error) {
					console.log('URL 파라미터 파싱 실패:', error);

					// 대안: 직접 파싱 시도
					try {
						characterInfo = JSON.parse(decodeURIComponent(resultParam));
						console.log('대안 파싱 성공:', characterInfo);
					} catch (altError) {
						console.log('대안 파싱도 실패:', altError);
					}
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
						console.log('sessionStorage에서 캐릭터 정보 가져옴:', characterInfo);
					}
				} catch (error) {
					console.log('sessionStorage에서 결과 가져오기 실패:', error);
				}
			}

			// 4. 결과 정보가 있으면 메타데이터 업데이트
			if (characterInfo && characterInfo.title) {
				isUpdating = true; // 업데이트 시작

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

				console.log('메타데이터 설정:', { title, description, image });

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

				let updatedCount = 0;
				metaTags.forEach(({ selector, content }) => {
					const element = document.querySelector(selector);
					if (element) {
						element.setAttribute('content', content);
						updatedCount++;
					} else {
						console.log('메타태그를 찾을 수 없음:', selector);
					}
				});

				console.log(
					`결과 페이지 메타데이터 업데이트 완료: ${updatedCount}개 태그 업데이트됨`,
					title
				);

				// 업데이트 완료 후 플래그 해제 (약간의 지연)
				setTimeout(() => {
					isUpdating = false;
				}, 100);
			} else {
				console.log('캐릭터 정보를 찾을 수 없음:', { characterInfo, username });
			}
		}

		// 디바운싱된 업데이트 함수
		function debouncedUpdate() {
			if (updateTimeout) {
				clearTimeout(updateTimeout);
			}
			updateTimeout = setTimeout(updateResultMetaTags, 50);
		}

		// 여러 타이밍으로 메타데이터 업데이트 시도
		function attemptUpdate() {
			updateResultMetaTags();
		}

		// 즉시 실행
		attemptUpdate();

		// DOM 로드 완료 후 실행
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', attemptUpdate);
		}

		// 여러 타이밍으로 시도 (메타태그가 늦게 생성되는 경우 대비)
		setTimeout(attemptUpdate, 100);
		setTimeout(attemptUpdate, 500);
		setTimeout(attemptUpdate, 1000);

		// MutationObserver로 DOM 변경 감지 (무한 루프 방지)
		if (typeof MutationObserver !== 'undefined') {
			const observer = new MutationObserver(function (mutations) {
				// 메타데이터 업데이트로 인한 변경인지 확인
				let shouldUpdate = false;
				mutations.forEach(function (mutation) {
					if (mutation.type === 'childList') {
						// head 태그에 새로운 요소가 추가되면 메타데이터 업데이트 시도
						if (mutation.target.tagName === 'HEAD' || mutation.target.closest('head')) {
							// 메타태그 변경이 아닌 다른 요소 추가인 경우에만 업데이트
							const addedNodes = Array.from(mutation.addedNodes);
							const hasNonMetaChanges = addedNodes.some(
								(node) =>
									node.nodeType === Node.ELEMENT_NODE &&
									node.tagName !== 'META' &&
									!node.hasAttribute('content')
							);

							if (hasNonMetaChanges) {
								shouldUpdate = true;
							}
						}
					}
				});

				if (shouldUpdate && !isUpdating) {
					debouncedUpdate();
				}
			});

			// head 태그 감시
			const head = document.querySelector('head');
			if (head) {
				observer.observe(head, {
					childList: true,
					subtree: true
				});
			}
		}

		// URL 변경 감지 (브라우저 뒤로가기/앞으로가기 대응)
		let currentUrl = window.location.href;
		window.addEventListener('popstate', function () {
			if (window.location.href !== currentUrl) {
				currentUrl = window.location.href;
				setTimeout(attemptUpdate, 100);
			}
		});

		// 페이지 가시성 변경 시에도 업데이트 (탭 전환 등)
		document.addEventListener('visibilitychange', function () {
			if (!document.hidden) {
				setTimeout(attemptUpdate, 100);
			}
		});
	}
})();
