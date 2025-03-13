import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CsmnnXvo.mjs';
import { i as imagehero } from '../../chunks/apropos_Up-wV-6M.mjs';
/* empty css                                    */
import { a as getOneInvite } from '../../chunks/backend_QOz08JWN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await getOneInvite(id);
  if (!invite) {
    return Astro2.redirect("/invite");
  }
  console.log(invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "Nos invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="mt-20 p-5">${invite.prenom} ${invite.nom} </h1> <h2 class=" p-5">${invite.role}</h2> <div class="lg:flex lg:mt-10"> <div class="w-80 lg:flex lg:w-200"> <img class="p-5"${addAttribute(invite.img, "src")} alt=""> </div> <p class="text-left p-5">${invite.biographie}</p> </div> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/[id].astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
