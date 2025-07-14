// 환경에 따른 로깅 제어 유틸리티
const isDevelopment = import.meta.env.DEV;
const isLocalhost =
	typeof window !== 'undefined' &&
	(window.location.hostname === 'localhost' ||
		window.location.hostname === '127.0.0.1' ||
		window.location.hostname.includes('localhost'));

// 환경 변수로 로깅 제어 (기본값: 개발 환경에서만 활성화)
const enableLogging =
	import.meta.env.VITE_ENABLE_LOGGING !== 'false' && (isDevelopment || isLocalhost);

// 개발 환경이나 로컬호스트에서만 로그를 출력
export const logger = {
	log: (...args) => {
		if (enableLogging) {
			console.log(...args);
		}
	},

	warn: (...args) => {
		if (enableLogging) {
			console.warn(...args);
		}
	},

	error: (...args) => {
		// 에러는 항상 출력 (프로덕션에서도 중요)
		console.error(...args);
	},

	info: (...args) => {
		if (enableLogging) {
			console.info(...args);
		}
	},

	debug: (...args) => {
		if (enableLogging) {
			console.debug(...args);
		}
	}
};

// 기존 console.log를 대체하는 함수
export const devLog = (...args) => {
	if (enableLogging) {
		console.log(...args);
	}
};

// 환경 정보 출력 (개발 시에만)
export const logEnvironment = () => {
	if (enableLogging) {
		console.log('=== 환경 정보 ===');
		console.log('개발 모드:', isDevelopment);
		console.log('로컬호스트:', isLocalhost);
		console.log('환경:', import.meta.env.MODE);
		console.log('로깅 활성화:', enableLogging);
		console.log('================');
	}
};

// 로깅 상태 확인 함수
export const isLoggingEnabled = () => enableLogging;
