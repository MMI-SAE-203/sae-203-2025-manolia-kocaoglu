import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { c as createSvgComponent, $ as $$Layout } from '../chunks/Layout_CsmnnXvo.mjs';
/* empty css                                 */
import 'clsx';
import { d as getActivites, e as getPartenaire } from '../chunks/backend_QOz08JWN.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_DhLFMopo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10"> <div class="flex overflow-x-auto gap-4 px-4"> ${items?.map((item) => renderTemplate`<div class="min-w-[300px] bg-white rounded-lg shadow-lg p-4"${addAttribute(`background-image: url(${item.img}); background-size: cover;`, "style")}> <div class=" bg-opacity-50 p-4 text-white"> <h3 class="text-xl font-bold">${item.type}</h3> <p>${item.description}</p> </div> </div>`)} </div> </section>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Carousel.astro", void 0);

const imagehero = new Proxy({"src":"/_astro/index.CG_MMRLP.webp","width":786,"height":570,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/index.webp";
							}
							
							return target[name];
						}
					});

const $$ButtonInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-900 p-2 flex justify-center items-center font-extrabold"> <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-cyan-900"></div> <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-cyan-800"></div> <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-cyan-700"></div> <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-cyan-600"></div> <p class="z-10">En savoir plus</p> </button>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/ButtonInfo.astro", void 0);

const imagecool = new Proxy({"src":"/_astro/billet.xFY_JaOU.webp","width":434,"height":448,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/billet.webp";
							}
							
							return target[name];
						}
					});

const Triangle = createSvgComponent({"meta":{"src":"/_astro/triangle.CY0H0dR4.svg","width":127,"height":49,"format":"svg"},"attributes":{"mode":"inline","width":"127","height":"49","fill":"none"},"children":"<path d=\"M63.105 48.424l63.11-48.42H-.005l63.11 48.42z\" fill=\"#659AB4\" fill-opacity=\".4\" /><path d=\"M63.105 48.424l63.11-48.42H-.005l63.11 48.42z\" fill=\"#4B35FF\" fill-opacity=\".08\" />"});

const $$Astro$1 = createAstro();
const $$CarouselAccueil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CarouselAccueil;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10"> <div class="flex overflow-x-auto gap-4 px-4 "> ${items?.map((item) => renderTemplate`<div class="min-w-[300px] bg-white rounded-lg shadow-lg p-4"${addAttribute(`background-image: url(${item.img}); background-size: cover;`, "style")}> <div class=" bg-opacity-50 p-4 text-white"> <h3 class="text-xl font-bold">${item.nom}</h3> <p>${item.description}</p> </div> </div>`)} </div> </section>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/CarouselAccueil.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const activites = await getActivites();
  const partenaires = await getPartenaire();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "Bienvenue \xE0 Cin\xE9magny" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mt-20 p-5">Cinemagny est un festival unique dédié à la célébration du 7ᵉ art à travers le prisme de l’écologie et de l’innovation. Situé à Giromagny, entre montagnes et forêts, le festival vous invite à plonger dans un monde cinématographique riche et diversifié, où films indépendants, documentaires et animations se rencontrent pour éveiller vos sens et vos consciences.
<br> <br> Du 12 au 16 novembre 2025, Cinemagny mettra en lumière les talents émergents du cinéma indépendant, tout en rendant hommage aux figures emblématiques du cinéma engagé. Des avant-premières exclusives, des rétrospectives, et des rencontres avec des réalisateurs passionnés feront de cet événement un moment incontournable pour les cinéphiles, les professionnels de l’industrie, et le grand public.</p> <h2 class="text-center text-2xl font-bold text-black mt-15">les evenement</h2> ${renderComponent($$result2, "Carousel", $$Carousel, { "items": activites })} <div class="flex justify-center mb-10 mt-5"> ${renderComponent($$result2, "ButtonInfo", $$ButtonInfo, { "url": "/evenements", "text": "Voir tous les \xE9v\xE9nements" })} </div> <p class="p-5">Dans une démarche écoresponsable, nous vous invitons à participer à des projections, ateliers et échanges autour du cinéma, dans un cadre respectueux de la nature.
        Rejoignez-nous pour découvrir des œuvres innovantes et vivre une expérience enrichissante à la croisée du cinéma et de l'engagement écologique.</p> <h2 class="flex justify-center mt-10 mb-5">Achetez vos Billets</h2> <div class="flex justify-center"> <div class="relative w-40 h-auto"> <!-- Triangle centré --> ${renderComponent($$result2, "Triangle", Triangle, { "class": "animate-spin absolute inset-0 m-auto mt-7 [transform:rotateY(180deg)]" })} <!-- Image --> ${renderComponent($$result2, "Picture", $$Picture, { "src": imagecool, "alt": "", "class": "w-40 h-auto" })} </div> </div> <h2 class="mt-10 flex justify-center">Nos partenaires</h2> ${renderComponent($$result2, "CarouselAccueil", $$CarouselAccueil, { "items": partenaires })} ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/index.astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
