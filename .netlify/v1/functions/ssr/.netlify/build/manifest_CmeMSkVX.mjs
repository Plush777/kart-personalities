import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_QP9tuB3E.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/","cacheDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/node_modules/.astro/","outDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/dist/","srcDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/src/","publicDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/public/","buildClientDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/dist/","buildServerDir":"file:///C:/myProjects/kart-character-test/kart-character-personality-test-app/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/shorten/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/shorten\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"shorten","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/shorten/[id].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/shorten","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/shorten\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"shorten","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/shorten.ts","pathname":"/api/shorten","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/views/[slug]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/views\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"views","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/api/views/[slug].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0wvt43m.css"},{"type":"inline","content":"/*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */.options-list button[data-v-18969b47]{word-break:keep-all}.question-content[data-v-46d059e6]{width:100%}.fade-enter-active[data-v-46d059e6],.fade-leave-active[data-v-46d059e6]{transition:opacity .3s ease}.fade-enter-from[data-v-46d059e6],.fade-leave-to[data-v-46d059e6]{opacity:0}[v-cloak][data-v-46d059e6]{display:none}\n"}],"routeData":{"route":"/question","isIndex":true,"type":"page","pattern":"^\\/question\\/?$","segments":[[{"content":"question","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/question/index.astro","pathname":"/question","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0wvt43m.css"}],"routeData":{"route":"/result","isIndex":true,"type":"page","pattern":"^\\/result\\/?$","segments":[[{"content":"result","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/result/index.astro","pathname":"/result","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0wvt43m.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/question/index.astro",{"propagation":"none","containsHead":true}],["C:/myProjects/kart-character-test/kart-character-personality-test-app/src/pages/result/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/shorten/[id]@_@ts":"pages/api/shorten/_id_.astro.mjs","\u0000@astro-page:src/pages/api/shorten@_@ts":"pages/api/shorten.astro.mjs","\u0000@astro-page:src/pages/api/views/[slug]@_@ts":"pages/api/views/_slug_.astro.mjs","\u0000@astro-page:src/pages/question/index@_@astro":"pages/question.astro.mjs","\u0000@astro-page:src/pages/result/index@_@astro":"pages/result.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CmeMSkVX.mjs","C:/myProjects/kart-character-test/kart-character-personality-test-app/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/myProjects/kart-character-test/kart-character-personality-test-app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BS3sk9mY.mjs","@/components/animation/CharacterIntro.vue":"_astro/CharacterIntro.PF4LpjV5.js","@/components/viewCount/ViewCount.vue":"_astro/ViewCount.CiEjiDYM.js","@/components/main/StartForm.vue":"_astro/StartForm.BxoX3QEZ.js","@astrojs/vue/client.js":"_astro/client.ysp5Zto7.js","@/components/question/Question.vue":"_astro/Question.Dc46lxq5.js","@/layouts/MainLayout.vue":"_astro/MainLayout.CZ-7AiQs.js","@/layouts/Footer.vue":"_astro/Footer.D8Wodk6p.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.C0wvt43m.css","/fonts/Recipekorea.woff","/fonts/Recipekorea.woff2","/scripts/console.js","/scripts/favi.js","/_astro/Button.DUTTdNI9.js","/_astro/CharacterIntro.PF4LpjV5.js","/_astro/CharacterProfile.CZ_iaNQt.js","/_astro/client.ysp5Zto7.js","/_astro/Footer.D8Wodk6p.js","/_astro/index.BtL8PmB0.css","/_astro/MainLayout.CZ-7AiQs.js","/_astro/Question.Dc46lxq5.js","/_astro/runtime-core.esm-bundler.BUyVRQdb.js","/_astro/runtime-dom.esm-bundler.DakDQQLM.js","/_astro/SectionWrapper.B1IOsPp_.js","/_astro/StartForm.BxoX3QEZ.js","/_astro/ViewCount.CiEjiDYM.js","/_astro/_plugin-vue_export-helper.DlAUqK2U.js","/favicon/16x16/img-bazzi-face.png","/favicon/16x16/img-dao-face.png","/favicon/16x16/img-diz-face.png","/favicon/32x32/img-bazzi-face.png","/favicon/32x32/img-dao-face.png","/favicon/32x32/img-diz-face.png","/images/characters/img-bazzi.webp","/images/characters/img-dao.webp","/images/characters/img-diz.webp","/images/characters/img-erini.webp","/images/characters/img-ethen.webp","/images/characters/img-keffy.webp","/images/characters/img-kris.webp","/images/characters/img-marid.webp","/images/characters/img-mos.webp","/images/characters/img-tiera.webp","/images/characters/img-uni.webp","/images/face/img-bazzi-face.webp","/images/face/img-dao-face.webp","/images/face/img-diz-face.webp","/images/og/og.png","/images/profile/img-bazzi-profile.webp","/images/profile/img-dao-profile.webp","/images/profile/img-diz-profile.webp","/images/profile/img-erini-profile.webp","/images/profile/img-ethen-profile.webp","/images/profile/img-keffy-profile.webp","/images/profile/img-kris-profile.webp","/images/profile/img-marid-profile.webp","/images/profile/img-mos-profile.webp","/images/profile/img-tiera-profile.webp","/images/profile/img-uni-profile.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zfOOUWdRNsVrWUt6Cv29qvHQ99RhtHofuiAiELJ9Xv0=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\myProjects\\kart-character-test\\kart-character-personality-test-app\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
