import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot, r as renderTemplate, u as unescapeHTML, s as spreadAttributes, a as renderComponent, f as renderScript, g as renderHead } from './astro/server_CfWLBaiC.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from './_astro_assets_DhLFMopo.mjs';

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "medium",
    url = "#",
    text = ""
  } = Astro2.props;
  const variantClass = {
    default: "border-sky-900 bg-indigo-50",
    dark: "border border-cyan-900 bg-cyan-700 text-white",
    outlined: "border-cyan-900 bg-red"
  };
  const sizeClass = {
    small: "px-4 py-2.5 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-base"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`inline-flex items-center gap-2 text-white border-2 font-bold rounded-lg transition duration-300 ease-in-out ${variantClass[variant]} ${sizeClass[size]}`, "class")}> ${renderSlot($$result, $$slots["default"])} ${text} </a>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Button.astro", void 0);

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const IconLogo = createSvgComponent({"meta":{"src":"/_astro/logo.T4NdHrZF.svg","width":30,"height":33,"format":"svg"},"attributes":{"mode":"inline","width":"30","height":"33","viewBox":"0 0 30 33","fill":"none"},"children":"\n<path d=\"M29.8061 23.8952C29.8624 23.7411 29.8061 23.5562 29.6653 23.4945C29.5246 23.4329 29.3557 23.4945 29.2995 23.6486C28.9899 24.4191 28.1737 24.8197 27.47 24.5115C27.076 24.3266 26.7945 24.0184 26.7101 23.6178C26.6257 23.3713 26.3724 23.3096 26.2316 23.4945C25.8376 23.9876 25.2184 24.1109 24.6555 23.8952C24.4867 23.8335 24.2896 23.7103 24.1771 23.5254C24.0926 23.4021 23.783 23.4021 23.6986 23.6178C23.5579 23.9876 23.3046 24.3266 22.9387 24.5115C22.4321 24.7272 21.8692 24.6348 21.447 24.2341C21.3344 24.1417 21.1655 24.1417 21.053 24.2341C20.9404 24.3574 20.7996 24.4191 20.6589 24.5115C20.3163 24.6656 19.932 24.6656 19.5894 24.5115C19.2517 24.3574 18.9984 24.0801 18.8576 23.7103C18.7451 23.3713 18.4073 23.4329 18.351 23.4945C18.2103 23.6486 18.0414 23.8027 17.8444 23.8952C17.3097 24.1417 16.6905 23.9876 16.2683 23.4945C16.212 23.4329 15.9306 23.3405 15.7898 23.587C15.6491 23.8643 15.4521 24.2958 15.0018 24.4807C14.6922 24.6348 14.3263 24.6348 13.9885 24.5115C13.8478 24.4499 13.679 24.5423 13.6227 24.6964C13.5664 24.8505 13.6508 25.0354 13.7915 25.097C14.2419 25.2819 14.7485 25.2511 15.1988 25.0662C15.5647 24.8813 15.8743 24.5731 16.0994 24.2033C16.6623 24.6348 17.366 24.758 18.0133 24.4499C18.154 24.3882 18.2666 24.2958 18.3792 24.2033C18.5762 24.604 18.9139 24.8813 19.2798 25.0662C19.5331 25.1895 19.7864 25.2203 20.0397 25.2203C20.293 25.2203 20.5745 25.1587 20.8278 25.0354C20.9404 24.9738 21.053 24.9121 21.1937 24.8197C21.7566 25.2511 22.4321 25.3436 23.0794 25.0354C23.4734 24.8505 23.783 24.5423 23.98 24.1725C24.0926 24.265 24.2333 24.3574 24.3741 24.4191C25.0214 24.6964 25.725 24.5731 26.2598 24.1725C26.4568 24.5423 26.7664 24.8505 27.1886 25.0354C28.2581 25.4976 29.3839 24.9738 29.8061 23.8952ZM22.9105 13.6023C23.3046 13.7872 23.6142 14.1262 23.7267 14.6193C23.783 14.8658 24.0363 14.8658 24.1208 14.835C24.4585 14.6809 24.8244 14.6809 25.1621 14.835C25.528 15.0199 25.8095 15.3589 25.9783 15.7595C26.0346 15.8828 26.1472 15.9752 26.2598 15.9444C26.4287 15.9136 26.6257 15.9444 26.8508 16.0369C27.5263 16.345 27.8922 17.2079 27.6389 18.0091C27.5545 18.2557 27.8078 18.4406 27.9485 18.4098C28.1174 18.3789 28.3144 18.4098 28.5395 18.5022C29.2432 18.8412 29.6091 19.7349 29.3276 20.5053C29.215 20.7827 29.0462 21.0292 28.821 21.2141C28.5958 21.399 28.7366 21.6763 28.821 21.738C29.0743 21.9229 29.2713 22.2002 29.3557 22.5084C29.3839 22.6317 29.4965 22.7549 29.7216 22.6933C29.8624 22.6625 29.9468 22.4468 29.8905 22.2927C29.8061 21.9845 29.6372 21.7072 29.412 21.4606C29.6091 21.2449 29.7498 21.0292 29.8624 20.7518C30.2564 19.6732 29.7779 18.4098 28.7647 17.9475C28.5958 17.8859 28.427 17.8242 28.2862 17.8242C28.427 16.8381 27.9203 15.8828 27.076 15.4821C26.8227 15.4205 26.6257 15.3589 26.4005 15.3589C26.1754 14.8658 25.8376 14.496 25.3591 14.2803C24.9651 14.0954 24.5429 14.0646 24.1489 14.1878C23.9519 13.664 23.5579 13.2633 23.0794 13.0476C22.9387 12.986 22.7698 13.0784 22.7135 13.2325C22.7135 13.3866 22.7698 13.5407 22.9105 13.6023ZM13.116 21.5223C12.5531 22.1386 12.3561 23.0631 12.6657 23.8952C12.722 24.0184 12.8627 24.1417 13.0316 24.0492C13.1723 23.9876 13.2568 23.8027 13.1723 23.6486C12.919 22.9707 13.1442 22.231 13.679 21.7688C13.876 21.5839 13.7634 21.3065 13.679 21.2757C13.4256 21.0908 13.2568 20.8443 13.1442 20.5669C13.0034 20.1918 13.0034 19.771 13.1442 19.3959C13.2849 19.0261 13.5664 18.7179 13.9323 18.5638C14.1574 18.4714 14.3544 18.4406 14.6077 18.4406C14.861 18.4406 14.9173 18.1324 14.861 18.04C14.6077 17.2695 14.9736 16.4067 15.6772 16.0985C15.8743 16.006 16.0713 15.9752 16.2683 16.006C16.409 16.0369 16.5216 15.9444 16.5779 15.7903C16.6905 15.3897 16.9719 15.0507 17.366 14.8658C17.7318 14.7117 18.0696 14.7425 18.4073 14.8658C18.6606 14.9583 18.7732 14.7425 18.8013 14.6809C18.9139 14.2187 19.2235 13.8489 19.6176 13.6331C20.096 13.4174 20.6589 13.5099 21.053 13.9105C21.1655 14.0029 21.3063 14.0029 21.4188 13.9105C21.5596 13.7872 21.7003 13.6948 21.8692 13.6023C22.0099 13.5407 22.0943 13.3558 22.038 13.2017C21.9817 13.0476 21.8129 12.9552 21.6721 13.0168C21.5314 13.0784 21.3907 13.1709 21.25 13.2633C20.6871 12.8319 19.9834 12.7394 19.3924 13.0476C18.9421 13.2633 18.548 13.664 18.351 14.1878C17.957 14.0954 17.5348 14.1262 17.1408 14.2803C16.6623 14.496 16.2964 14.8658 16.0994 15.3589C15.8743 15.3589 15.6491 15.4205 15.4521 15.513C14.5796 15.8828 14.1011 16.8997 14.2419 17.855C14.073 17.8859 13.9323 17.9167 13.7634 18.0091C13.2568 18.2249 12.8909 18.6255 12.6657 19.1494C12.4687 19.6732 12.4687 20.2588 12.6657 20.7827C12.7783 21.06 12.919 21.3065 13.116 21.5223ZM20.1242 27.7165C20.293 27.7165 20.4056 27.5932 20.4056 27.4083V26.114C20.4056 25.9291 20.293 25.8058 20.1242 25.8058C19.9553 25.8058 19.8427 25.9291 19.8427 26.114V27.4083C19.8427 27.5624 19.9553 27.7165 20.1242 27.7165ZM29.6935 31.3837H28.5677C28.3988 31.3837 28.2862 31.5069 28.2862 31.6918C28.2862 31.8767 28.3988 32 28.5677 32H29.6935C29.8624 32 29.9749 31.8767 29.9749 31.6918C29.9749 31.5069 29.8624 31.3837 29.6935 31.3837ZM27.4419 31.3837H23.6142C22.995 30.6441 22.6572 29.7196 22.6572 28.7026V26.0832C22.6572 25.8983 22.5446 25.775 22.3758 25.775C22.2069 25.775 22.0943 25.8983 22.0943 26.0832V28.7026C22.0943 29.6887 22.3758 30.6132 22.8824 31.3837H19.6176C20.1242 30.6132 20.4056 29.6887 20.4056 28.7026C20.4056 28.5177 20.293 28.3944 20.1242 28.3944C19.9553 28.3944 19.8427 28.5177 19.8427 28.7026C19.8427 29.7196 19.505 30.6441 18.8858 31.3837H17.8726C17.7037 31.3837 17.5911 31.5069 17.5911 31.6918C17.5911 31.8767 17.7037 32 17.8726 32H27.4419C27.6108 32 27.7233 31.8767 27.7233 31.6918C27.7233 31.5069 27.6108 31.3837 27.4419 31.3837ZM16.7468 31.3837H12.8065C12.6376 31.3837 12.525 31.5069 12.525 31.6918C12.525 31.8767 12.6376 32 12.8065 32H16.7468C16.9156 32 17.0282 31.8767 17.0282 31.6918C17.0282 31.5069 16.9156 31.3837 16.7468 31.3837Z\" fill=\"white\" />\n<path d=\"M17.0024 16.3758C17.0024 16.558 17.1159 16.6795 17.2862 16.6795C17.4564 16.6795 17.5699 16.558 17.5699 16.3758C17.5699 16.1935 17.6835 16.0721 17.8537 16.0721C18.024 16.0721 18.1375 15.9506 18.1375 15.7683C18.1375 15.5861 18.024 15.4646 17.8537 15.4646C17.3713 15.4646 17.0024 15.8595 17.0024 16.3758ZM28.9209 20.0203C28.9209 19.504 28.552 19.1092 28.0695 19.1092C27.8993 19.1092 27.7858 19.2307 27.7858 19.4129C27.7858 19.5951 27.8993 19.7166 28.0695 19.7166C28.2398 19.7166 28.3533 19.8381 28.3533 20.0203C28.3533 20.2025 28.4668 20.324 28.6371 20.324C28.8074 20.324 28.9209 20.2025 28.9209 20.0203ZM14.1647 23.0574C14.1647 22.8752 14.0512 22.7537 13.8809 22.7537C13.7106 22.7537 13.5971 22.8752 13.5971 23.0574C13.5971 23.5737 13.966 23.9686 14.4484 23.9686C14.6187 23.9686 14.7322 23.8471 14.7322 23.6649C14.7322 23.4826 14.6187 23.3611 14.4484 23.3611C14.2782 23.3611 14.1647 23.2397 14.1647 23.0574ZM22.3941 23.9686C22.8765 23.9686 23.2454 23.5737 23.2454 23.0574C23.2454 22.8752 23.1319 22.7537 22.9616 22.7537C22.7914 22.7537 22.6779 22.8752 22.6779 23.0574C22.6779 23.2397 22.5643 23.3611 22.3941 23.3611C22.2238 23.3611 22.1103 23.4826 22.1103 23.6649C22.1103 23.8471 22.2238 23.9686 22.3941 23.9686Z\" fill=\"white\" />\n<line y1=\"-0.340489\" x2=\"33.2101\" y2=\"-0.340489\" transform=\"matrix(-0.428924 0.90334 -0.86923 -0.494408 14.2446 2)\" stroke=\"white\" stroke-width=\"0.680978\" />\n<path d=\"M13.3932 0.34891L12.5803 3.11536L15.1446 3.86892L15.9575 1.10248L13.3932 0.34891ZM13.9764 2.28324L19.5636 13.5129L20.1486 13.1642L14.5614 1.9346L13.9764 2.28324Z\" fill=\"white\" />\n<line y1=\"-0.340489\" x2=\"3.37786\" y2=\"-0.340489\" transform=\"matrix(0.638946 0.769251 -0.708881 0.705329 10.7914 9.32281)\" stroke=\"white\" stroke-width=\"0.680978\" />\n<line y1=\"-0.340489\" x2=\"3.34908\" y2=\"-0.340489\" transform=\"matrix(-0.708881 0.705328 -0.638946 -0.769251 15.3237 9.55905)\" stroke=\"white\" stroke-width=\"0.680978\" />\n<line y1=\"-0.340489\" x2=\"3.69751\" y2=\"-0.340489\" transform=\"matrix(0.642081 0.766637 -0.705948 0.708264 15.3237 9.55905)\" stroke=\"white\" stroke-width=\"0.680978\" />\n<line y1=\"-0.340489\" x2=\"1.43877\" y2=\"-0.340489\" transform=\"matrix(-0.729075 0.684433 -0.61683 -0.787097 18.531 10.9764)\" stroke=\"white\" stroke-width=\"0.680978\" />\n<line y1=\"-0.340489\" x2=\"8.31049\" y2=\"-0.340489\" transform=\"matrix(0.415528 0.909581 -0.877235 0.480062 24.1727 24.2047)\" stroke=\"white\" stroke-width=\"0.680978\" />\n"});

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="flex absolute bg-transparent items-center justify-between px-4 gap-8 h-20 w-full"> <a href="/"> ${renderComponent($$result, "IconLogo", IconLogo, { "class": "absolute z-10 top-7 lg:top-5 lg:w-15" })} </a> <button id="menu-btn" class="group absolute right-5 z-12 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex justify-between flex-col fixed z-11 inset-0 bg-cyan-800 visible opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100" aria-hidden="true"> <ul class="flex mt-5 flex-col gap-4 lg:flex-row lg:mt-0 "> <li> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/film" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/film">À l'affiche</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/programmation" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/programmation">Programmation</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/propos" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/propos">À propos</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/invite" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/invite">Nos invités</a> </li> <li> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/contacts" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/contacts">Contacts</a> </li> <li class="lg:flex lg:items-center lg:gap-x-4"> <a${addAttribute(`block p-4 rounded-lg text-white ${currentPath === "/billetterie" ? "text-indigo-600 font-bold max-lg:bg-sky-950 max-lg:rounded-lg" : ""}`, "class")} href="/billetterie">Billetterie</a> <p class="p-5 text-gray-400 lg:block">à partir du 01/08/2025</p> </li> </ul> <div class="flex items-center justify-center gap-4 p-4 lg:absolute lg:right-0"> ${renderComponent($$result, "Button", $$Button, { "variant": "outlined", "url": "/login", "text": "Login" })} ${renderComponent($$result, "Button", $$Button, { "variant": "dark", "url": "/signup", "text": "Sign Up" })} </div> </nav> </header> ${renderScript($$result, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="space-y-10 pt-20 lg:grid lg:grid-cols-4 lg:gap-8 w-full lg:space-y-0 bg-cyan-900 text-white mt-10 lg:w-screen"> <div class="ml-5 flex"> ${renderComponent($$result, "IconLogo", IconLogo, {})}<h2 class="ml-2">Cinémagny</h2> </div> <nav class="px-5 gap-8 space-y-8 text-sm lg:text-base lg:columns-3 lg:col-span-3 lg:px-0 *:break-inside-avoid *:space-y-3"> <div> <h4 class="uppercase">MENU</h4> <ul class="text-gray-400"> <li><a href="/request">À l'affiche</a></li> <li><a href="/pricing">Programmation</a></li> <li><a href="/reviews">Nos Engagements</a></li> <li><a href="/stories">À propos</a></li> </ul> </div> <div> <h4 class="uppercase">CONTACT</h4> <ul class="text-gray-400"> <li><a href="/buy">Château de la Rosemontoise</a></li> <li><a href="/finance">3 Rue de la Planche</a></li> <li><a href="/finance">90 200</a></li> </ul> </div> <div> <h4 class="uppercase">NOUS SUIVRE</h4> <ul class="flex gap-6 "> <li> <a class="fab fa-facebook" href="https://facebook.com" aria-label="Facebook"></a> </li> <li> <a class="fab fa-instagram" href="https://instagram.com" aria-label="Instagram"></a> </li> <li> <a class="fab fa-twitter" href="https://twitter.com" aria-label="Twitter"></a> </li> <li> <a class="fab fa-linkedin" href="https://linkedin.com" aria-label="Linkedin"></a> </li> </ul> </div> </nav> <div class="px-5 text-gray-400 border-t border-gray-300 py-8 space-y-6 text-center lg:col-span-4 lg:flex lg:justify-around lg:items-center lg:space-y-0"> <p>©2025 Cinémagny, All Rights Reserved</p> </div> </footer>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { src, alt, texte } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Cinémagny</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">${renderHead()}</head> <body class="font-sans font-righteous text-black "> ${renderComponent($$result, "Header", $$Header, {})} <section class="relative w-full h-70 lg:h-200 flex items-center justify-center text-white"> <!-- Image de fond avec overlay --> <div class="absolute inset-0 bg-cover bg-center"> ${renderComponent($$result, "Picture", $$Picture, { "class": "lg:w-full lg:h-full lg:object-cover", "formats": ["avif", "webp"], "src": src, "alt": alt })} </div> <div class="absolute h-80 lg:h-200 inset-0 bg-gradient-to-t from-white to-transparent"></div> <!-- Contenu --> <div class="relative px-6 text-center"> <h1 class="md:text-5xl font-bold text-righteous">${texte}</h1> </div> </section> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/layouts/Layout.astro", void 0);

export { $$Layout as $, createSvgComponent as c };
