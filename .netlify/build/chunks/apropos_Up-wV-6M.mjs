const imagehero = new Proxy({"src":"/_astro/apropos.VkDvzJWZ.webp","width":786,"height":570,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kocao/Documents/GitHub/sae-203-2025-manolia-kocaoglu/src/assets/img/header/apropos.webp";
							}
							
							return target[name];
						}
					});

export { imagehero as i };
