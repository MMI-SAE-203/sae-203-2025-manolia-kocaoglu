import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CsmnnXvo.mjs';
import 'clsx';
import { c as getProgramme } from '../chunks/backend_QOz08JWN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Paris",
  };
  
  const formatter = new Intl.DateTimeFormat("fr-FR", options);
  
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const formattedDate = formatter.format(date);
  
    return formattedDate;
  }

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5"> <div class="lg:grid lg:grid-cols-3 lg:gap-8 w-full lg:space-y-0 group flex flex-col justify-start items-start gap-2 h-56 duration-500 relative rounded-lg text-white hover:-translate-y-2 hover:shadow-xl shadow-gray-300 mt-20 bg-cyan-700 p-5"> <div class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-8 -right-4 w-45 h-25 lg:w-1/2 lg:h-50 rounded-lg bg-gray-200 text-white"><img class="w-full h-full object-cover"${addAttribute(items.img, "src")} alt=""></div> <div class=""> <h2 class="text-2xl font-bold mb-2 text-white ">${items.type}</h2> <p class="text-white line-clamp-3 mt-5"> ${items.description} </p> </div> <div> <p>${formatDate(items.date_heure)}</p> <p>${formatDate(items.date2)}</p> </div> </div> </div>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Card.astro", void 0);

const imagehero = new Proxy({"src":"/_astro/programme.5oBy3nKN.webp","width":786,"height":570,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/programme.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const programmations = await getProgramme();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "Programmation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="p-5 mt-20">Découvrez la diversité de la programmation de Cinemagny, où le cinéma indépendant est à l'honneur. Que vous soyez passionné par les longs métrages, fasciné par les courts métrages, ou amateur de documentaires engagés, Cinemagny vous offre un voyage à travers le 7ᵉ art, avec des œuvres innovantes et des talents émergents.</p> ${programmations.map((prog) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...prog })}`)}<div class="p-5 mt-10"> <h2>Autres temps forts de Cinémagny</h2> <br> <p>En plus des projections de films, Cinemagny propose une série d'événements qui enrichiront l'expérience des festivaliers tout au long des cinq jours du festival.</p> <br> <h3>Ateliers et Masterclasses</h3> <br> <p>Tout au long du festival, participez à des ateliers animés par des professionnels du cinéma. Que vous soyez débutant ou cinéphile averti, ces sessions interactives vous permettront d’en apprendre plus sur les coulisses du cinéma, le processus de création d’un film indépendant, et les nouvelles tendances du secteur. Ne manquez pas la masterclass du vendredi après-midi, animée par un réalisateur primé.</p> <br> <h3>Rencontres et débats</h3> <br> <p>Chaque jour, nous organisons des rencontres avec les réalisateurs et les équipes des films présentés. Ces échanges se feront sous forme de tables rondes ou de séances Q&A après certaines projections. C'est une occasion unique de dialoguer avec des talents du cinéma indépendant et d’approfondir vos connaissances.</p> <br> <h3>Projections en plein air</h3><br> <p>Le samedi soir, vivez une expérience unique avec une projection en plein air dans un cadre naturel exceptionnel. Apportez vos couvertures et installez-vous confortablement pour une séance inoubliable sous les étoiles.</p> <br> <h3>Cérémonie de clôture</h3> <br> <p>Le dimanche 16 novembre 2025, clôturez en beauté avec la cérémonie de remise des prix, qui honorera les meilleurs films du festival. Un moment de célébration où le public, les réalisateurs et les invités pourront se retrouver et partager les meilleurs souvenirs du festival.</p> </div> <div class="flex justify-center mt-10"> <button class="cursor-pointer flex justify-center bg-cyan-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-cyan-800 hover:scale-105 duration-500 hover:ring-1 w-100">
PDF du Programme
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 animate-bounce"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path> </svg> </button> </div> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/programmation/index.astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/programmation/index.astro";
const $$url = "/programmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
