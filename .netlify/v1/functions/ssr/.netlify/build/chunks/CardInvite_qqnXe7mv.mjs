import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...items } = Astro2.props;
  console.log(items);
  return renderTemplate`${maybeRenderHead()}<div class="w-full lg:w-160 bg-gray-50 p-3 flex flex-col gap-1 mt-10 mb-10 justify-center"> <div class="duration-500 contrast-50 h-80 bg-gradient-to-bl from-black via-orange-900 to-sky-800  hover:contrast-100"> <img class="w-full h-full object-cover"${addAttribute(items.img, "src")} alt=""> </div> <div class="flex flex-col gap-4"> <div class="flex flex-row justify-between"> <div class="flex flex-col"> <span class="text-xl font-bold">${items.prenom} ${items.nom}</span> <br> </div> <span class="font-bold  text-cyan-900">${items.role}</span> </div> <a${addAttribute(`/invite/${items.id}`, "href")} class="hover:bg-sky-700 text-gray-50 bg-cyan-700 py-2 text-center block">En savoir plus</a> </div> </div>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/CardInvite.astro", void 0);

export { $$CardInvite as $ };
