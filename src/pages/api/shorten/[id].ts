import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false;

// 파일 기반 URL 저장소
const STORAGE_FILE = path.join(process.cwd(), 'data', 'shortened-urls.json');

// 저장소 로드
async function loadUrlStore() {
	try {
		const data = await fs.readFile(STORAGE_FILE, 'utf-8');
		const urls = JSON.parse(data);
		return new Map(Object.entries(urls));
	} catch (error) {
		// 파일이 없으면 빈 저장소로 시작
		return new Map();
	}
}

// GET: 단축 URL 리다이렉트
export const GET: APIRoute = async ({ params }) => {
	try {
		const urlStore = await loadUrlStore();

		const shortId = params.id;

		if (!shortId) {
			return new Response('Short ID is required', { status: 400 });
		}

		const originalUrl = urlStore.get(shortId);

		if (!originalUrl) {
			console.log(`단축 URL을 찾을 수 없음: ${shortId}`);
			return new Response('URL not found', { status: 404 });
		}

		console.log(`단축 URL 리다이렉트: ${shortId} -> ${originalUrl}`);

		// 원본 URL로 리다이렉트
		return new Response(null, {
			status: 302,
			headers: {
				Location: originalUrl
			}
		});
	} catch (error) {
		console.error('URL 리다이렉트 중 오류 발생:', error);
		return new Response('Internal server error', { status: 500 });
	}
};
