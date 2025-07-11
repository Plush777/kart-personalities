import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const supabase = createClient(
  "https://dpgrwyuxzcmamyhwqcij.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZ3J3eXV4emNtYW15aHdxY2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNjU0MzUsImV4cCI6MjA2Njg0MTQzNX0.vHwuZhtdwg-Ntr5povcYq2TdKTA1eE9I8Vr1EmD8TjE"
);
function getSlug(slugParam) {
  if (!slugParam) return "/";
  if (Array.isArray(slugParam)) return "/" + slugParam.join("/");
  return "/" + slugParam;
}
const GET = async ({ params }) => {
  const slug = getSlug(params.slug);
  const { data } = await supabase.from("views").select("count").eq("slug", slug).single();
  return new Response(JSON.stringify({ count: data?.count ?? 0 }), {
    status: 200
  });
};
const POST = async ({ params }) => {
  const slug = getSlug(params.slug);
  await supabase.rpc("increment_view_count", { page_slug: slug });
  return new Response(JSON.stringify({ success: true }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
