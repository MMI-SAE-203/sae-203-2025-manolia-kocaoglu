import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CfWLBaiC.mjs';
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
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/","cacheDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/node_modules/.astro/","outDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/dist/","srcDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/","publicDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/public/","buildClientDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/dist/","buildServerDir":"file:///Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/contacts","isIndex":true,"type":"page","pattern":"^\\/contacts\\/?$","segments":[[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacts/index.astro","pathname":"/contacts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/film","isIndex":true,"type":"page","pattern":"^\\/film\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/film/index.astro","pathname":"/film","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/invite/role/[role]","isIndex":false,"type":"page","pattern":"^\\/invite\\/role\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"role","dynamic":false,"spread":false}],[{"content":"role","dynamic":true,"spread":false}]],"params":["role"],"component":"src/pages/invite/role/[role].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/programmation","isIndex":true,"type":"page","pattern":"^\\/programmation\\/?$","segments":[[{"content":"programmation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programmation/index.astro","pathname":"/programmation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/propos","isIndex":true,"type":"page","pattern":"^\\/propos\\/?$","segments":[[{"content":"propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/propos/index.astro","pathname":"/propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUYIJ5_T.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/contacts/index.astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/film/index.astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/role/[role].astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/programmation/index.astro",{"propagation":"none","containsHead":true}],["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/propos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contacts/index@_@astro":"pages/contacts.astro.mjs","\u0000@astro-page:src/pages/film/index@_@astro":"pages/film.astro.mjs","\u0000@astro-page:src/pages/invite/role/[role]@_@astro":"pages/invite/role/_role_.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programmation/index@_@astro":"pages/programmation.astro.mjs","\u0000@astro-page:src/pages/propos/index@_@astro":"pages/propos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D428922Y.mjs","/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BmGpVNhe.mjs","/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/contact.CV2YQSow.webp","/_astro/apropos.VkDvzJWZ.webp","/_astro/triangle.CY0H0dR4.svg","/_astro/billet.xFY_JaOU.webp","/_astro/index.CG_MMRLP.webp","/_astro/programme.5oBy3nKN.webp","/_astro/affiche.B-CFVwSi.webp","/_astro/logo.T4NdHrZF.svg","/_astro/index.BUYIJ5_T.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9kBixJKoElE8N9KSHp+fiACt0UXyO85YG4tIA3U9dL8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
