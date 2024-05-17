var Ze=Object.defineProperty;var xe=(i,e,l)=>e in i?Ze(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l;var J=(i,e,l)=>(xe(i,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function I(){}function et(i,e){for(const l in e)i[l]=e[l];return i}function Xe(i){return i()}function ge(){return Object.create(null)}function ne(i){i.forEach(Xe)}function qe(i){return typeof i=="function"}function R(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function tt(i){return Object.keys(i).length===0}function Y(i,e,l,n){if(i){const t=Ke(i,e,l,n);return i[0](t)}}function Ke(i,e,l,n){return i[1]&&n?et(l.ctx.slice(),i[1](n(e))):l.ctx}function Z(i,e,l,n){if(i[2]&&n){const t=i[2](n(l));if(e.dirty===void 0)return t;if(typeof t=="object"){const s=[],r=Math.max(e.dirty.length,t.length);for(let a=0;a<r;a+=1)s[a]=e.dirty[a]|t[a];return s}return e.dirty|t}return e.dirty}function x(i,e,l,n,t,s){if(t){const r=Ke(e,l,n,s);i.p(r,t)}}function ee(i){if(i.ctx.length>32){const e=[],l=i.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function u(i,e){i.appendChild(e)}function _(i,e,l){i.insertBefore(e,l||null)}function m(i){i.parentNode&&i.parentNode.removeChild(i)}function z(i,e){for(let l=0;l<i.length;l+=1)i[l]&&i[l].d(e)}function b(i){return document.createElement(i)}function nt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function j(i){return document.createTextNode(i)}function A(){return j(" ")}function U(){return j("")}function v(i,e,l){l==null?i.removeAttribute(e):i.getAttribute(e)!==l&&i.setAttribute(e,l)}function lt(i){return Array.from(i.childNodes)}function B(i,e){e=""+e,i.data!==e&&(i.data=e)}function se(i,e,l,n){l==null?i.style.removeProperty(e):i.style.setProperty(e,l,n?"important":"")}class ae{constructor(e=!1){J(this,"is_svg",!1);J(this,"e");J(this,"n");J(this,"t");J(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,l,n=null){this.e||(this.is_svg?this.e=nt(l.nodeName):this.e=b(l.nodeType===11?"TEMPLATE":l.nodeName),this.t=l.tagName!=="TEMPLATE"?l:l.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let l=0;l<this.n.length;l+=1)_(this.t,this.n[l],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}let $e;function te(i){$e=i}const K=[],be=[];let V=[];const ve=[],it=Promise.resolve();let ue=!1;function rt(){ue||(ue=!0,it.then(Ve))}function de(i){V.push(i)}const ce=new Set;let q=0;function Ve(){if(q!==0)return;const i=$e;do{try{for(;q<K.length;){const e=K[q];q++,te(e),st(e.$$)}}catch(e){throw K.length=0,q=0,e}for(te(null),K.length=0,q=0;be.length;)be.pop()();for(let e=0;e<V.length;e+=1){const l=V[e];ce.has(l)||(ce.add(l),l())}V.length=0}while(K.length);for(;ve.length;)ve.pop()();ue=!1,ce.clear(),te(i)}function st(i){if(i.fragment!==null){i.update(),ne(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(de)}}function ot(i){const e=[],l=[];V.forEach(n=>i.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),V=e}const re=new Set;let X;function Q(){X={r:0,c:[],p:X}}function F(){X.r||ne(X.c),X=X.p}function c(i,e){i&&i.i&&(re.delete(i),i.i(e))}function $(i,e,l,n){if(i&&i.o){if(re.has(i))return;re.add(i),X.c.push(()=>{re.delete(i),n&&(l&&i.d(1),n())}),i.o(e)}else n&&n()}function T(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function C(i){i&&i.c()}function P(i,e,l){const{fragment:n,after_update:t}=i.$$;n&&n.m(e,l),de(()=>{const s=i.$$.on_mount.map(Xe).filter(qe);i.$$.on_destroy?i.$$.on_destroy.push(...s):ne(s),i.$$.on_mount=[]}),t.forEach(de)}function L(i,e){const l=i.$$;l.fragment!==null&&(ot(l.after_update),ne(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function at(i,e){i.$$.dirty[0]===-1&&(K.push(i),rt(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function D(i,e,l,n,t,s,r=null,a=[-1]){const o=$e;te(i);const f=i.$$={fragment:null,ctx:[],props:s,update:I,not_equal:t,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ge(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(f.root);let h=!1;if(f.ctx=l?l(i,e.props||{},(w,N,...M)=>{const E=M.length?M[0]:N;return f.ctx&&t(f.ctx[w],f.ctx[w]=E)&&(!f.skip_bound&&f.bound[w]&&f.bound[w](E),h&&at(i,w)),N}):[],f.update(),h=!0,ne(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const w=lt(e.target);f.fragment&&f.fragment.l(w),w.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&c(i.$$.fragment),P(i,e.target,e.anchor),Ve()}te(o)}class W{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){L(this,1),this.$destroy=I}$on(e,l){if(!qe(l))return I;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const t=n.indexOf(l);t!==-1&&n.splice(t,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);function we(i){let e,l,n,t=i[0].phone+"",s;return{c(){e=b("span"),l=b("i"),n=A(),s=j(t),v(l,"class","fa fa-phone"),v(e,"class","svelte-xx6yaw")},m(r,a){_(r,e,a),u(e,l),u(e,n),u(e,s)},p(r,a){a&1&&t!==(t=r[0].phone+"")&&B(s,t)},d(r){r&&m(e)}}}function ke(i){let e,l,n,t,s=i[0].website+"",r,a;return{c(){e=b("span"),l=b("i"),n=A(),t=b("a"),r=j(s),v(l,"class","fa fa-link"),v(t,"href",a="https://"+i[0].website),v(t,"target","_blank"),v(e,"class","svelte-xx6yaw")},m(o,f){_(o,e,f),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,f){f&1&&s!==(s=o[0].website+"")&&B(r,s),f&1&&a!==(a="https://"+o[0].website)&&v(t,"href",a)},d(o){o&&m(e)}}}function ye(i){let e,l,n,t,s=i[0].github+"",r,a;return{c(){e=b("span"),l=b("i"),n=A(),t=b("a"),r=j(s),v(l,"class","fa fa-github"),v(t,"href",a="https://github.com/"+i[0].github),v(t,"target","_blank"),v(e,"class","svelte-xx6yaw")},m(o,f){_(o,e,f),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,f){f&1&&s!==(s=o[0].github+"")&&B(r,s),f&1&&a!==(a="https://github.com/"+o[0].github)&&v(t,"href",a)},d(o){o&&m(e)}}}function Se(i){let e,l,n,t,s=i[0].linkedin+"",r,a;return{c(){e=b("span"),l=b("i"),n=A(),t=b("a"),r=j(s),v(l,"class","fa fa-linkedin"),v(t,"href",a="https://linkedin.com/in/"+i[0].linkedin),v(t,"target","_blank"),v(e,"class","svelte-xx6yaw")},m(o,f){_(o,e,f),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,f){f&1&&s!==(s=o[0].linkedin+"")&&B(r,s),f&1&&a!==(a="https://linkedin.com/in/"+o[0].linkedin)&&v(t,"href",a)},d(o){o&&m(e)}}}function ct(i){let e,l=i[0].name+"",n,t,s,r,a,o,f,h=i[0].email+"",w,N,M,E,O,S,g=i[0].phone&&we(i),d=i[0].website&&ke(i),p=i[0].github&&ye(i),k=i[0].linkedin&&Se(i);return{c(){e=b("h1"),n=j(l),t=A(),s=b("div"),r=b("span"),a=b("i"),o=A(),f=b("a"),w=j(h),M=A(),g&&g.c(),E=A(),d&&d.c(),O=A(),p&&p.c(),S=A(),k&&k.c(),v(e,"class","svelte-xx6yaw"),v(a,"class","fa fa-envelope"),v(f,"href",N="mailto:"+i[0].email),v(f,"target","_blank"),v(r,"class","svelte-xx6yaw"),v(s,"class","links svelte-xx6yaw")},m(y,H){_(y,e,H),u(e,n),_(y,t,H),_(y,s,H),u(s,r),u(r,a),u(r,o),u(r,f),u(f,w),u(s,M),g&&g.m(s,null),u(s,E),d&&d.m(s,null),u(s,O),p&&p.m(s,null),u(s,S),k&&k.m(s,null)},p(y,[H]){H&1&&l!==(l=y[0].name+"")&&B(n,l),H&1&&h!==(h=y[0].email+"")&&B(w,h),H&1&&N!==(N="mailto:"+y[0].email)&&v(f,"href",N),y[0].phone?g?g.p(y,H):(g=we(y),g.c(),g.m(s,E)):g&&(g.d(1),g=null),y[0].website?d?d.p(y,H):(d=ke(y),d.c(),d.m(s,O)):d&&(d.d(1),d=null),y[0].github?p?p.p(y,H):(p=ye(y),p.c(),p.m(s,S)):p&&(p.d(1),p=null),y[0].linkedin?k?k.p(y,H):(k=Se(y),k.c(),k.m(s,null)):k&&(k.d(1),k=null)},i:I,o:I,d(y){y&&(m(e),m(t),m(s)),g&&g.d(),d&&d.d(),p&&p.d(),k&&k.d()}}}function ut(i,e,l){let{info:n}=e;return i.$$set=t=>{"info"in t&&l(0,n=t.info)},[n]}class dt extends W{constructor(e){super(),D(this,e,ut,ct,R,{info:0})}}function $t(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=b("p"),t&&t.c(),v(e,"class","tiny svelte-1fcc390")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){$(t,s),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function mt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class pt extends W{constructor(e){super(),D(this,e,mt,$t,R,{})}}function _t(i){let e,l,n=(i[0]||"")+"",t,s,r,a,o;const f=i[2].default,h=Y(f,i,i[1],null);return{c(){e=b("div"),l=b("h1"),t=j(n),s=A(),r=b("hr"),a=A(),h&&h.c(),v(l,"class","svelte-11ocic2"),v(e,"class",i[0])},m(w,N){_(w,e,N),u(e,l),u(l,t),u(e,s),u(e,r),u(e,a),h&&h.m(e,null),o=!0},p(w,[N]){(!o||N&1)&&n!==(n=(w[0]||"")+"")&&B(t,n),h&&h.p&&(!o||N&2)&&x(h,f,w,w[1],o?Z(f,w[1],N,null):ee(w[1]),null),(!o||N&1)&&v(e,"class",w[0])},i(w){o||(c(h,w),o=!0)},o(w){$(h,w),o=!1},d(w){w&&m(e),h&&h.d(w)}}}function ht(i,e,l){let{$$slots:n={},$$scope:t}=e,{name:s}=e;return i.$$set=r=>{"name"in r&&l(0,s=r.name),"$$scope"in r&&l(1,t=r.$$scope)},[s,t,n]}class le extends W{constructor(e){super(),D(this,e,ht,_t,R,{name:0})}}const oe=(i,e)=>e?i+" - "+e:i;function gt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=b("h3"),t&&t.c(),v(e,"class","primary-heading svelte-1l1xr4b")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){$(t,s),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function bt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class Ye extends W{constructor(e){super(),D(this,e,bt,gt,R,{})}}function vt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=b("h4"),t&&t.c(),v(e,"class","secondary-heading svelte-ay9110")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){$(t,s),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function wt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class me extends W{constructor(e){super(),D(this,e,wt,vt,R,{})}}function kt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=b("ul"),t&&t.c()},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){$(t,s),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function yt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class ie extends W{constructor(e){super(),D(this,e,yt,kt,R,{})}}function St(i){let e,l,n;const t=i[1].default,s=Y(t,i,i[0],null);return{c(){e=b("li"),l=j("- "),s&&s.c(),v(e,"class","item-text svelte-vbpaez")},m(r,a){_(r,e,a),u(e,l),s&&s.m(e,null),n=!0},p(r,[a]){s&&s.p&&(!n||a&1)&&x(s,t,r,r[0],n?Z(t,r[0],a,null):ee(r[0]),null)},i(r){n||(c(s,r),n=!0)},o(r){$(s,r),n=!1},d(r){r&&m(e),s&&s.d(r)}}}function At(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class fe extends W{constructor(e){super(),D(this,e,At,St,R,{})}}function Nt(i){let e;return{c(){e=b("div"),v(e,"class","dotted-separator svelte-99c9za")},m(l,n){_(l,e,n)},p:I,i:I,o:I,d(l){l&&m(e)}}}class pe extends W{constructor(e){super(),D(this,e,null,Nt,R,{})}}function Ae(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Ne(i,e,l){const n=i.slice();return n[4]=e[l],n}function Pt(i){let e=i[1].certification+"",l;return{c(){l=j(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].certification+"")&&B(l,e)},d(n){n&&m(l)}}}function Lt(i){let e=i[1].location+"",l;return{c(){l=j(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].location+"")&&B(l,e)},d(n){n&&m(l)}}}function Pe(i){let e,l;return e=new ie({props:{$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Et(i){let e,l=i[4]+"",n;return{c(){e=new ae(!1),n=U(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&(m(n),e.d())}}}function Le(i){let e,l;return e=new fe({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ct(i){let e,l,n=T(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=Le(Ne(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,a){if(a&1){n=T(r[1].details);let o;for(o=0;o<n.length;o+=1){const f=Ne(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Le(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Ee(i){let e,l;return e=new pe({}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ce(i){let e,l,n,t,s,r,a,o,f,h=oe(i[1].start,i[1].end)+"",w,N,M,E,O;l=new Ye({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),t=new me({props:{$$slots:{default:[Lt]},$$scope:{ctx:i}}});let S=i[1].details&&Pe(i),g=i[3]<i[0].length-1&&Ee();return{c(){e=b("div"),C(l.$$.fragment),n=A(),C(t.$$.fragment),s=A(),r=b("div"),a=b("span"),o=b("i"),f=A(),w=j(h),N=A(),S&&S.c(),M=A(),g&&g.c(),E=U(),v(o,"class","fa fa-calendar"),v(r,"class","icon-row"),se(r,"width","100%"),v(e,"class","education")},m(d,p){_(d,e,p),P(l,e,null),u(e,n),P(t,e,null),u(e,s),u(e,r),u(r,a),u(a,o),u(a,f),u(a,w),u(e,N),S&&S.m(e,null),_(d,M,p),g&&g.m(d,p),_(d,E,p),O=!0},p(d,p){const k={};p&129&&(k.$$scope={dirty:p,ctx:d}),l.$set(k);const y={};p&129&&(y.$$scope={dirty:p,ctx:d}),t.$set(y),(!O||p&1)&&h!==(h=oe(d[1].start,d[1].end)+"")&&B(w,h),d[1].details?S?(S.p(d,p),p&1&&c(S,1)):(S=Pe(d),S.c(),c(S,1),S.m(e,null)):S&&(Q(),$(S,1,1,()=>{S=null}),F()),d[3]<d[0].length-1?g?p&1&&c(g,1):(g=Ee(),g.c(),c(g,1),g.m(E.parentNode,E)):g&&(Q(),$(g,1,1,()=>{g=null}),F())},i(d){O||(c(l.$$.fragment,d),c(t.$$.fragment,d),c(S),c(g),O=!0)},o(d){$(l.$$.fragment,d),$(t.$$.fragment,d),$(S),$(g),O=!1},d(d){d&&(m(e),m(M),m(E)),L(l),L(t),S&&S.d(),g&&g.d(d)}}}function jt(i){let e,l,n=T(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ce(Ae(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,[a]){if(a&1){n=T(r[0]);let o;for(o=0;o<n.length;o+=1){const f=Ae(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Ce(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Ot(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class Mt extends W{constructor(e){super(),D(this,e,Ot,jt,R,{items:0})}}function je(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Oe(i,e,l){const n=i.slice();return n[4]=e[l],n}function Bt(i){let e=i[1].title+"",l;return{c(){l=j(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].title+"")&&B(l,e)},d(n){n&&m(l)}}}function Tt(i){let e=i[1].company+"",l;return{c(){l=j(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].company+"")&&B(l,e)},d(n){n&&m(l)}}}function Me(i){let e,l,n,t=i[1].location+"",s;return{c(){e=b("span"),l=b("i"),n=A(),s=j(t),v(l,"class","fa fa-map-marker")},m(r,a){_(r,e,a),u(e,l),u(e,n),u(e,s)},p(r,a){a&1&&t!==(t=r[1].location+"")&&B(s,t)},d(r){r&&m(e)}}}function It(i){let e,l=i[4]+"",n;return{c(){e=new ae(!1),n=U(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&(m(n),e.d())}}}function Be(i){let e,l;return e=new fe({props:{$$slots:{default:[It]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ht(i){let e,l,n=T(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=Be(Oe(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,a){if(a&1){n=T(r[1].details);let o;for(o=0;o<n.length;o+=1){const f=Oe(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Be(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Te(i){let e,l;return e=new pe({}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ie(i){let e,l,n,t,s,r,a,o,f,h=oe(i[1].start,i[1].end)+"",w,N,M,E,O,S,g;l=new Ye({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),t=new me({props:{$$slots:{default:[Tt]},$$scope:{ctx:i}}});let d=i[1].location&&Me(i);E=new ie({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}});let p=i[3]<i[0].length-1&&Te();return{c(){e=b("div"),C(l.$$.fragment),n=A(),C(t.$$.fragment),s=A(),r=b("div"),a=b("span"),o=b("i"),f=A(),w=j(h),N=A(),d&&d.c(),M=A(),C(E.$$.fragment),O=A(),p&&p.c(),S=U(),v(o,"class","fa fa-calendar"),v(r,"class","icon-row"),se(r,"width","100%"),v(e,"class","job")},m(k,y){_(k,e,y),P(l,e,null),u(e,n),P(t,e,null),u(e,s),u(e,r),u(r,a),u(a,o),u(a,f),u(a,w),u(r,N),d&&d.m(r,null),u(e,M),P(E,e,null),_(k,O,y),p&&p.m(k,y),_(k,S,y),g=!0},p(k,y){const H={};y&129&&(H.$$scope={dirty:y,ctx:k}),l.$set(H);const _e={};y&129&&(_e.$$scope={dirty:y,ctx:k}),t.$set(_e),(!g||y&1)&&h!==(h=oe(k[1].start,k[1].end)+"")&&B(w,h),k[1].location?d?d.p(k,y):(d=Me(k),d.c(),d.m(r,null)):d&&(d.d(1),d=null);const he={};y&129&&(he.$$scope={dirty:y,ctx:k}),E.$set(he),k[3]<k[0].length-1?p?y&1&&c(p,1):(p=Te(),p.c(),c(p,1),p.m(S.parentNode,S)):p&&(Q(),$(p,1,1,()=>{p=null}),F())},i(k){g||(c(l.$$.fragment,k),c(t.$$.fragment,k),c(E.$$.fragment,k),c(p),g=!0)},o(k){$(l.$$.fragment,k),$(t.$$.fragment,k),$(E.$$.fragment,k),$(p),g=!1},d(k){k&&(m(e),m(O),m(S)),L(l),L(t),d&&d.d(),L(E),p&&p.d(k)}}}function Rt(i){let e,l,n=T(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ie(je(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,[a]){if(a&1){n=T(r[0]);let o;for(o=0;o<n.length;o+=1){const f=je(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Ie(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Ut(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class Dt extends W{constructor(e){super(),D(this,e,Ut,Rt,R,{items:0})}}function He(i,e,l){const n=i.slice();return n[1]=e[l],n}function Wt(i){let e,l=[i[1].title,i[1].location].filter(Ue).join(" | ")+"",n,t,s,r=i[1].description+"",a;return{c(){e=b("b"),n=j(l),t=j(": "),s=new ae(!1),a=A(),s.a=a},m(o,f){_(o,e,f),u(e,n),_(o,t,f),s.m(r,o,f),_(o,a,f)},p(o,f){f&1&&l!==(l=[o[1].title,o[1].location].filter(Ue).join(" | ")+"")&&B(n,l),f&1&&r!==(r=o[1].description+"")&&s.p(r)},d(o){o&&(m(e),m(t),s.d(),m(a))}}}function Re(i){let e,l;return e=new fe({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,t){const s={};t&17&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Gt(i){let e,l,n=T(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Re(He(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,a){if(a&1){n=T(r[0]);let o;for(o=0;o<n.length;o+=1){const f=He(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Re(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Qt(i){let e,l,n,t;return e=new ie({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment),l=A(),n=b("ul")},m(s,r){P(e,s,r),_(s,l,r),_(s,n,r),t=!0},p(s,[r]){const a={};r&17&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){s&&(m(l),m(n)),L(e,s)}}}const Ue=i=>i;function Ft(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class Jt extends W{constructor(e){super(),D(this,e,Ft,Qt,R,{items:0})}}function De(i,e,l){const n=i.slice();return n[1]=e[l],n}function We(i){let e,l,n=i[1].category+"",t,s,r=i[1].items.join(", ")+"",a,o;return{c(){e=b("ul"),l=b("b"),t=j(n),s=j(`:\r
      `),a=j(r),o=A(),v(e,"class","skill svelte-motwnl")},m(f,h){_(f,e,h),u(e,l),u(l,t),u(e,s),u(e,a),u(e,o)},p(f,h){h&1&&n!==(n=f[1].category+"")&&B(t,n),h&1&&r!==(r=f[1].items.join(", ")+"")&&B(a,r)},d(f){f&&m(e)}}}function zt(i){let e,l=T(i[0]),n=[];for(let t=0;t<l.length;t+=1)n[t]=We(De(i,l,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=U()},m(t,s){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,s);_(t,e,s)},p(t,s){if(s&1){l=T(t[0]);let r;for(r=0;r<l.length;r+=1){const a=De(t,l,r);n[r]?n[r].p(a,s):(n[r]=We(a),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},d(t){t&&m(e),z(n,t)}}}function Xt(i){let e,l;return e=new ie({props:{$$slots:{default:[zt]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,[t]){const s={};t&17&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function qt(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class Kt extends W{constructor(e){super(),D(this,e,qt,Xt,R,{items:0})}}function Ge(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Qe(i,e,l){const n=i.slice();return n[4]=e[l],n}function Vt(i){let e,l,n,t=i[1].title+"",s,r;return{c(){e=b("a"),l=b("i"),n=A(),s=j(t),v(l,"class","fa fa-github"),v(e,"href",r=i[1].link)},m(a,o){_(a,e,o),u(e,l),u(e,n),u(e,s)},p(a,o){o&1&&t!==(t=a[1].title+"")&&B(s,t),o&1&&r!==(r=a[1].link)&&v(e,"href",r)},d(a){a&&m(e)}}}function Yt(i){let e,l=i[4]+"",n;return{c(){e=new ae(!1),n=U(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&(m(n),e.d())}}}function Fe(i){let e,l;return e=new fe({props:{$$slots:{default:[Yt]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Zt(i){let e,l,n=T(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=Fe(Qe(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,a){if(a&1){n=T(r[1].details);let o;for(o=0;o<n.length;o+=1){const f=Qe(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=Fe(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function Je(i){let e,l;return e=new pe({}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function ze(i){let e,l,n,t,s,r,a;l=new me({props:{$$slots:{default:[Vt]},$$scope:{ctx:i}}}),t=new ie({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}});let o=i[3]<i[0].length-1&&Je();return{c(){e=b("div"),C(l.$$.fragment),n=A(),C(t.$$.fragment),s=A(),o&&o.c(),r=U(),v(e,"class","project svelte-1tdn71x")},m(f,h){_(f,e,h),P(l,e,null),u(e,n),P(t,e,null),_(f,s,h),o&&o.m(f,h),_(f,r,h),a=!0},p(f,h){const w={};h&129&&(w.$$scope={dirty:h,ctx:f}),l.$set(w);const N={};h&129&&(N.$$scope={dirty:h,ctx:f}),t.$set(N),f[3]<f[0].length-1?o?h&1&&c(o,1):(o=Je(),o.c(),c(o,1),o.m(r.parentNode,r)):o&&(Q(),$(o,1,1,()=>{o=null}),F())},i(f){a||(c(l.$$.fragment,f),c(t.$$.fragment,f),c(o),a=!0)},o(f){$(l.$$.fragment,f),$(t.$$.fragment,f),$(o),a=!1},d(f){f&&(m(e),m(s),m(r)),L(l),L(t),o&&o.d(f)}}}function xt(i){let e,l,n=T(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=ze(Ge(i,n,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);_(r,e,a),l=!0},p(r,[a]){if(a&1){n=T(r[0]);let o;for(o=0;o<n.length;o+=1){const f=Ge(r,n,o);t[o]?(t[o].p(f,a),c(t[o],1)):(t[o]=ze(f),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(Q(),o=n.length;o<t.length;o+=1)s(o);F()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)c(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);l=!1},d(r){r&&m(e),z(t,r)}}}function en(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class tn extends W{constructor(e){super(),D(this,e,en,xt,R,{items:0})}}const nn="resume.schema.json",ln={name:"Jeremie Bornais",email:"jeremiejbornais@gmail.com",phone:"(226) 350-2944",website:"jeremie.bornais.ca",github:"jere-mie",linkedin:"jeremie-bornais"},rn="Bachelors of Computer Science (Honours), University of Windsor, September 2019 - October 2023, 97.25% GPA",sn=[{location:"University of Windsor",certification:"Bachelors of Computer Science (Honours)",start:"September 2019",end:"October 2023",details:["<b>97.40%</b> Major Average, <b>97.25%</b> Cumulative Average","Recipient of the President's Scholarship, Eleanor Catherine Wallace Memorial Scholarship, and Foresters Scholarship"]},{location:"Business Career College",certification:"Life License Qualification Program (LLQP)",start:"August 2023",end:"October 2023",details:["Completed the LLQP program to obtain my Ontario Life Insurance and Accident & Sickness Insurance licenses"]}],on=[{title:"Software Engineer Intern",company:"Publicis Sapient",start:"June 2022",end:"August 2022",location:"Toronto, ON",details:["Created and deployed a <b>GraphQL</b> API using <b>Java, Spring Boot, and PostgreSQL</b> for a personal budgeting mobile app.","Used <b>GitHub Actions</b> to set up automated <b>CI/CD</b> workflows."]},{title:"Software Developer Intern",company:"Assent Inc.",start:"January 2022",end:"April 2022",location:"Ottawa, ON",details:["Used <b>Angular and SCSS</b> to create and update front-end components, adhering to strict styling standards.","Used <b>C# and .NET Core</b> to create API endpoints, unit tests, component tests, and integration tests."]},{title:"Software Developer Intern",company:"Green Shield Canada",start:"May 2021",end:"August 2021",location:"Windsor, ON",details:["Used <b>Oracle PL/SQL</b> to create Data Reports and Extracts"]},{title:"Research Software Developer",company:"University of Windsor",start:"June 2020",end:"April 2023",location:"Windsor, ON",details:["Developed a <b>web application</b> for the analysis and presentation of experimental SAS data","Achieved <b>100X faster compute time</b> of select elements","Using <b>Flask, Bootstrap, NumPy, SciPy, and Matplotlib</b>"]},{title:"Teaching Assistant",company:"University of Windsor",start:"September 2020",end:"June 2023",location:"Windsor, ON",details:["Responsible for lab instruction, marking, and holding office hours for <b>4 core undergraduate courses</b>","<b>Built and deployed a web application</b> that grades assignments</b>"]}],an=[{category:"Programming",items:["Python","JavaScript","Go","Java","C#","HTML","CSS","SCSS","C++","SQL","C","Ruby"]},{category:"Frameworks",items:["Flask","React Native","Svelte","Angular","React.js","Gin",".NET Core","Spring Boot","Bootstrap","Ruby on Rails"]},{category:"Technologies",items:["Git","Linux","Docker","Caddy Server","GraphQL","REST API","OAuth2","CI/CD","GitHub Actions"]},{category:"Cloud",items:["Google Cloud Platform","Microsoft Azure","DigitalOcean","Heroku"]}],fn=[{title:"Automagic Websites",link:"https://github.com/jere-mie/automagic-websites",details:["Full stack web application featuring <b>user authentication</b>","Allows users to <b>create, host, and export</b> their own personal website","Made with <b>Python, Flask, SQLAlchemy, Bootstrap</b>"]},{title:"UWindsor API",link:"https://github.com/jere-mie/uwindsor-api",details:["<b>REST API</b> created to enable developers to create applications for the UWindsor community","Serves course, staff and building data related to the University of Windsor","Made with <b>Go, Gin, and SQLX</b>"]},{title:"Easy-MASM",link:"https://github.com/jere-mie/easy-masm",details:["Automated system for assembling, linking, and executing <b>MASM32</b> programs","Used by over <b>500 students</b>","Made with <b>Docker, bash and batch</b>"]}],cn=[{title:"President",description:"Led a team of 20 volunteers to create applications, organize events, and represent over 900 undergraduate students (2021-2023)"},{title:"Co-Founder and Technical Lead",description:"MLH Hackathon (winhacks.ca) (2020-2022)",location:"WinHacks"},{title:"Co-Founder and Technical Lead",description:"MLH Hackathon (borderhacks.com) (2020-2021)",location:"BorderHacks"}],G={$schema:nn,info:ln,tiny_text:rn,education:sn,experience:on,skills:an,projects:fn,extracurricular:cn};function un(i){let e,l;return e=new pt({props:{$$slots:{default:[dn]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function dn(i){let e=G.tiny_text+"",l;return{c(){l=j(e)},m(n,t){_(n,l,t)},p:I,d(n){n&&m(l)}}}function $n(i){let e,l;return e=new le({props:{name:"Experience",$$slots:{default:[mn]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function mn(i){let e,l;return e=new Dt({props:{items:G.experience}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p:I,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function pn(i){let e,l;return e=new le({props:{name:"Extracurricular",$$slots:{default:[_n]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function _n(i){let e,l;return e=new Jt({props:{items:G.extracurricular}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p:I,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function hn(i){let e,l;return e=new le({props:{name:"Education",$$slots:{default:[gn]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function gn(i){let e,l;return e=new Mt({props:{items:G.education}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p:I,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function bn(i){let e,l;return e=new le({props:{name:"Skills",$$slots:{default:[vn]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function vn(i){let e,l;return e=new Kt({props:{items:G.skills}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p:I,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function wn(i){let e,l;return e=new le({props:{name:"Projects",$$slots:{default:[kn]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function kn(i){let e,l;return e=new tn({props:{items:G.projects}}),{c(){C(e.$$.fragment)},m(n,t){P(e,n,t),l=!0},p:I,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function yn(i){let e,l,n,t,s,r,a,o,f,h,w;e=new dt({props:{info:G.info}});let N=un(i),M=G.experience&&$n(i),E=G.extracurricular&&pn(i),O=G.education&&hn(i),S=G.skills&&bn(i),g=G.projects&&wn(i);return{c(){C(e.$$.fragment),l=A(),n=b("main"),t=b("div"),N&&N.c(),s=A(),M&&M.c(),r=A(),E&&E.c(),a=A(),o=b("div"),O&&O.c(),f=A(),S&&S.c(),h=A(),g&&g.c(),se(t,"width","50%"),se(o,"width","45%"),v(n,"class","svelte-cgayy3")},m(d,p){P(e,d,p),_(d,l,p),_(d,n,p),u(n,t),N&&N.m(t,null),u(t,s),M&&M.m(t,null),u(t,r),E&&E.m(t,null),u(n,a),u(n,o),O&&O.m(o,null),u(o,f),S&&S.m(o,null),u(o,h),g&&g.m(o,null),w=!0},p:I,i(d){w||(c(e.$$.fragment,d),c(N),c(M),c(E),c(O),c(S),c(g),w=!0)},o(d){$(e.$$.fragment,d),$(N),$(M),$(E),$(O),$(S),$(g),w=!1},d(d){d&&(m(l),m(n)),L(e,d),N&&N.d(),M&&M.d(),E&&E.d(),O&&O.d(),S&&S.d(),g&&g.d()}}}class Sn extends W{constructor(e){super(),D(this,e,null,yn,R,{})}}new Sn({target:document.getElementById("app")});