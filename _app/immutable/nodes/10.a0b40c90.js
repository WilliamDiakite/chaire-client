import{s as se,f as x,c as ue,g as ee,l as C}from"../chunks/scheduler.91788c12.js";import{S as ae,i as ne,g as W,m as Q,s as q,h as H,j as O,n as R,f as p,c as D,k as b,a as A,y as g,o as y,r as I,u as N,v as j,d as M,t as P,w as S}from"../chunks/index.01dbd17c.js";import{g as G,a as L}from"../chunks/spread.8a54911c.js";import{t as de}from"../chunks/i18n.ba71cffd.js";function te(a){let t,n;return{c(){t=W("img"),this.h()},l(s){t=H(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ee(t.src,n=a[1])||b(t,"src",n),b(t,"alt",a[2]),b(t,"class","svelte-1girnh6")},m(s,m){A(s,t,m)},p(s,m){m&2&&!ee(t.src,n=s[1])&&b(t,"src",n),m&4&&b(t,"alt",s[2])},d(s){s&&p(t)}}}function _e(a){let t,n,s,m,c,f,d,h,r,w,_,E,$,v,F,l=a[1]&&te(a);return{c(){t=W("div"),n=W("a"),s=Q("bla"),c=q(),f=W("h2"),d=Q(a[0]),h=q(),l&&l.c(),r=q(),w=W("div"),_=W("p"),E=Q(a[3]),$=q(),v=W("p"),F=Q(a[4]),this.h()},l(u){t=H(u,"DIV",{class:!0});var o=O(t);n=H(o,"A",{href:!0});var z=O(n);s=R(z,"bla"),z.forEach(p),c=D(o),f=H(o,"H2",{class:!0});var B=O(f);d=R(B,a[0]),B.forEach(p),h=D(o),l&&l.l(o),r=D(o),w=H(o,"DIV",{});var k=O(w);_=H(k,"P",{class:!0});var J=O(_);E=R(J,a[3]),J.forEach(p),$=D(k),v=H(k,"P",{class:!0});var K=O(v);F=R(K,a[4]),K.forEach(p),k.forEach(p),o.forEach(p),this.h()},h(){b(n,"href",m=`${a[5]("route.news")}/test1`),b(f,"class","svelte-1girnh6"),b(_,"class","title svelte-1girnh6"),b(v,"class","description"),b(t,"class","card news-card")},m(u,o){A(u,t,o),g(t,n),g(n,s),g(t,c),g(t,f),g(f,d),g(t,h),l&&l.m(t,null),g(t,r),g(t,w),g(w,_),g(_,E),g(w,$),g(w,v),g(v,F)},p(u,[o]){o&32&&m!==(m=`${u[5]("route.news")}/test1`)&&b(n,"href",m),o&1&&y(d,u[0]),u[1]?l?l.p(u,o):(l=te(u),l.c(),l.m(t,r)):l&&(l.d(1),l=null),o&8&&y(E,u[3]),o&16&&y(F,u[4])},i:x,o:x,d(u){u&&p(t),l&&l.d()}}}function pe(a,t,n){let s;ue(a,de,r=>n(5,s=r));let{date:m}=t,{img:c}=t,{imgDesc:f}=t,{title:d}=t,{description:h}=t;return a.$$set=r=>{"date"in r&&n(0,m=r.date),"img"in r&&n(1,c=r.img),"imgDesc"in r&&n(2,f=r.imgDesc),"title"in r&&n(3,d=r.title),"description"in r&&n(4,h=r.description)},[m,c,f,d,h,s]}class V extends ae{constructor(t){super(),ne(this,t,pe,_e,se,{date:0,img:1,imgDesc:2,title:3,description:4})}}function ge(a){let t,n,s,m,c,f,d,h,r,w,_,E,$,v;const F=[a[0]];let l={};for(let e=0;e<F.length;e+=1)l=C(l,F[e]);t=new V({props:l});const u=[a[1]];let o={};for(let e=0;e<u.length;e+=1)o=C(o,u[e]);s=new V({props:o});const z=[a[0]];let B={};for(let e=0;e<z.length;e+=1)B=C(B,z[e]);c=new V({props:B});const k=[a[0]];let J={};for(let e=0;e<k.length;e+=1)J=C(J,k[e]);d=new V({props:J});const K=[a[1]];let T={};for(let e=0;e<K.length;e+=1)T=C(T,K[e]);r=new V({props:T});const U=[a[0]];let X={};for(let e=0;e<U.length;e+=1)X=C(X,U[e]);_=new V({props:X});const Y=[a[0]];let Z={};for(let e=0;e<Y.length;e+=1)Z=C(Z,Y[e]);return $=new V({props:Z}),{c(){I(t.$$.fragment),n=q(),I(s.$$.fragment),m=q(),I(c.$$.fragment),f=q(),I(d.$$.fragment),h=q(),I(r.$$.fragment),w=q(),I(_.$$.fragment),E=q(),I($.$$.fragment)},l(e){N(t.$$.fragment,e),n=D(e),N(s.$$.fragment,e),m=D(e),N(c.$$.fragment,e),f=D(e),N(d.$$.fragment,e),h=D(e),N(r.$$.fragment,e),w=D(e),N(_.$$.fragment,e),E=D(e),N($.$$.fragment,e)},m(e,i){j(t,e,i),A(e,n,i),j(s,e,i),A(e,m,i),j(c,e,i),A(e,f,i),j(d,e,i),A(e,h,i),j(r,e,i),A(e,w,i),j(_,e,i),A(e,E,i),j($,e,i),v=!0},p(e,[i]){const re=i&1?G(F,[L(e[0])]):{};t.$set(re);const ie=i&2?G(u,[L(e[1])]):{};s.$set(ie);const le=i&1?G(z,[L(e[0])]):{};c.$set(le);const oe=i&1?G(k,[L(e[0])]):{};d.$set(oe);const me=i&2?G(K,[L(e[1])]):{};r.$set(me);const ce=i&1?G(U,[L(e[0])]):{};_.$set(ce);const fe=i&1?G(Y,[L(e[0])]):{};$.$set(fe)},i(e){v||(M(t.$$.fragment,e),M(s.$$.fragment,e),M(c.$$.fragment,e),M(d.$$.fragment,e),M(r.$$.fragment,e),M(_.$$.fragment,e),M($.$$.fragment,e),v=!0)},o(e){P(t.$$.fragment,e),P(s.$$.fragment,e),P(c.$$.fragment,e),P(d.$$.fragment,e),P(r.$$.fragment,e),P(_.$$.fragment,e),P($.$$.fragment,e),v=!1},d(e){e&&(p(n),p(m),p(f),p(h),p(w),p(E)),S(t,e),S(s,e),S(c,e),S(d,e),S(r,e),S(_,e),S($,e)}}}function we(a,t,n){let{data:s}=t;console.log("NEWS data",s);const m={date:"20.12.23",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F51%2F194651-050-747F0C18%2FInterior-National-Gallery-of-Art-Washington-DC.jpg&f=1&nofb=1&ipt=8b9dcf3a751aac5bbf0d06695d61204dff71a7a720b719053a7ec29fd6a6244f&ipo=images",imgDesc:"image description",title:"A glorious event",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore sunt tenetur nostrum odio! Maxime ipsam, atque ratione unde, laboriosam optio obcaecati quasi accusamus voluptatem quidem, earum inventore aliquam labore?"},c={date:"20.12.23",img:"",imgDesc:"image description",title:"A glorious event",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore sunt tenetur nostrum odio! Maxime ipsam, atque ratione unde, laboriosam optio obcaecati quasi accusamus voluptatem quidem, earum inventore aliquam labore?"};return a.$$set=f=>{"data"in f&&n(2,s=f.data)},[m,c,s]}class qe extends ae{constructor(t){super(),ne(this,t,we,ge,se,{data:2})}}export{qe as component};
