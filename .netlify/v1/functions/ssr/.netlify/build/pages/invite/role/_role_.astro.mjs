import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { i as inviteByRole } from '../../../chunks/backend_QOz08JWN.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CsmnnXvo.mjs';
import { $ as $$CardInvite } from '../../../chunks/CardInvite_qqnXe7mv.mjs';
import { i as imagehero } from '../../../chunks/apropos_Up-wV-6M.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$role = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$role;
  const { role } = Astro2.params;
  const invites = await inviteByRole(role);
  if (!invites) {
    return Astro2.redirect("/invite");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": `Nos ${role}s` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-5 lg:grid lg:grid-cols-2 lg:gap-8 justify-center"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/role/[role].astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/invite/role/[role].astro";
const $$url = "/invite/role/[role]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$role,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
