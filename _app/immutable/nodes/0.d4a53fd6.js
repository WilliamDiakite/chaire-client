import{s as X,c as j,d as me,e as Ce,n as S,f as R,g as Oe,b as x,h as je,i as ee,u as Ue,j as qe,k as He}from"../chunks/scheduler.91788c12.js";import{S as Y,i as Z,s as D,g as T,c as F,h as y,j as E,f as d,k as m,l as se,a as b,d as C,p as G,t as O,b as K,x as J,m as q,n as H,y as N,z as ie,o as $,e as Q,A as ve,B as De,C as Re,r as re,u as ne,v as ae,w as oe,D as te}from"../chunks/index.01dbd17c.js";import{l as Fe,t as Se}from"../chunks/i18n.ba71cffd.js";import{d as Be}from"../chunks/singletons.e95d2372.js";import{f as pe,a as ge,r as le,p as Pe,s as be,b as ke}from"../chunks/stores.7c45d0c7.js";import{w as Ge}from"../chunks/index.7c06c254.js";import{s as W,e as P}from"../chunks/index.2f03f899.js";const Ke=()=>{const s=Be;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Ve={subscribe(s){return Ke().page.subscribe(s)}};function Te(s){let e,t,l;return{c(){e=T("div"),this.h()},l(r){e=y(r,"DIV",{class:!0,style:!0}),E(e).forEach(d),this.h()},h(){m(e,"class","full svelte-10j0dei"),se(e,"background-color","green")},m(r,i){b(r,e,i),l=!0},i(r){l||(Ce(()=>{l&&(t||(t=J(e,W,{axis:"x",duration:700},!0)),t.run(1))}),l=!0)},o(r){t||(t=J(e,W,{axis:"x",duration:700},!1)),t.run(0),l=!1},d(r){r&&d(e),r&&t&&t.end()}}}function ye(s){let e,t,l;return{c(){e=T("div"),this.h()},l(r){e=y(r,"DIV",{class:!0,style:!0}),E(e).forEach(d),this.h()},h(){m(e,"class","full svelte-10j0dei"),se(e,"background-color","blue")},m(r,i){b(r,e,i),l=!0},i(r){l||(Ce(()=>{l&&(t||(t=J(e,W,{axis:"x",duration:700},!0)),t.run(1))}),l=!0)},o(r){t||(t=J(e,W,{axis:"x",duration:700},!1)),t.run(0),l=!1},d(r){r&&d(e),r&&t&&t.end()}}}function Je(s){let e,t,l,r,i=s[0].green&&Te(),u=s[0].blue&&ye();return{c(){i&&i.c(),e=D(),u&&u.c(),t=D(),l=T("div"),this.h()},l(o){i&&i.l(o),e=F(o),u&&u.l(o),t=F(o),l=y(o,"DIV",{class:!0,style:!0}),E(l).forEach(d),this.h()},h(){m(l,"class","abs full svelte-10j0dei"),se(l,"background-color","orange")},m(o,n){i&&i.m(o,n),b(o,e,n),u&&u.m(o,n),b(o,t,n),b(o,l,n),r=!0},p(o,[n]){o[0].green?i?n&1&&C(i,1):(i=Te(),i.c(),C(i,1),i.m(e.parentNode,e)):i&&(G(),O(i,1,1,()=>{i=null}),K()),o[0].blue?u?n&1&&C(u,1):(u=ye(),u.c(),C(u,1),u.m(t.parentNode,t)):u&&(G(),O(u,1,1,()=>{u=null}),K())},i(o){r||(C(i),C(u),r=!0)},o(o){O(i),O(u),r=!1},d(o){o&&(d(e),d(t),d(l)),i&&i.d(o),u&&u.d(o)}}}function Qe(s,e,t){let l;const r=Ge({blue:!1,green:!1,orange:!1,prink:!1,red:!1});return j(s,r,i=>t(0,l=i)),setTimeout(()=>{me(r,l.blue=!0,l)},2e3),setTimeout(()=>{me(r,l.green=!0,l)},2300),[l,r]}class We extends Y{constructor(e){super(),Z(this,e,Qe,Je,X,{})}}function Ee(s,e,t){const l=s.slice();return l[15]=e[t],l}function we(s,e,t){const l=s.slice();return l[15]=e[t],l}function Ie(s){let e;return{c(){e=q(s[0])},l(t){e=H(t,s[0])},m(t,l){b(t,e,l)},p(t,l){l&1&&$(e,t[0])},d(t){t&&d(e)}}}function Le(s){let e;function t(i,u){if(i[2]==="role"||i[2]==="event")return Ye;if(i[1])return Xe}let l=t(s),r=l&&l(s);return{c(){r&&r.c(),e=Q()},l(i){r&&r.l(i),e=Q()},m(i,u){r&&r.m(i,u),b(i,e,u)},p(i,u){l===(l=t(i))&&r?r.p(i,u):(r&&r.d(1),r=l&&l(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){i&&d(e),r&&r.d(i)}}}function Xe(s){let e,t;return{c(){e=T("div"),t=q(s[1]),this.h()},l(l){e=y(l,"DIV",{class:!0});var r=E(e);t=H(r,s[1]),r.forEach(d),this.h()},h(){m(e,"class","btn secondary")},m(l,r){b(l,e,r),N(e,t)},p(l,r){r&2&&$(t,l[1])},d(l){l&&d(e)}}}function Ye(s){let e,t,l,r=P(s[9]),i=[];for(let n=0;n<r.length;n+=1)i[n]=Ne(we(s,r,n));let u=P(s[3]),o=[];for(let n=0;n<u.length;n+=1)o[n]=ze(Ee(s,u,n));return{c(){e=T("ul");for(let n=0;n<i.length;n+=1)i[n].c();t=D(),l=T("ul");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=y(n,"UL",{class:!0,role:!0});var g=E(e);for(let c=0;c<i.length;c+=1)i[c].l(g);g.forEach(d),t=F(n),l=y(n,"UL",{class:!0,role:!0});var a=E(l);for(let c=0;c<o.length;c+=1)o[c].l(a);a.forEach(d),this.h()},h(){m(e,"class","axis-filters svelte-zurpxk"),m(e,"role","listbox"),m(l,"class","2-level svelte-zurpxk"),m(l,"role","listbox")},m(n,g){b(n,e,g);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);b(n,t,g),b(n,l,g);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(l,null)},p(n,g){if(g&2752){r=P(n[9]);let a;for(a=0;a<r.length;a+=1){const c=we(n,r,a);i[a]?i[a].p(c,g):(i[a]=Ne(c),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=r.length}if(g&1176){u=P(n[3]);let a;for(a=0;a<u.length;a+=1){const c=Ee(n,u,a);o[a]?o[a].p(c,g):(o[a]=ze(c),o[a].c(),o[a].m(l,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=u.length}},d(n){n&&(d(e),d(t),d(l)),ve(i,n),ve(o,n)}}}function Ne(s){let e,t,l=s[7](s[15])+"",r,i,u,o,n,g;return{c(){e=T("li"),t=T("button"),r=q(l),u=D(),this.h()},l(a){e=y(a,"LI",{role:!0,"aria-selected":!0});var c=E(e);t=y(c,"BUTTON",{id:!0,class:!0});var f=E(t);r=H(f,l),f.forEach(d),u=F(c),c.forEach(d),this.h()},h(){m(t,"id",s[15]),m(t,"class",i=S(`btn primary ${s[6]===s[15]?"primary-selected":""}`)+" svelte-zurpxk"),m(e,"role","option"),m(e,"aria-selected",o=s[6]===s[15])},m(a,c){b(a,e,c),N(e,t),N(t,r),N(e,u),n||(g=ie(t,"click",s[11]),n=!0)},p(a,c){c&128&&l!==(l=a[7](a[15])+"")&&$(r,l),c&64&&i!==(i=S(`btn primary ${a[6]===a[15]?"primary-selected":""}`)+" svelte-zurpxk")&&m(t,"class",i),c&64&&o!==(o=a[6]===a[15])&&m(e,"aria-selected",o)},d(a){a&&d(e),n=!1,g()}}}function ze(s){let e,t,l=s[7](s[15])+"",r,i,u,o,n,g,a;return{c(){e=T("li"),t=T("button"),r=q(l),o=D(),this.h()},l(c){e=y(c,"LI",{role:!0,"aria-selected":!0});var f=E(e);t=y(f,"BUTTON",{id:!0,class:!0});var A=E(t);r=H(A,l),A.forEach(d),o=F(f),f.forEach(d),this.h()},h(){m(t,"id",i=s[15]),m(t,"class",u=S(`btn secondary ${s[4].includes(s[15])?"secondary-selected":""}`)+" svelte-zurpxk"),m(e,"role","option"),m(e,"aria-selected",n=s[4].includes(s[15]))},m(c,f){b(c,e,f),N(e,t),N(t,r),N(e,o),g||(a=ie(t,"click",s[10]),g=!0)},p(c,f){f&136&&l!==(l=c[7](c[15])+"")&&$(r,l),f&8&&i!==(i=c[15])&&m(t,"id",i),f&24&&u!==(u=S(`btn secondary ${c[4].includes(c[15])?"secondary-selected":""}`)+" svelte-zurpxk")&&m(t,"class",u),f&24&&n!==(n=c[4].includes(c[15]))&&m(e,"aria-selected",n)},d(c){c&&d(e),g=!1,a()}}}function Ze(s){let e,t,l,r,i,u,o,n,g,a,c,f,A,w,V,h,v,_,p,I,U,L=s[0]&&Ie(s),M=s[2]!=="none"&&Le(s);return{c(){e=T("a"),t=q("Menu"),r=D(),i=T("div"),L&&L.c(),o=D(),n=T("div"),M&&M.c(),g=D(),a=T("ul"),c=T("li"),f=T("a"),A=q("FR"),V=D(),h=T("li"),v=T("a"),_=q("EN"),this.h()},l(k){e=y(k,"A",{class:!0,href:!0});var z=E(e);t=H(z,"Menu"),z.forEach(d),r=F(k),i=y(k,"DIV",{class:!0});var ue=E(i);L&&L.l(ue),ue.forEach(d),o=F(k),n=y(k,"DIV",{class:!0});var fe=E(n);M&&M.l(fe),fe.forEach(d),g=F(k),a=y(k,"UL",{class:!0});var B=E(a);c=y(B,"LI",{class:!0});var ce=E(c);f=y(ce,"A",{class:!0,href:!0,rel:!0,hreflang:!0,"data-sveltekit-reload":!0});var _e=E(f);A=H(_e,"FR"),_e.forEach(d),ce.forEach(d),V=F(B),h=y(B,"LI",{class:!0});var de=E(h);v=y(de,"A",{class:!0,href:!0,rel:!0,hreflang:!0,"data-sveltekit-reload":!0});var he=E(v);_=H(he,"EN"),he.forEach(d),de.forEach(d),B.forEach(d),this.h()},h(){m(e,"class","btn primary"),m(e,"href",l=`/${s[5]}/menu`),m(i,"class",u=S(`btn tertiary ${s[2]==="none"?"long":""}`)+" svelte-zurpxk"),m(n,"class","tags svelte-zurpxk"),m(f,"class","btn primary"),m(f,"href",w=s[8].fr),m(f,"rel","alternative"),m(f,"hreflang","fr"),m(f,"data-sveltekit-reload",""),m(c,"class","svelte-zurpxk"),m(v,"class","btn primary"),m(v,"href",p=s[8].en),m(v,"rel","alternative"),m(v,"hreflang","en"),m(v,"data-sveltekit-reload",""),m(h,"class","svelte-zurpxk"),m(a,"class","lang-selector svelte-zurpxk")},m(k,z){b(k,e,z),N(e,t),b(k,r,z),b(k,i,z),L&&L.m(i,null),b(k,o,z),b(k,n,z),M&&M.m(n,null),b(k,g,z),b(k,a,z),N(a,c),N(c,f),N(f,A),N(a,V),N(a,h),N(h,v),N(v,_),I||(U=ie(e,"mouseenter",s[12]),I=!0)},p(k,[z]){z&32&&l!==(l=`/${k[5]}/menu`)&&m(e,"href",l),k[0]?L?L.p(k,z):(L=Ie(k),L.c(),L.m(i,null)):L&&(L.d(1),L=null),z&4&&u!==(u=S(`btn tertiary ${k[2]==="none"?"long":""}`)+" svelte-zurpxk")&&m(i,"class",u),k[2]!=="none"?M?M.p(k,z):(M=Le(k),M.c(),M.m(n,null)):M&&(M.d(1),M=null),z&256&&w!==(w=k[8].fr)&&m(f,"href",w),z&256&&p!==(p=k[8].en)&&m(v,"href",p)},i:R,o:R,d(k){k&&(d(e),d(r),d(i),d(o),d(n),d(g),d(a)),L&&L.d(),M&&M.d(),I=!1,U()}}}function $e(s,e,t){let l,r,i,u,o,n,g;j(s,Ve,_=>t(13,r=_)),j(s,pe,_=>t(4,i=_)),j(s,Fe,_=>t(5,u=_)),j(s,ge,_=>t(6,o=_)),j(s,Se,_=>t(7,n=_)),j(s,le,_=>t(8,g=_));let{sectionTitle:a}=e,{archiveTitle:c=null}=e,{filterType:f="none"}=e;const A=["filter.axis1","filter.axis2"],w={role:["filter.researcher","filter.coresearcher","filter.collaborators","filter.student","filter.institution"],event:["filter.workshop","filter.colloque","filter.conf"],none:[]},V=_=>{const p=_.target.id;i.includes(p)?i.splice(i.indexOf(p),1):i.push(p),pe.set(i)},h=_=>ge.set(_.target.id),v=()=>Pe.set(r.url.pathname);return s.$$set=_=>{"sectionTitle"in _&&t(0,a=_.sectionTitle),"archiveTitle"in _&&t(1,c=_.archiveTitle),"filterType"in _&&t(2,f=_.filterType)},s.$$.update=()=>{s.$$.dirty&4&&t(3,l=w[f])},[a,c,f,l,i,u,o,n,g,A,V,h,v]}class xe extends Y{constructor(e){super(),Z(this,e,$e,Ze,X,{sectionTitle:0,archiveTitle:1,filterType:2})}}function et(s){let e,t='<ul class="social svelte-gng30v"><li><a rel="external" href="/"><img class="social-logo svelte-gng30v" src="/logo/brands/instagram.svg" alt="logo twitter"/></a></li> <li><a rel="external" href="https://www.linkedin.com/company/ciecorecherche/"><img class="social-logo svelte-gng30v" src="/logo/brands/linkedin.svg" alt="logo twitter"/></a></li> <li><a rel="external" href="https://www.facebook.com/cieco.co"><img class="social-logo svelte-gng30v" src="/logo/brands/square-facebook.svg" alt="logo twitter"/></a></li></ul> <ul class="logos svelte-gng30v"><img class="udem svelte-gng30v" src="/logo/udem.svg" alt="Logo Université de Montréal"/> <img class="cieco svelte-gng30v" src="/logo/cieco-grey.svg" alt="Logo CIÉCO"/></ul>';return{c(){e=T("footer"),e.innerHTML=t},l(l){e=y(l,"FOOTER",{["data-svelte-h"]:!0}),De(e)!=="svelte-ukpv4w"&&(e.innerHTML=t)},m(l,r){b(l,e,r)},p:R,i:R,o:R,d(l){l&&d(e)}}}class tt extends Y{constructor(e){super(),Z(this,e,null,et,X,{})}}function Me(s){let e;return{c(){e=T("div"),this.h()},l(t){e=y(t,"DIV",{class:!0}),E(e).forEach(d),this.h()},h(){m(e,"class","background")},m(t,l){b(t,e,l)},d(t){t&&d(e)}}}function lt(s){let e,t,l,r,i,u,o,n,g,a,c,f;function A(p){s[10](p)}function w(p){s[11](p)}function V(p){s[12](p)}let h={};s[5]!==void 0&&(h.sectionTitle=s[5]),s[6]!==void 0&&(h.archiveTitle=s[6]),s[0].filterType!==void 0&&(h.filterType=s[0].filterType),t=new xe({props:h}),x.push(()=>te(t,"sectionTitle",A)),x.push(()=>te(t,"archiveTitle",w)),x.push(()=>te(t,"filterType",V));const v=s[9].default,_=je(v,s,s[8],null);return{c(){e=T("nav"),re(t.$$.fragment),o=D(),n=T("div"),g=T("main"),_&&_.c(),this.h()},l(p){e=y(p,"NAV",{class:!0});var I=E(e);ne(t.$$.fragment,I),I.forEach(d),o=F(p),n=y(p,"DIV",{class:!0});var U=E(n);g=y(U,"MAIN",{class:!0});var L=E(g);_&&_.l(L),L.forEach(d),U.forEach(d),this.h()},h(){m(e,"class",u=`${s[4]?"hidden":""}`),m(g,"class",a=`${s[1].route.id==="/[lang=lang]/[menu=menu]"?"":"page"} ${s[2]?"padded":""}`),m(n,"class",c=`${s[4]?"y-center":""}`)},m(p,I){b(p,e,I),ae(t,e,null),b(p,o,I),b(p,n,I),N(n,g),_&&_.m(g,null),f=!0},p(p,I){const U={};!l&&I&32&&(l=!0,U.sectionTitle=p[5],ee(()=>l=!1)),!r&&I&64&&(r=!0,U.archiveTitle=p[6],ee(()=>r=!1)),!i&&I&1&&(i=!0,U.filterType=p[0].filterType,ee(()=>i=!1)),t.$set(U),(!f||I&16&&u!==(u=`${p[4]?"hidden":""}`))&&m(e,"class",u),_&&_.p&&(!f||I&256)&&Ue(_,v,p,p[8],f?He(v,p[8],I,null):qe(p[8]),null),(!f||I&6&&a!==(a=`${p[1].route.id==="/[lang=lang]/[menu=menu]"?"":"page"} ${p[2]?"padded":""}`))&&m(g,"class",a),(!f||I&16&&c!==(c=`${p[4]?"y-center":""}`))&&m(n,"class",c)},i(p){f||(C(t.$$.fragment,p),C(_,p),f=!0)},o(p){O(t.$$.fragment,p),O(_,p),f=!1},d(p){p&&(d(e),d(o),d(n)),oe(t),_&&_.d(p)}}}function st(s){let e,t;return e=new We({}),{c(){re(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ae(e,l,r),t=!0},p:R,i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){oe(e,l)}}}function Ae(s){let e,t;return e=new tt({}),{c(){re(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ae(e,l,r),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){oe(e,l)}}}function it(s){let e,t="",l,r,i,u,o,n,g,a,c,f=s[4]&&Me();const A=[st,lt],w=[];function V(v,_){return v[1].route.id==="/"?0:1}o=V(s),n=w[o]=A[o](s);let h=s[3]&&Ae();return{c(){e=T("script"),e.innerHTML=t,r=T("link"),i=D(),f&&f.c(),u=D(),n.c(),g=D(),h&&h.c(),a=Q(),this.h()},l(v){const _=Re("svelte-19mo88g",document.head);e=y(_,"SCRIPT",{src:!0,crossorigin:!0,["data-svelte-h"]:!0}),De(e)!=="svelte-dvijbv"&&(e.innerHTML=t),r=y(_,"LINK",{href:!0,rel:!0}),_.forEach(d),i=F(v),f&&f.l(v),u=F(v),n.l(v),g=F(v),h&&h.l(v),a=Q(),this.h()},h(){Oe(e.src,l="https://kit.fontawesome.com/398deee16b.js")||m(e,"src",l),m(e,"crossorigin","anonymous"),m(r,"href","//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"),m(r,"rel","stylesheet")},m(v,_){N(document.head,e),N(document.head,r),b(v,i,_),f&&f.m(v,_),b(v,u,_),w[o].m(v,_),b(v,g,_),h&&h.m(v,_),b(v,a,_),c=!0},p(v,[_]){v[4]?f||(f=Me(),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null);let p=o;o=V(v),o===p?w[o].p(v,_):(G(),O(w[p],1,1,()=>{w[p]=null}),K(),n=w[o],n?n.p(v,_):(n=w[o]=A[o](v),n.c()),C(n,1),n.m(g.parentNode,g)),v[3]?h?_&8&&C(h,1):(h=Ae(),h.c(),C(h,1),h.m(a.parentNode,a)):h&&(G(),O(h,1,1,()=>{h=null}),K())},i(v){c||(C(n),C(h),c=!0)},o(v){O(n),O(h),c=!1},d(v){v&&(d(i),d(u),d(g),d(a)),d(e),d(r),f&&f.d(v),w[o].d(v),h&&h.d(v)}}}function rt(s,e,t){let l,r,i,u,o,n,g;j(s,Ve,h=>t(1,u=h)),j(s,le,h=>t(7,o=h)),j(s,be,h=>t(5,n=h)),j(s,ke,h=>t(6,g=h));let{$$slots:a={},$$scope:c}=e,{data:f}=e;function A(h){n=h,be.set(n)}function w(h){g=h,ke.set(g)}function V(h){s.$$.not_equal(f.filterType,h)&&(f.filterType=h,t(0,f))}return s.$$set=h=>{"data"in h&&t(0,f=h.data),"$$scope"in h&&t(8,c=h.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&Fe.set(f.lang),s.$$.dirty&129&&le.set(f.redirects?f.redirects:o),s.$$.dirty&2&&t(4,l=u.route.id==="/[lang=lang]/[menu=menu]"),s.$$.dirty&2&&t(3,r=u.route.id!=="/[lang=lang]/[menu=menu]"&&u.url.pathname!=="/"),s.$$.dirty&2&&t(2,i=u.route.id==="/[lang=lang]/[archives=archives]"||u.route.id==="/[lang=lang]/[news=news]")},[f,u,i,r,l,n,g,o,c,a,A,w,V]}class dt extends Y{constructor(e){super(),Z(this,e,rt,it,X,{data:0})}}export{dt as component};