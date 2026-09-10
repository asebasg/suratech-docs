import{_ as n,o as s,c as e,ae as p}from"./chunks/framework.ivNTQwfq.js";const g=JSON.parse('{"title":"Factura ya paga","description":"","frontmatter":{},"headers":[],"relativePath":"cierres/cierre_procesos_pagos.md","filePath":"cierres/cierre_procesos_pagos.md"}'),i={name:"cierres/cierre_procesos_pagos.md"};function c(o,a,t,l,r,d){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h2 id="ya-existe-documento-contabilizado" tabindex="-1">Ya existe documento contabilizado <a class="header-anchor" href="#ya-existe-documento-contabilizado" aria-label="Permalink to &quot;Ya existe documento contabilizado&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:</span></span>
<span class="line"><span>El asegurado reporta imposibilidad de realizar el pago debido a que la factura permanece con estado &quot;Pendiente generación factura SAP&quot;, bloqueando la transacción en el sistema.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:</span></span>
<span class="line"><span>La factura no se sincronizó correctamente desde SAP hacia SFI, permaneciendo en estado &quot;Pendiente generación factura SAP&quot; a pesar de contar con los datos necesarios para su generación.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:</span></span>
<span class="line"><span>Se revisó el estado de la factura en SFI y se corroboró que los datos están completos y válidos. Se procedió a forzar la generación de factura desde SAP y se actualizó manualmente el estado en SFI de &quot;Pendiente generación factura SAP&quot; a &quot;Factura disponible&quot; para habilitar el pago.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:</span></span>
<span class="line"><span>1. Validación del estado de la factura en SFI.</span></span>
<span class="line"><span>2. Confirmación de datos completos y válidos.</span></span>
<span class="line"><span>3. Fuerza de generación de factura desde SAP.</span></span>
<span class="line"><span>4. Actualización manual de estado a &quot;Factura generada en SAP&quot; en SFI.</span></span>
<span class="line"><span>5. Confirmación de que el asegurado puede proceder con el pago.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:</span></span>
<span class="line"><span>N/A.</span></span></code></pre></div><h1 id="factura-ya-paga" tabindex="-1">Factura ya paga <a class="header-anchor" href="#factura-ya-paga" aria-label="Permalink to &quot;Factura ya paga&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>𝗥𝗲𝘀𝘂𝗺𝗲𝗻 𝗱𝗲 𝗹𝗮 𝘀𝗶𝘁𝘂𝗮𝗰𝗶ó𝗻:</span></span>
<span class="line"><span>El asegurado reporta que realizó el pago correspondiente, pero este no se registra como aplicado en el sistema.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗖𝗮𝘂𝘀𝗮 𝗥𝗮í𝘇 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗮:</span></span>
<span class="line"><span>La factura no se sincronizó correctamente en SFI tras recibirse el pago, permaneciendo con estado pendiente a pesar de contar con comprobante válido de la transacción.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗹𝗶𝗱𝗮𝗰𝗶ó𝗻:</span></span>
<span class="line"><span>Se verificó el comprobante de pago adjunto en el incidente y se confirmó su validez. Se actualizó el estado de la factura a &quot;Factura pagada&quot; en SFI.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗔𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀:</span></span>
<span class="line"><span>1. Verificación de comprobante de pago adjunto en el incidente.</span></span>
<span class="line"><span>2. Validación de información en SFI.</span></span>
<span class="line"><span>3. Cambio de estado de factura a &quot;Factura pagada&quot;.</span></span>
<span class="line"><span>4. Confirmación de actualización exitosa.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>𝗘𝘀𝗰𝗮𝗹𝗮𝗱𝗼:</span></span>
<span class="line"><span>N/A.</span></span></code></pre></div>`,4)])])}const m=n(i,[["render",c]]);export{g as __pageData,m as default};
