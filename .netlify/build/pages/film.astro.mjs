import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CsmnnXvo.mjs';
import { g as getFilmsByType } from '../chunks/backend_QOz08JWN.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const imagehero = new Proxy({"src":"/_astro/affiche.B-CFVwSi.webp","width":786,"height":570,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/affiche.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CarouselFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarouselFilm;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10"> <div class="flex overflow-x-auto gap-4 px-4 "> ${items?.map((item) => renderTemplate`<div class="min-w-[300px] bg-white rounded-lg shadow-lg p-4"${addAttribute(`background-image: url(${item.img}); background-size: cover;`, "style")}> <div class=" bg-opacity-50 p-4 text-white"> <h3 class="text-xl font-bold">${item.titre}</h3> <p>${item.description}</p> </div> </div>`)} </div> </section>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/CarouselFilm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const animations = await getFilmsByType("animation");
  const documentaires = await getFilmsByType("documentaires");
  const courts_metrages = await getFilmsByType("courts_metrages");
  const longs_metrages = await getFilmsByType("longs_metrages");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "\xC0 l'affiche" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mt-25 p-5">Plongez au cœur de la programmation de Cinemagny, où des films indépendants, des documentaires captivants et des animations innovantes se rencontrent. Découvrez des œuvres uniques et inspirantes, portées par des réalisateurs émergents du monde entier, pour un festival qui célèbre la diversité et la créativité du 7ᵉ art.</p> <h2 class="mt-20 p-5">Longs métrages</h2> ${renderComponent($$result2, "CarouselFilm", $$CarouselFilm, { "items": longs_metrages })} <h2 class="p-5">Courts métrages</h2> ${renderComponent($$result2, "CarouselFilm", $$CarouselFilm, { "items": courts_metrages })} <h2 class="p-5">Documentaires</h2> ${renderComponent($$result2, "CarouselFilm", $$CarouselFilm, { "items": documentaires })} <h2 class="p-5">Films d'animation</h2> <div class="lg:flex"> ${renderComponent($$result2, "CarouselFilm", $$CarouselFilm, { "items": animations })} <p class="ml-5 mr-5 lg:mt-10">La programmation de Cinemagny 2025 vous invite à découvrir des œuvres uniques, portées par des réalisateurs engagés et des récits qui repoussent les limites de la créativité. Des drames poignants aux documentaires inspirants, en passant par des courts-métrages captivants et des films d'animation enchanteurs, chaque projection est une opportunité de plonger dans un univers artistique riche et diversifié. Nous vous attendons pour partager ensemble ces moments de cinéma exceptionnels, où chaque film est une nouvelle fenêtre ouverte sur le monde.</p> </div> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/film/index.astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/film/index.astro";
const $$url = "/film";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
