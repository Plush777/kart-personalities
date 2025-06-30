import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

function getSlug(slugParam: string | string[] | undefined): string {
	if (!slugParam) return '/';
	if (Array.isArray(slugParam)) return '/' + slugParam.join('/');
	return '/' + slugParam;
}

export const GET: APIRoute = async ({ params }) => {
	const slug = getSlug(params.slug);
	const { data } = await supabase.from('views').select('count').eq('slug', slug).single();

	return new Response(JSON.stringify({ count: data?.count ?? 0 }), {
		status: 200
	});
};

export const POST: APIRoute = async ({ params }) => {
	const slug = getSlug(params.slug);
	await supabase.rpc('increment_view_count', { page_slug: slug });

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
};
