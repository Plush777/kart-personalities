export function getUserName() {
	// SSR 환경에서는 window 객체가 없으므로 체크
	if (typeof window === 'undefined') {
		return '';
	}

	try {
		return localStorage.getItem('userName') || '';
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
		localStorage.setItem('userName', name);
	} catch (error) {
		console.error('localStorage 설정 중 오류 발생:', error);
	}
}

export function removeUserName() {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		localStorage.removeItem('userName');
	} catch (error) {
		console.error('localStorage 삭제 중 오류 발생:', error);
	}
}
