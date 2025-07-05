import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false;

// 파일 기반 URL 저장소
const STORAGE_FILE = path.join(process.cwd(), 'data', 'shortened-urls.json');

// URL 저장소 초기화
let urlStore = new Map<string, string>();

// 저장소 로드
async function loadUrlStore() {
	try {
		const data = await fs.readFile(STORAGE_FILE, 'utf-8');
		const urls = JSON.parse(data);
		urlStore = new Map(Object.entries(urls));
		console.log(`URL 저장소 로드 완료: ${urlStore.size}개 URL`);
	} catch (error) {
		// 파일이 없으면 빈 저장소로 시작
		console.log('URL 저장소 파일이 없어 새로 생성합니다.');
		urlStore = new Map();
	}
}

// 저장소 저장
async function saveUrlStore() {
	try {
		// data 디렉토리가 없으면 생성
		const dataDir = path.dirname(STORAGE_FILE);
		await fs.mkdir(dataDir, { recursive: true });

		const urls = Object.fromEntries(urlStore);
		await fs.writeFile(STORAGE_FILE, JSON.stringify(urls, null, 2));
		console.log(`URL 저장소 저장 완료: ${urlStore.size}개 URL`);
	} catch (error) {
		console.error('URL 저장소 저장 중 오류:', error);
		throw error;
	}
}

// POST: URL 단축 생성
export const POST: APIRoute = async ({ request }) => {
	try {
		await loadUrlStore();

		const body = await request.json();
		const { originalUrl } = body;

		if (!originalUrl) {
			return new Response(JSON.stringify({ error: 'Original URL is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// 기존에 같은 URL이 있는지 확인
		for (const [id, url] of urlStore.entries()) {
			if (url === originalUrl) {
				const shortUrl = `${new URL(request.url).origin}/api/shorten/${id}`;
				console.log(`기존 단축 URL 재사용: ${id} -> ${originalUrl}`);
				return new Response(
					JSON.stringify({
						shortUrl,
						shortId: id,
						originalUrl
					}),
					{
						status: 200,
						headers: { 'Content-Type': 'application/json' }
					}
				);
			}
		}

		// 새로운 짧은 ID 생성 (8자리 랜덤 문자열)
		const shortId = generateShortId();

		// URL 저장
		urlStore.set(shortId, originalUrl);
		await saveUrlStore();

		const shortUrl = `${new URL(request.url).origin}/api/shorten/${shortId}`;

		console.log(`새 단축 URL 생성: ${shortId} -> ${originalUrl}`);

		return new Response(
			JSON.stringify({
				shortUrl,
				shortId,
				originalUrl
			}),
			{
				status: 201,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (error) {
		console.error('URL 단축 중 오류 발생:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

// 짧은 ID 생성 함수
function generateShortId(): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < 8; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}
