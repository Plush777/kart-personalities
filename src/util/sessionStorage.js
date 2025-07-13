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
