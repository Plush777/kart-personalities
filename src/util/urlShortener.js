// URL 단축 함수 (서버 API 사용)
export async function shortenUrl(originalUrl) {
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

// URL에서 username 파라미터 가져오기
export function getUsernameFromUrl() {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		const urlParams = new URLSearchParams(window.location.search);

		// 압축된 URL 파라미터 확인 (배포 환경용)
		const compressedUsername = urlParams.get('u');
		if (compressedUsername) {
			return decodeURIComponent(compressedUsername);
		}

		// 기존 username 파라미터 확인
		return urlParams.get('username');
	} catch (error) {
		console.error('URL 파라미터 파싱 중 오류 발생:', error);
		return null;
	}
}

// URL에서 결과 데이터 가져오기 (해시 프래그먼트 사용)
export function getResultFromUrl() {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		// 압축된 URL 파라미터 확인 (배포 환경용)
		const urlParams = new URLSearchParams(window.location.search);
		const compressedHash = urlParams.get('h');

		if (compressedHash) {
			// 압축된 해시를 원래 형태로 복원
			const hash = compressedHash.replace(/-/g, '+').replace(/_/g, '/');

			// 패딩 추가
			const paddedHash = hash + '='.repeat((4 - (hash.length % 4)) % 4);

			try {
				// Base64 디코딩 후 UTF-8 디코딩, JSON 파싱
				const decoded = atob(paddedHash);
				const utf8String = decodeURIComponent(escape(decoded));
				const resultData = JSON.parse(utf8String);
				console.log('압축된 URL에서 파싱된 결과:', resultData.title);
				return resultData;
			} catch (error) {
				console.error('압축된 해시 파싱 중 오류:', error);
			}
		}

		// 기존 해시 프래그먼트에서 결과 데이터 확인
		const hash = window.location.hash.substring(1); // # 제거

		console.log('=== URL 해시 디버깅 ===');
		console.log('현재 URL:', window.location.href);
		console.log('해시 프래그먼트:', window.location.hash);
		console.log('해시 데이터:', hash ? '있음' : '없음');

		if (hash) {
			// Base64 디코딩 후 UTF-8 디코딩, JSON 파싱
			const decoded = atob(hash);
			const utf8String = decodeURIComponent(escape(decoded));
			const resultData = JSON.parse(utf8String);
			console.log('파싱된 결과:', resultData.title);
			return resultData;
		}

		return null;
	} catch (error) {
		console.error('URL에서 결과 데이터 파싱 중 오류 발생:', error);
		return null;
	}
}

// 결과 데이터를 URL 파라미터로 인코딩
export function encodeResultForUrl(characterInfo) {
	if (typeof window === 'undefined') {
		return '';
	}

	try {
		// JSON을 문자열로 변환 후 UTF-8 인코딩으로 Base64 변환
		const jsonString = JSON.stringify(characterInfo);
		const utf8String = unescape(encodeURIComponent(jsonString));
		return btoa(utf8String);
	} catch (error) {
		console.error('결과 데이터 인코딩 중 오류 발생:', error);
		return '';
	}
}
