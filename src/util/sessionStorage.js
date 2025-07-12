export function getUserName() {
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

export function setUserName(name) {
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
export function getQuizAnswers() {
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

export function setQuizAnswers(answers) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.setItem('quizAnswers', JSON.stringify(answers));
	} catch (error) {
		console.error('퀴즈 답변 저장 중 오류 발생:', error);
	}
}

// 퀴즈 진행 현황 관련 함수들
export function getCurrentQuestionIndex() {
	if (typeof window === 'undefined') {
		return 0;
	}

	try {
		const index = sessionStorage.getItem('currentQuestionIndex');
		return index ? parseInt(index) : 0;
	} catch (error) {
		console.error('현재 질문 인덱스 가져오기 중 오류 발생:', error);
		return 0;
	}
}

export function setCurrentQuestionIndex(index) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.setItem('currentQuestionIndex', index.toString());
	} catch (error) {
		console.error('현재 질문 인덱스 저장 중 오류 발생:', error);
	}
}

// 퀴즈 데이터 초기화
export function clearQuizData() {
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

// 결과 완료 상태 관리
export function setQuizCompleted(completed = true) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.setItem('quizCompleted', completed.toString());
	} catch (error) {
		console.error('퀴즈 완료 상태 저장 중 오류 발생:', error);
	}
}

export function getQuizCompleted() {
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

export function clearQuizCompleted() {
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
export function saveUserResult(username, characterInfo) {
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

export function getUserResult(username) {
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

export function getUserResults() {
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

// 세션스토리지 정리 (선택적)
export function clearUserResults() {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		sessionStorage.removeItem('userResults');
		console.log('사용자 결과 정리 완료');
	} catch (error) {
		console.error('사용자 결과 정리 중 오류 발생:', error);
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
				const compressedData = JSON.parse(utf8String);

				// 압축된 데이터 복원
				const parsed = decompressResultData(compressedData);
				console.log('압축된 URL에서 파싱된 결과:', parsed.title);
				return parsed;
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

// 클라이언트 사이드 URL 압축 함수 (배포 환경용)
function compressUrlForSharing(originalUrl) {
	try {
		// URL에서 해시 부분만 추출하여 압축
		const url = new URL(originalUrl);
		const hash = url.hash.substring(1); // # 제거

		if (hash) {
			// 해시 데이터가 있으면 더 짧은 형태로 압축
			// Base64를 더 짧은 형태로 변환 (URL 안전한 문자만 사용)
			const compressedHash = btoa(hash).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

			// 압축된 URL 생성
			const compressedUrl = `${url.origin}/result?u=${encodeURIComponent(url.searchParams.get('username') || '')}&h=${compressedHash}`;
			console.log('압축된 URL 생성:', compressedUrl);
			return compressedUrl;
		}

		return originalUrl;
	} catch (error) {
		console.error('URL 압축 중 오류 발생:', error);
		return originalUrl;
	}
}

// 결과 데이터를 URL 파라미터로 인코딩
export function encodeResultForUrl(characterInfo) {
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
