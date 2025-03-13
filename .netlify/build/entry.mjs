import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D428922Y.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacts.astro.mjs');
const _page2 = () => import('./pages/film.astro.mjs');
const _page3 = () => import('./pages/invite/role/_role_.astro.mjs');
const _page4 = () => import('./pages/invite/_id_.astro.mjs');
const _page5 = () => import('./pages/invite.astro.mjs');
const _page6 = () => import('./pages/programmation.astro.mjs');
const _page7 = () => import('./pages/propos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacts/index.astro", _page1],
    ["src/pages/film/index.astro", _page2],
    ["src/pages/invite/role/[role].astro", _page3],
    ["src/pages/invite/[id].astro", _page4],
    ["src/pages/invite/index.astro", _page5],
    ["src/pages/programmation/index.astro", _page6],
    ["src/pages/propos/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bbc2d239-d388-4e74-a377-b1c373b1e5a6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
