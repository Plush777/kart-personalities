import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const STORAGE_FILE = path.join(process.cwd(), "data", "shortened-urls.json");
let urlStore = /* @__PURE__ */ new Map();
async function loadUrlStore() {
  try {
    const data = await fs.readFile(STORAGE_FILE, "utf-8");
    const urls = JSON.parse(data);
    urlStore = new Map(Object.entries(urls));
    console.log(`URL 저장소 로드 완료: ${urlStore.size}개 URL`);
  } catch (error) {
    console.log("URL 저장소 파일이 없어 새로 생성합니다.");
    urlStore = /* @__PURE__ */ new Map();
  }
}
async function saveUrlStore() {
  try {
    const dataDir = path.dirname(STORAGE_FILE);
    await fs.mkdir(dataDir, { recursive: true });
    const urls = Object.fromEntries(urlStore);
    await fs.writeFile(STORAGE_FILE, JSON.stringify(urls, null, 2));
    console.log(`URL 저장소 저장 완료: ${urlStore.size}개 URL`);
  } catch (error) {
    console.error("URL 저장소 저장 중 오류:", error);
    throw error;
  }
}
const POST = async ({ request }) => {
  try {
    await loadUrlStore();
    const body = await request.json();
    const { originalUrl } = body;
    if (!originalUrl) {
      return new Response(JSON.stringify({ error: "Original URL is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    for (const [id, url] of urlStore.entries()) {
      if (url === originalUrl) {
        const shortUrl2 = `${new URL(request.url).origin}/api/shorten/${id}`;
        console.log(`기존 단축 URL 재사용: ${id} -> ${originalUrl}`);
        return new Response(
          JSON.stringify({
            shortUrl: shortUrl2,
            shortId: id,
            originalUrl
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    const shortId = generateShortId();
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
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("URL 단축 중 오류 발생:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
function generateShortId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
