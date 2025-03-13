import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CsmnnXvo.mjs';
/* empty css                                 */
import { $ as $$CardInvite } from '../chunks/CardInvite_qqnXe7mv.mjs';
import { i as imagehero } from '../chunks/apropos_Up-wV-6M.mjs';
import { b as getInvite } from '../chunks/backend_QOz08JWN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await getInvite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "Nos invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mt-20 p-5">Cinemagny est un festival unique dédié à la célébration du 7ᵉ art. À travers ce festival, venez découvrir nos invités d'honneur.</p> <h2 class="mt-10 p-5">Nos invités d'honneur pour cette édition de Cinémagny</h2> <p class="p-5">Pour cette édition de Cinémagny, nous avons l'honneur d'inviter quatre personnes ayants participés aux films que nous allons diffuser. Voilà nos invités les plus prisés.</p> <a href="invite/role/acteur"> <span class="w-40 flex items-center gap-2 px-8 py-3 bg-cyan-700 text-white rounded-[14px] bg-gradient-to-t from-cyan-700 to-cyan-900"> <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path>Acteurs</span> </a> <a href="invite/role/animateur" class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-cyan-900 to-cyan-700 active:scale-95"> <span class="w-40 flex items-center gap-2 px-8 py-3 bg-cyan-700 text-white rounded-[14px] bg-gradient-to-t from-cyan-700 to-cyan-900"> <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path>Animateurs</span> </a> <a href="invite/role/réalisateur" class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-cyan-900 to-cyan-700 active:scale-95"> <span class="w-40 flex items-center gap-2 px-8 py-3 bg-cyan-700 text-white rounded-[14px] bg-gradient-to-t from-cyan-700 to-cyan-900"> <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path>Réalisateurs</span> </a> <div class="p-5 lg:grid lg:grid-cols-2 lg:gap-8 justify-center"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> <p class="p-5">Nos invités aurons l'occasion d'animer et de présenter les activités qui seront proposées au festival. Ils seront présent pendant toute la durée de celui-ci, alors, qu'attendez vous ? Réservez vos billets dés maintenant !</p> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/index.astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
