import{c as be,F as Z,C as ve,d as $,p as we,A as R,i as I,r as z,b as C,q as ee,t as O,g as xe,k as g,M as ye,o as k,w as T,n as ge,aW as $e}from"./@vue-CrgvOuab.js";import{a as F,o as V}from"./evtd-CI_DDEu_.js";import{e as Me,f as Ee,g as ze}from"./seemly-CrL6PWhJ.js";import{u as te}from"./@css-render-CM5UHK-_.js";import{e as Se,u as P,o as Te,i as Fe}from"./vooks-CZh870Nw.js";import{z as Ae}from"./vdirs-DL8EOfHr.js";import{R as Be}from"./@juggle-C8OzoCMD.js";import{C as Oe}from"./css-render-Ct37b3-v.js";function D(n,e,t="default"){const o=e[t];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return o()}function W(n,e=!0,t=[]){return n.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(be(String(o)));return}if(Array.isArray(o)){W(o,e,t);return}if(o.type===Z){if(o.children===null)return;Array.isArray(o.children)&&W(o.children,e,t)}else o.type!==ve&&t.push(o)}}),t}function j(n,e,t="default"){const o=e[t];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const i=W(o());if(i.length===1)return i[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let y=null;function ne(){if(y===null&&(y=document.getElementById("v-binder-view-measurer"),y===null)){y=document.createElement("div"),y.id="v-binder-view-measurer";const{style:n}=y;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(y)}return y.getBoundingClientRect()}function Ce(n,e){const t=ne();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function Y(n){const e=n.getBoundingClientRect(),t=ne();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function Xe(n){return n.nodeType===9?null:n.parentNode}function re(n){if(n===null)return null;const e=Xe(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:o,overflowY:i}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+i+o))return e}return re(e)}const Ye=$({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;we("VBinder",(e=R())===null||e===void 0?void 0:e.proxy);const t=I("VBinder",null),o=z(null),i=r=>{o.value=r,t&&n.syncTargetWithParent&&t.setTargetRef(r)};let d=[];const p=()=>{let r=o.value;for(;r=re(r),r!==null;)d.push(r);for(const c of d)V("scroll",c,w,!0)},m=()=>{for(const r of d)F("scroll",r,w,!0);d=[]},u=new Set,b=r=>{u.size===0&&p(),u.has(r)||u.add(r)},v=r=>{u.has(r)&&u.delete(r),u.size===0&&m()},w=()=>{Me(s)},s=()=>{u.forEach(r=>r())},a=new Set,h=r=>{a.size===0&&V("resize",window,l),a.has(r)||a.add(r)},f=r=>{a.has(r)&&a.delete(r),a.size===0&&F("resize",window,l)},l=()=>{a.forEach(r=>r())};return C(()=>{F("resize",window,l),m()}),{targetRef:o,setTargetRef:i,addScrollListener:b,removeScrollListener:v,addResizeListener:h,removeResizeListener:f}},render(){return D("binder",this.$slots)}}),et=Ye,tt=$({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=I("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?ee(j("follower",this.$slots),[[e]]):j("follower",this.$slots)}});function U(n,e){console.error(`[vueuc/${n}]: ${e}`)}const{c:E}=Oe(),oe="vueuc-style";function q(n){return typeof n=="string"?document.querySelector(n):n()}const Le=$({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Se(O(n,"show")),mergedTo:xe(()=>{const{to:e}=n;return e??"body"})}},render(){return this.showTeleport?this.disabled?D("lazy-teleport",this.$slots):g(ye,{disabled:this.disabled,to:this.mergedTo},D("lazy-teleport",this.$slots)):null}}),B={top:"bottom",bottom:"top",left:"right",right:"left"},K={start:"end",center:"center",end:"start"},L={top:"height",bottom:"height",left:"width",right:"width"},Ve={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},De={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},We={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},G={top:!0,bottom:!1,left:!0,right:!1},J={top:"end",bottom:"start",left:"end",right:"start"};function Ie(n,e,t,o,i,d){if(!i||d)return{placement:n,top:0,left:0};const[p,m]=n.split("-");let u=m??"center",b={top:0,left:0};const v=(a,h,f)=>{let l=0,r=0;const c=t[a]-e[h]-e[a];return c>0&&o&&(f?r=G[h]?c:-c:l=G[h]?c:-c),{left:l,top:r}},w=p==="left"||p==="right";if(u!=="center"){const a=We[n],h=B[a],f=L[a];if(t[f]>e[f]){if(e[a]+e[f]<t[f]){const l=(t[f]-e[f])/2;e[a]<l||e[h]<l?e[a]<e[h]?(u=K[m],b=v(f,h,w)):b=v(f,a,w):u="center"}}else t[f]<e[f]&&e[h]<0&&e[a]>e[h]&&(u=K[m])}else{const a=p==="bottom"||p==="top"?"left":"top",h=B[a],f=L[a],l=(t[f]-e[f])/2;(e[a]<l||e[h]<l)&&(e[a]>e[h]?(u=J[a],b=v(f,a,w)):(u=J[h],b=v(f,h,w)))}let s=p;return e[p]<t[L[p]]&&e[p]<e[B[p]]&&(s=B[p]),{placement:u!=="center"?`${s}-${u}`:s,left:b.left,top:b.top}}function ke(n,e){return e?De[n]:Ve[n]}function He(n,e,t,o,i,d){if(d)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+o)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+o)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+o)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+o)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+o)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+o)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+o)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+o)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+o)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+o)}px`,left:`${Math.round(t.left-e.left+t.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+o)}px`,left:`${Math.round(t.left-e.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+o)}px`,left:`${Math.round(t.left-e.left+t.width/2+i)}px`,transform:"translateX(-50%)"}}}const Ne=E([E(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),E(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[E("> *",{pointerEvents:"all"})])]),nt=$({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=I("VBinder"),t=P(()=>n.enabled!==void 0?n.enabled:n.show),o=z(null),i=z(null),d=()=>{const{syncTrigger:s}=n;s.includes("scroll")&&e.addScrollListener(u),s.includes("resize")&&e.addResizeListener(u)},p=()=>{e.removeScrollListener(u),e.removeResizeListener(u)};k(()=>{t.value&&(u(),d())});const m=te();Ne.mount({id:"vueuc/binder",head:!0,anchorMetaName:oe,ssr:m}),C(()=>{p()}),Te(()=>{t.value&&u()});const u=()=>{if(!t.value)return;const s=o.value;if(s===null)return;const a=e.targetRef,{x:h,y:f,overlap:l}=n,r=h!==void 0&&f!==void 0?Ce(h,f):Y(a);s.style.setProperty("--v-target-width",`${Math.round(r.width)}px`),s.style.setProperty("--v-target-height",`${Math.round(r.height)}px`);const{width:c,minWidth:x,placement:A,internalShift:ae,flip:de}=n;s.setAttribute("v-placement",A),l?s.setAttribute("v-overlap",""):s.removeAttribute("v-overlap");const{style:M}=s;c==="target"?M.width=`${r.width}px`:c!==void 0?M.width=c:M.width="",x==="target"?M.minWidth=`${r.width}px`:x!==void 0?M.minWidth=x:M.minWidth="";const fe=Y(s),he=Y(i.value),{left:H,top:N,placement:X}=Ie(A,r,fe,ae,de,l),_=ke(X,l),{left:pe,top:ce,transform:me}=He(X,he,r,N,H,l);s.setAttribute("v-placement",X),s.style.setProperty("--v-offset-left",`${Math.round(H)}px`),s.style.setProperty("--v-offset-top",`${Math.round(N)}px`),s.style.transform=`translateX(${pe}) translateY(${ce}) ${me}`,s.style.setProperty("--v-transform-origin",_),s.style.transformOrigin=_};T(t,s=>{s?(d(),b()):p()});const b=()=>{ge().then(u).catch(s=>console.error(s))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(s=>{T(O(n,s),u)}),["teleportDisabled"].forEach(s=>{T(O(n,s),b)}),T(O(n,"syncTrigger"),s=>{s.includes("resize")?e.addResizeListener(u):e.removeResizeListener(u),s.includes("scroll")?e.addScrollListener(u):e.removeScrollListener(u)});const v=Fe(),w=P(()=>{const{to:s}=n;if(s!==void 0)return s;v.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:i,followerRef:o,mergedTo:w,syncPosition:u}},render(){return g(Le,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=g("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[g("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?ee(t,[[Ae,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});class _e{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Be)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}const Q=new _e,rt=$({name:"ResizeObserver",props:{onResize:Function},setup(n){let e=!1;const t=R().proxy;function o(i){const{onResize:d}=n;d!==void 0&&d(i)}k(()=>{const i=t.$el;if(i===void 0){U("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){U("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(Q.registerHandler(i.nextElementSibling,o),e=!0)}),C(()=>{e&&Q.unregisterHandler(t.$el.nextElementSibling)})},render(){return $e(this.$slots,"default")}}),Pe=E(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[E("&::-webkit-scrollbar",{width:0,height:0})]),ot=$({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const n=z(null);function e(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const t=te();return Pe.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:oe,ssr:t}),Object.assign({selfRef:n,handleWheel:e},{scrollTo(...i){var d;(d=n.value)===null||d===void 0||d.scrollTo(...i)}})},render(){return g("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});function ie(n){return n instanceof HTMLElement}function le(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(ie(t)&&(ue(t)||le(t)))return!0}return!1}function se(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(ie(t)&&(ue(t)||se(t)))return!0}return!1}function ue(n){if(!je(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function je(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let S=[];const it=$({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=Ee(),t=z(null),o=z(null);let i=!1,d=!1;const p=typeof document>"u"?null:document.activeElement;function m(){return S[S.length-1]===e}function u(l){var r;l.code==="Escape"&&m()&&((r=n.onEsc)===null||r===void 0||r.call(n,l))}k(()=>{T(()=>n.active,l=>{l?(w(),V("keydown",document,u)):(F("keydown",document,u),i&&s())},{immediate:!0})}),C(()=>{F("keydown",document,u),i&&s()});function b(l){if(!d&&m()){const r=v();if(r===null||r.contains(ze(l)))return;a("first")}}function v(){const l=t.value;if(l===null)return null;let r=l;for(;r=r.nextSibling,!(r===null||r instanceof Element&&r.tagName==="DIV"););return r}function w(){var l;if(!n.disabled){if(S.push(e),n.autoFocus){const{initialFocusTo:r}=n;r===void 0?a("first"):(l=q(r))===null||l===void 0||l.focus({preventScroll:!0})}i=!0,document.addEventListener("focus",b,!0)}}function s(){var l;if(n.disabled||(document.removeEventListener("focus",b,!0),S=S.filter(c=>c!==e),m()))return;const{finalFocusTo:r}=n;r!==void 0?(l=q(r))===null||l===void 0||l.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&p instanceof HTMLElement&&(d=!0,p.focus({preventScroll:!0}),d=!1)}function a(l){if(m()&&n.active){const r=t.value,c=o.value;if(r!==null&&c!==null){const x=v();if(x==null||x===c){d=!0,r.focus({preventScroll:!0}),d=!1;return}d=!0;const A=l==="first"?le(x):se(x);d=!1,A||(d=!0,r.focus({preventScroll:!0}),d=!1)}}}function h(l){if(d)return;const r=v();r!==null&&(l.relatedTarget!==null&&r.contains(l.relatedTarget)?a("last"):a("first"))}function f(l){d||(l.relatedTarget!==null&&l.relatedTarget===t.value?a("last"):a("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:f}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return g(Z,null,[g("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),g("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});export{it as F,rt as V,nt as a,tt as b,et as c,ot as d};
