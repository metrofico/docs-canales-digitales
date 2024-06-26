"use strict";(self.webpackChunkdocs_menu_intg=self.webpackChunkdocs_menu_intg||[]).push([[4116],{27576:(e,t)=>{t.T=void 0,t.T=function(e){return e?`\n\n${e}\n\n`:""}},43722:(e,t)=>{function a(e,t){return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type||"array"===e.type?e.xml?.name??e.type:e.title??e.type}t.A4=t.uc=void 0,t.uc=function(e,t){return e.items?a(e.items)+"[]":a(e)??""},t.A4=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let a=[];if(t.items&&t.items.enum&&t.items.enum&&a.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,n,l="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(n=`\`<= ${t.maxLength} characters\``),e&&!n&&(l+=e),n&&!e&&(l+=n),e&&n&&(l+=`${e} and ${n}`),a.push(l)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,n,l="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?n=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?n=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(n=`\`< ${t.maximum}\``),e&&!n&&(l+=e),n&&!e&&(l+=n),e&&n&&(l+=`${e} and ${n}`),a.push(l)}t.pattern&&a.push(`Value must match regular expression \`${t.pattern}\``);const n=t;if(n.mapping){const e=Object.keys(n.mapping);a.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&a.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&a.push(`\`>= ${t.minItems}\``),t.maxItems&&a.push(`\`<= ${t.maxItems}\``),0!==a.length?"**Possible values:** "+a.join(", "):void 0}},79738:(e,t)=>{function a(e){return Array.isArray(e)?e.filter((e=>void 0!==e)).join(""):e??""}t.toString=t.lo=void 0,t.lo=function(e,t){return void 0===e||""===e?"":a(t(e))},t.toString=function(e){return"string"==typeof e?e:null!=e?Array.isArray(e)?`[${e.join(", ")}]`:e+"":void 0}},51039:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(67294)),r=n(a(91262)),s=a(67783);function c(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,n=(0,s.useTypedSelector)((e=>e.server.value)),i="";return l.default.createElement(l.default.Fragment,null,l.default.createElement("pre",{className:"openapi__method-endpoint"},l.default.createElement("span",{className:"badge badge--"+c(t)},"event"===t?"Webhook":t.toUpperCase())," ","event"!==t&&l.default.createElement("h2",{className:"openapi__method-endpoint-path"},(n&&n.variables&&(i=n.url.replace(/\/$/,""),Object.keys(n.variables).forEach((e=>{i=i.replace(`{${e}}`,n.variables?.[e].default??"")}))),l.default.createElement(r.default,null,(()=>i.length?i:n&&n.url?n.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),l.default.createElement("div",{className:"openapi__divider"}))}},58219:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),r=a(12466),s=a(70989),c=a(72389),i=a(92503),m=a(86010);function o(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o,label:u="Responses",id:p="responses"}=e;const d=[],{blockElementScrollPositionUntilNextRender:f}=(0,r.o5)(),h=e=>{const t=e.currentTarget,a=d.indexOf(t),n=o[a].value;n!==s&&(f(t),c(n))},E=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()},v=(0,l.useRef)(null),[_,b]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?b(!0):b(!1)}));return e.observe(v.current),()=>{e.disconnect()}}),[]);return l.createElement("div",{className:"openapi-tabs__response-header-section"},l.createElement(i.Z,{as:"h2",id:p,className:"openapi-tabs__response-header"},u),l.createElement("div",{className:"openapi-tabs__response-container"},_&&l.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{v.current.scrollLeft-=90}}),l.createElement("ul",{ref:v,role:"tablist","aria-orientation":"horizontal",className:(0,m.default)("openapi-tabs__response-list-container","tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:E,onClick:h},r,{className:(0,m.default)("tabs__item","openapi-tabs__response-code-item",r?.className,parseInt(t)>=400?"danger":parseInt(t)>=200&&parseInt(t)<300?"success":"info",{active:s===t})}),a??t)}))),_&&l.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{v.current.scrollLeft+=90}})))}function u(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,s.Y)(e);return l.createElement("div",{className:"openapi-tabs__container"},l.createElement(o,(0,n.Z)({},e,t)),l.createElement(u,(0,n.Z)({},e,t)))}function d(e){const t=(0,c.default)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},62316:(e,t,a)=>{a(67294),a(72389),a(85564)},9487:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),r=a(12466),s=a(70989),c=a(72389),i=a(20252),m=a(91962),o=a(67783),u=a(86010);function p(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:p,schemaType:d}=e;const f=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.o5)(),E=(0,o.useTypedDispatch)(),v="request"===d?.toLowerCase(),[_,b]=(0,l.useState)(s),g=(0,o.useTypedSelector)((e=>e.contentType.value)),y=(0,o.useTypedSelector)((e=>e.accept.value));(0,l.useEffect)((()=>{f.length>1&&b(v?g:y)}),[g,y]);const N=e=>{e.preventDefault();const t=e.currentTarget,a=f.indexOf(t),n=p[a].value;n!==_&&(E(v?(0,m.setContentType)(n):(0,i.setAccept)(n)),h(t),c(n))},x=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=f.indexOf(e.currentTarget)+1;t=f[a]??f[0];break}case"ArrowLeft":{const a=f.indexOf(e.currentTarget)-1;t=f[a]??f[f.length-1];break}}t?.focus()},k=(0,l.useRef)(null),[$,Z]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?Z(!0):Z(!1)}));return e.observe(k.current),()=>{e.disconnect()}}),[]);return l.createElement("div",{className:"tabs__container"},l.createElement("div",{className:"openapi-tabs__mime-container"},$&&l.createElement("button",{className:(0,u.default)("openapi-tabs__arrow","left"),onClick:()=>{k.current.scrollLeft-=90}}),l.createElement("ul",{ref:k,role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("openapi-tabs__mime-list-container","tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>f.push(e),onKeyDown:x,onFocus:N,onClick:e=>N(e)},r,{className:(0,u.default)("tabs__item","openapi-tabs__mime-item",r?.className,{active:_===t})}),a??t)}))),$&&l.createElement("button",{className:(0,u.default)("openapi-tabs__arrow","right"),onClick:()=>{k.current.scrollLeft+=90}})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=(0,s.Y)(e);return l.createElement("div",{className:"tabs-container"},l.createElement(p,(0,n.Z)({},e,t)),l.createElement(d,(0,n.Z)({},e,t)))}function h(e){const t=(0,c.default)();return l.createElement(f,(0,n.Z)({key:String(t)},e))}},12005:(e,t,a)=>{a(67294),a(72389)},41429:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(74881),r=a(9472),s=a(85162),c=a(27576),i=a(43722),m=a(79738),o=a(29011),u=a(97110);const p=function(e){let{param:{description:t,example:a,examples:p,name:d,required:f,schema:h}}=e;h&&h?.type||(h={type:"any"});const E=(0,m.lo)(h,(e=>n.createElement("span",{className:"openapi-schema__type"}," ",(0,i.uc)(e)))),v=(0,m.lo)(f,(()=>n.createElement("span",{className:"openapi-schema__required"},"required"))),_=(0,m.lo)((0,i.A4)(h),(e=>n.createElement("div",null,n.createElement(o.D,{children:(0,c.T)(e),rehypePlugins:[u.Z]})))),b=(0,m.lo)(t,(e=>n.createElement("div",null,n.createElement(o.D,{children:(0,c.T)(e),components:{pre:"div",code(e){let{node:t,inline:a,className:r,children:s,...c}=e;const i=/language-(\w+)/.exec(r||"");return a?n.createElement("code",null,s):!a&&i?n.createElement(l.Z,{className:r},s):n.createElement(l.Z,null,s)}},rehypePlugins:[u.Z]})))),g=(0,m.lo)(h&&h.items?h.items.default:h?h.default:void 0,(e=>n.createElement("div",null,n.createElement(o.D,{children:`**Default value:** \`${e}\``})))),y=(0,m.lo)((0,m.toString)(a),(e=>n.createElement("div",null,n.createElement("strong",null,"Example: "),e))),N=(0,m.lo)(p,(e=>{const t=Object.entries(e);return n.createElement(n.Fragment,null,n.createElement("strong",null,"Examples:"),n.createElement(r.default,null,t.map((e=>{let[t,a]=e;return n.createElement(s.default,{value:t,label:t},a.summary&&n.createElement("p",null,a.summary),a.description&&n.createElement("p",null,n.createElement("strong",null,"Description: "),n.createElement("span",null,a.description)),n.createElement("p",null,n.createElement("strong",null,"Example: "),n.createElement("code",null,a.value)))}))))}));return n.createElement("div",{className:"openapi-params__list-item"},n.createElement("span",{className:"openapi-schema__container"},n.createElement("strong",{className:"openapi-schema__property"},d),E,f&&n.createElement("span",{className:"openapi-schema__divider"}),v),_,g,b,y,N)}},5397:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(74881);const r=function(e){let{responseExample:t,language:a}=e;return n.createElement("div",{className:"openapi-code__response-samples-container"},n.createElement(l.Z,{language:a||"json"},t))}},4667:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(74881),r=a(86010),s=a(27576),c=a(79738),i=a(29011),m=a(97110);const o=function(e){let t,a,o,u,{children:p,collapsible:d,name:f,qualifierMessage:h,required:E,schemaName:v,schema:_}=e;_&&(t=_.deprecated,a=_.description,o=_.default,u=_.nullable);const b=(0,c.lo)(Array.isArray(E)?E.includes(f):E,(()=>n.createElement("span",{className:"openapi-schema__required"},"required"))),g=(0,c.lo)(t,(()=>n.createElement("span",{className:"openapi-schema__deprecated"},"deprecated"))),y=(0,c.lo)(u,(()=>n.createElement("span",{className:"openapi-schema__nullable"},"nullable"))),N=(0,c.lo)(a,(e=>n.createElement("div",null,n.createElement(i.D,{children:(0,s.T)(e),components:{pre:"div",code(e){let{node:t,inline:a,className:r,children:s,...c}=e;const i=/language-(\w+)/.exec(r||"");return a?n.createElement("code",null,s):!a&&i?n.createElement(l.Z,{className:r},s):n.createElement(l.Z,null,s)}},rehypePlugins:[m.Z]})))),x=(0,c.lo)(h,(e=>n.createElement("div",null,n.createElement(i.D,{children:(0,s.T)(e),rehypePlugins:[m.Z]})))),k=(0,c.lo)(o,(e=>n.createElement("div",{className:""},n.createElement(i.D,{children:`**Default value:** \`${e}\``})))),$=n.createElement("div",null,n.createElement("span",{className:"openapi-schema__container"},n.createElement("strong",{className:(0,r.default)("openapi-schema__property",{"openapi-schema__strikethrough":t})},f),n.createElement("span",{className:"openapi-schema__name"}," ",v),(u||E||t)&&n.createElement("span",{className:"openapi-schema__divider"}),y,!t&&b,g),x,k,N,p??p);return n.createElement("div",{className:"openapi-schema__list-item"},d?p:$)}}}]);