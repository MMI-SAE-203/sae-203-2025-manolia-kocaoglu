import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CsmnnXvo.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container px-4 mx-auto"> <div class="mx-auto"> <div class="max-w-md mx-auto px-8 py-6 bg-cyan-800 rounded-lg shadow-lg"> <h2 class="text-2xl font-semibold mb-4 text-white">Contactez-nous</h2> <form> <div class="mb-4 text-white"> <label class="block  mb-1" for="name">Votre nom</label> <input class="w-full px-4 py-2 bg-cyan-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300" placeholder="Ex: John Doe" type="text"> </div> <div class="mb-4 text-white"> <label class="block mb-1" for="email">Votre Mail</label> <input class="w-full px-4 py-2 bg-cyan-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300" placeholder="Ex: johndoe@example.com" name="email" id="email" type="email"> </div> <div class="mb-4 text-white"> <label class="block mb-1" for="message">Votre message</label> <textarea class="w-full px-4 py-2 bg-cyan-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300" rows="4" placeholder="Entrez votre message ici" name="message" id="message"></textarea> </div> <button class="w-full bg-cyan-950 py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300 text-white" type="submit">
Envoyer
</button> </form> </div> </div> </div>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Contact.astro", void 0);

const imagehero = new Proxy({"src":"/_astro/contact.CV2YQSow.webp","width":786,"height":570,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/contact.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "src": imagehero, "alt": "", "texte": "Contacts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "Contact", $$Contact, {})} </div> <p class="p-5 mt-10">festival@cinemagny.fr <br> 03 xx xx xx xx <br> Giromagny, 90 200</p> ` })}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/contacts/index.astro", void 0);

const $$file = "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/pages/contacts/index.astro";
const $$url = "/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
