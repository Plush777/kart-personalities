import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

// POST: URL 단축 생성
export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { originalUrl } = body;

		if (!originalUrl) {
			return new Response(JSON.stringify({ error: 'Original URL is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// 기존에 같은 URL이 있는지 확인
		const { data: existingUrl } = await supabase
			.from('shortened_urls')
			.select('id')
			.eq('original_url', originalUrl)
			.single();

		if (existingUrl) {
			const shortUrl = `${new URL(request.url).origin}/api/shorten/${existingUrl.id}`;
			console.log(`기존 단축 URL 재사용: ${existingUrl.id} -> ${originalUrl}`);
			return new Response(
				JSON.stringify({
					shortUrl,
					shortId: existingUrl.id,
					originalUrl
				}),
				{
					status: 200,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		// 새로운 짧은 ID 생성 (8자리 랜덤 문자열)
		const shortId = generateShortId();

		// URL 저장
		const { error } = await supabase.from('shortened_urls').insert({
			id: shortId,
			original_url: originalUrl
		});

		if (error) {
			console.error('Supabase 저장 중 오류:', error);
			throw error;
		}

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
