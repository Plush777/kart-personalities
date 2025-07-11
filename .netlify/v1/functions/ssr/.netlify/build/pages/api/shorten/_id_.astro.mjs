import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const STORAGE_FILE = path.join(process.cwd(), "data", "shortened-urls.json");
async function loadUrlStore() {
  try {
    const data = await fs.readFile(STORAGE_FILE, "utf-8");
    const urls = JSON.parse(data);
    return new Map(Object.entries(urls));
  } catch (error) {
    return /* @__PURE__ */ new Map();
  }
}
const GET = async ({ params }) => {
  try {
    const urlStore = await loadUrlStore();
    const shortId = params.id;
    if (!shortId) {
      return new Response("Short ID is required", { status: 400 });
    }
    const originalUrl = urlStore.get(shortId);
    if (!originalUrl) {
      console.log(`단축 URL을 찾을 수 없음: ${shortId}`);
      return new Response("URL not found", { status: 404 });
    }
    console.log(`단축 URL 리다이렉트: ${shortId} -> ${originalUrl}`);
    return new Response(null, {
      status: 302,
      headers: {
        Location: originalUrl
      }
    });
  } catch (error) {
    console.error("URL 리다이렉트 중 오류 발생:", error);
    return new Response("Internal server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
