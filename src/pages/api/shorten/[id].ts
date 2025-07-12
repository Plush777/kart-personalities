import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

// GET: 단축 URL 리다이렉트
export const GET: APIRoute = async ({ params }) => {
	try {
		const shortId = params.id;

		if (!shortId) {
			return new Response('Short ID is required', { status: 400 });
		}

		// Supabase에서 URL 조회
		const { data: urlData, error } = await supabase
			.from('shortened_urls')
			.select('original_url')
			.eq('id', shortId)
			.single();

		if (error || !urlData) {
			console.log(`단축 URL을 찾을 수 없음: ${shortId}`);
			return new Response('URL not found', { status: 404 });
		}

		console.log(`단축 URL 리다이렉트: ${shortId} -> ${urlData.original_url}`);

		// 원본 URL로 리다이렉트
		return new Response(null, {
			status: 302,
			headers: {
				Location: urlData.original_url
			}
		});
	} catch (error) {
		console.error('URL 리다이렉트 중 오류 발생:', error);
		return new Response('Internal server error', { status: 500 });
	}
};
