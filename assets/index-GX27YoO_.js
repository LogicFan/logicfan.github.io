var Le=Object.defineProperty;var $e=(t,e,n)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var B=(t,e,n)=>($e(t,typeof e!="symbol"?e+"":e,n),n);import{d as J,bx as D,r as Z,aO as F,a1 as Ce,a9 as m,by as g,a2 as R,bg as s,az as Y,F as De,$ as O,c as E,aX as Be,aR as je,aP as Ue,M as Q,_ as Ge}from"./@vue-C6c05riL.js";import{L as ve,B as He,D as ye}from"./vue-chartjs-NfUR0-Eb.js";import{p as Re}from"./chartjs-plugin-zoom-DGFF8bbX.js";import{b as re,C as fe,p as me,d as pe,f as be,h as ze,i as Te,P as Se,j as ge,k as we,T as he,l as We,A as Ve}from"./chart.js-CS2BZAAA.js";import"./chartjs-adapter-date-fns-B1M5gydP.js";import{N as M,a as qe,b as oe,c as Ye,d as Ze,e as ee,f as Ke,g as Je,h as Xe}from"./naive-ui-DFOT7nzu.js";import{V as Qe}from"./vue-mathjax-next-CPDiIMce.js";import"./hammerjs-BKGieZPK.js";import"./@babel-DuvU54pN.js";import"./@kurkle-BZxJdD1U.js";import"./date-fns-99pyhWYT.js";import"./seemly-BFh2AANw.js";import"./vooks-UHRToW5y.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-nRLt9CzG.js";import"./@emotion-WldOFDRm.js";import"./@css-render-5itupMdg.js";import"./css-render-Ct37b3-v.js";import"./vueuc-CQX-IOll.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./treemate-HRdUPn5m.js";import"./vue-CMUvV8mj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ee=(t,e)=>Math.pow(Math.max(0,t),e)-Math.pow(Math.max(0,-t),e),Me=(t,e)=>{let n=e.max-e.min;return(t-e.min)/n*2-1},Fe=(t,e)=>{let n=e.max-e.min;return(t+1)*n*.5+e.min};class _e extends re{constructor(n){super(n);B(this,"start");B(this,"end");B(this,"_startValue");B(this,"_endValue");B(this,"_valueRange");this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}fTransform(n){let a={min:this.min,max:this.max},r=Me(n,a),i=Ee(r,this.options.level),_=Fe(i,a);return Math.round(_)}rTransform(n){let a={min:this.min,max:this.max},r=Me(n,a),i=Ee(r,1/this.options.level),_=Fe(i,a);return Math.round(_)}buildTicks(){return super.buildTicks().map(a=>Object.assign({},a,{value:this.fTransform(a.value)}))}getPixelForValue(n,a){return super.getPixelForValue(this.rTransform(n),a)}getValueForPixel(n){return super.getValueForPixel(this.fTransform(n))}}B(_e,"id","focus"),B(_e,"defaults",{level:1});let h;const L=new Array(128).fill(void 0);L.push(void 0,null,!0,!1);function l(t){return L[t]}let ae=L.length;function et(t){t<132||(L[t]=ae,ae=t)}function I(t){const e=l(t);return et(t),e}function d(t){ae===L.length&&L.push(L.length+1);const e=ae;return ae=L[e],L[e]=t,e}const Ne=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Ne.decode();let te=null;function ce(){return(te===null||te.byteLength===0)&&(te=new Uint8Array(h.memory.buffer)),te}function W(t,e){return t=t>>>0,Ne.decode(ce().subarray(t,t+e))}let K=0;const ue=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},tt=typeof ue.encodeInto=="function"?function(t,e){return ue.encodeInto(t,e)}:function(t,e){const n=ue.encode(t);return e.set(n),{read:t.length,written:n.length}};function de(t,e,n){if(n===void 0){const y=ue.encode(t),w=e(y.length,1)>>>0;return ce().subarray(w,w+y.length).set(y),K=y.length,w}let a=t.length,r=e(a,1)>>>0;const i=ce();let _=0;for(;_<a;_++){const y=t.charCodeAt(_);if(y>127)break;i[r+_]=y}if(_!==a){_!==0&&(t=t.slice(_)),r=n(r,a,a=_+t.length*3,1)>>>0;const y=ce().subarray(r+_,r+a),w=tt(t,y);_+=w.written,r=n(r,a,_,1)>>>0}return K=_,r}function nt(t){return t==null}let ne=null;function V(){return(ne===null||ne.byteLength===0)&&(ne=new Int32Array(h.memory.buffer)),ne}function xe(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const r=t.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=t.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(t)){const r=t.length;let i="[";r>0&&(i+=xe(t[0]));for(let _=1;_<r;_++)i+=", "+xe(t[_]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let a;if(n.length>1)a=n[1];else return toString.call(t);if(a=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:a}const Ae=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{h.__wbindgen_export_2.get(t.dtor)(t.a,t.b)});function at(t,e,n,a){const r={a:t,b:e,cnt:1,dtor:n},i=(..._)=>{r.cnt++;const y=r.a;r.a=0;try{return a(y,r.b,..._)}finally{--r.cnt===0?(h.__wbindgen_export_2.get(r.dtor)(y,r.b),Ae.unregister(r)):r.a=y}};return i.original=r,Ae.register(i,r,r),i}function rt(t,e,n){h._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1fc7d0969a12ef6f(t,e,d(n))}function Pe(t){const e=h.wasm_invite_score_data(t);return I(e)}function G(t,e){const n=de(e,h.__wbindgen_malloc,h.__wbindgen_realloc),a=K,r=h.wasm_invite_size_data(t,n,a);return I(r)}function ie(t){const e=h.wasm_invite_x_min(t);return I(e)}function se(t){const e=h.wasm_invite_x_max(t);return I(e)}function ot(){const t=h.wasm_invite_data();return I(t)}function it(){const t=h.wasm_pool_data();return I(t)}function st(t){const e=h.wasm_pool_count_data(t);return I(e)}function lt(t){const e=h.wasm_pool_count_y_max(t);return I(e)}function ct(t){const e=h.wasm_pool_x_min(t);return I(e)}function ut(t){const e=h.wasm_pool_x_max(t);return I(e)}function k(t,e){try{return t.apply(this,e)}catch(n){h.__wbindgen_exn_store(d(n))}}function dt(t,e,n,a){h.wasm_bindgen__convert__closures__invoke2_mut__h92b3b5d7258d78e6(t,e,d(n),d(a))}async function _t(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function ft(){const t={};return t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(e){I(e)},t.wbg.__wbindgen_number_new=function(e){return d(e)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=l(e);return d(n)},t.wbg.__wbindgen_string_new=function(e,n){const a=W(e,n);return d(a)},t.wbg.__wbg_fetch_27eb4c0a08a9ca04=function(e){const n=fetch(l(e));return d(n)},t.wbg.__wbindgen_cb_drop=function(e){const n=I(e).original;return n.cnt--==1?(n.a=0,!0):!1},t.wbg.__wbg_queueMicrotask_f61ee94ee663068b=function(e){queueMicrotask(l(e))},t.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=function(e){const n=l(e).queueMicrotask;return d(n)},t.wbg.__wbindgen_is_function=function(e){return typeof l(e)=="function"},t.wbg.__wbg_fetch_10edd7d7da150227=function(e,n){const a=l(e).fetch(l(n));return d(a)},t.wbg.__wbg_signal_8fbb4942ce477464=function(e){const n=l(e).signal;return d(n)},t.wbg.__wbg_new_92cc7d259297256c=function(){return k(function(){const e=new AbortController;return d(e)},arguments)},t.wbg.__wbg_abort_510372063dd66b29=function(e){l(e).abort()},t.wbg.__wbg_newwithstrandinit_11fbc38beb4c26b0=function(){return k(function(e,n,a){const r=new Request(W(e,n),l(a));return d(r)},arguments)},t.wbg.__wbindgen_string_get=function(e,n){const a=l(n),r=typeof a=="string"?a:void 0;var i=nt(r)?0:de(r,h.__wbindgen_malloc,h.__wbindgen_realloc),_=K;V()[e/4+1]=_,V()[e/4+0]=i},t.wbg.__wbg_new_4db22fd5d40c5665=function(){return k(function(){const e=new Headers;return d(e)},arguments)},t.wbg.__wbg_append_b2e8ed692fc5eb6e=function(){return k(function(e,n,a,r,i){l(e).append(W(n,a),W(r,i))},arguments)},t.wbg.__wbg_instanceof_Response_b5451a06784a2404=function(e){let n;try{n=l(e)instanceof Response}catch{n=!1}return n},t.wbg.__wbg_url_e319aee56d26ddf1=function(e,n){const a=l(n).url,r=de(a,h.__wbindgen_malloc,h.__wbindgen_realloc),i=K;V()[e/4+1]=i,V()[e/4+0]=r},t.wbg.__wbg_status_bea567d1049f0b6a=function(e){return l(e).status},t.wbg.__wbg_headers_96d9457941f08a33=function(e){const n=l(e).headers;return d(n)},t.wbg.__wbg_arrayBuffer_eb2005809be09726=function(){return k(function(e){const n=l(e).arrayBuffer();return d(n)},arguments)},t.wbg.__wbindgen_is_object=function(e){const n=l(e);return typeof n=="object"&&n!==null},t.wbg.__wbg_set_f975102236d3c502=function(e,n,a){l(e)[I(n)]=I(a)},t.wbg.__wbg_new_75208e29bddfd88c=function(){const e=new Array;return d(e)},t.wbg.__wbg_newnoargs_cfecb3965268594c=function(e,n){const a=new Function(W(e,n));return d(a)},t.wbg.__wbg_next_586204376d2ed373=function(e){const n=l(e).next;return d(n)},t.wbg.__wbg_next_b2d3366343a208b3=function(){return k(function(e){const n=l(e).next();return d(n)},arguments)},t.wbg.__wbg_done_90b14d6f6eacc42f=function(e){return l(e).done},t.wbg.__wbg_value_3158be908c80a75e=function(e){const n=l(e).value;return d(n)},t.wbg.__wbg_iterator_40027cdd598da26b=function(){return d(Symbol.iterator)},t.wbg.__wbg_get_3fddfed2c83f434c=function(){return k(function(e,n){const a=Reflect.get(l(e),l(n));return d(a)},arguments)},t.wbg.__wbg_call_3f093dd26d5569f8=function(){return k(function(e,n){const a=l(e).call(l(n));return d(a)},arguments)},t.wbg.__wbg_new_632630b5cec17f21=function(){const e=new Object;return d(e)},t.wbg.__wbg_self_05040bd9523805b9=function(){return k(function(){const e=self.self;return d(e)},arguments)},t.wbg.__wbg_window_adc720039f2cb14f=function(){return k(function(){const e=window.window;return d(e)},arguments)},t.wbg.__wbg_globalThis_622105db80c1457d=function(){return k(function(){const e=globalThis.globalThis;return d(e)},arguments)},t.wbg.__wbg_global_f56b013ed9bcf359=function(){return k(function(){const e=global.global;return d(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return l(e)===void 0},t.wbg.__wbg_set_79c308ecd9a1d091=function(e,n,a){l(e)[n>>>0]=I(a)},t.wbg.__wbg_call_67f2111acd2dfdb6=function(){return k(function(e,n,a){const r=l(e).call(l(n),l(a));return d(r)},arguments)},t.wbg.__wbg_new_70828a4353259d4b=function(e,n){try{var a={a:e,b:n},r=(_,y)=>{const w=a.a;a.a=0;try{return dt(w,a.b,_,y)}finally{a.a=w}};const i=new Promise(r);return d(i)}finally{a.a=a.b=0}},t.wbg.__wbg_resolve_5da6faf2c96fd1d5=function(e){const n=Promise.resolve(l(e));return d(n)},t.wbg.__wbg_then_f9e58f5a50f43eae=function(e,n){const a=l(e).then(l(n));return d(a)},t.wbg.__wbg_then_20a5920e447d1cb1=function(e,n,a){const r=l(e).then(l(n),l(a));return d(r)},t.wbg.__wbg_buffer_b914fb8b50ebbc3e=function(e){const n=l(e).buffer;return d(n)},t.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=function(e,n,a){const r=new Uint8Array(l(e),n>>>0,a>>>0);return d(r)},t.wbg.__wbg_new_b1f2d6842d615181=function(e){const n=new Uint8Array(l(e));return d(n)},t.wbg.__wbg_set_7d988c98e6ced92d=function(e,n,a){l(e).set(l(n),a>>>0)},t.wbg.__wbg_length_21c4b0ae73cba59d=function(e){return l(e).length},t.wbg.__wbg_stringify_865daa6fb8c83d5a=function(){return k(function(e){const n=JSON.stringify(l(e));return d(n)},arguments)},t.wbg.__wbg_has_ad45eb020184f624=function(){return k(function(e,n){return Reflect.has(l(e),l(n))},arguments)},t.wbg.__wbg_set_961700853a212a39=function(){return k(function(e,n,a){return Reflect.set(l(e),l(n),l(a))},arguments)},t.wbg.__wbindgen_debug_string=function(e,n){const a=xe(l(n)),r=de(a,h.__wbindgen_malloc,h.__wbindgen_realloc),i=K;V()[e/4+1]=i,V()[e/4+0]=r},t.wbg.__wbindgen_throw=function(e,n){throw new Error(W(e,n))},t.wbg.__wbindgen_memory=function(){const e=h.memory;return d(e)},t.wbg.__wbindgen_closure_wrapper393=function(e,n,a){const r=at(e,n,78,rt);return d(r)},t}function mt(t,e){return h=t.exports,ke.__wbindgen_wasm_module=e,ne=null,te=null,h}async function ke(t){if(h!==void 0)return h;typeof t>"u"&&(t=new URL("/assets/analyzer_bg-Bdv7Yc9j.wasm",import.meta.url));const e=ft();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:a}=await _t(await t,e);return mt(n,a)}const pt=J({__name:"Invitations",async setup(t){let e,n;fe.register(me,pe,be,ze,Te,Se,ge,re,we,he,_e,Re),[e,n]=D(()=>ke()),await e,n();let a=Z(),r=Z(),i=Z();const _=function(){return i.value.chart},y=function(){return i.value==a.value?r.value.chart:i.value==r.value?a.value.chart:null};let w=([e,n]=D(()=>ot()),e=await e,n(),e);const H=function(c,o,b){let T=this.getLabelForValue(c);return" ".repeat(8-T.length)+T},j=c=>{let o=c.chart;if(_()==o){let b=y();b.scales.x.options.min=o.scales.x.options.min,b.scales.x.options.max=o.scales.x.options.max,b.update("none")}},N=c=>{let o=c.chart;if(_()==o){let S=y();S.scales.x.options.min=o.scales.x.options.min,S.scales.x.options.max=o.scales.x.options.max,S.update("none")}let b=r.value.chart,T={min:b.scales.x.min,max:b.scales.x.max},v=(T.max-T.min)/1e3/3600/24;v>2500?(b.data=G(w,"m"),b.options.plugins.tooltip.callbacks.title=u):v>583?(b.data=G(w,"w"),b.options.plugins.tooltip.callbacks.title=f):(b.data=G(w,"d"),b.options.plugins.tooltip.callbacks.title=p),b.update("none")};let U={zoom:{wheel:{enabled:!0},mode:"x",onZoom:N},limits:{x:{min:ie(w),max:se(w)}},pan:{enabled:!0,mode:"x",onPan:j}};const $=function(c){return c.map(o=>Pe(w).tooltip.title[o.dataIndex])};let P={maintainAspectRatio:!1,scales:{x:{type:"time",min:ie(w),max:se(w)},y:{type:"focus",level:1.5,min:0,max:1e3,grid:{display:!1},ticks:{callback:H}}},plugins:{zoom:U,tooltip:{callbacks:{title:$}}}};const u=function(c){return c.map(o=>G(w,"m").tooltip.title[o.dataIndex])},f=function(c){return c.map(o=>G(w,"w").tooltip.title[o.dataIndex])},p=function(c){return c.map(o=>G(w,"d").tooltip.title[o.dataIndex])};let C={maintainAspectRatio:!1,scales:{x:{type:"time",min:([e,n]=D(()=>ie(w)),e=await e,n(),e),max:([e,n]=D(()=>se(w)),e=await e,n(),e)},y:{type:"logarithmic",min:0,grid:{display:!1},ticks:{callback:H}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"x",onZoom:N},limits:{x:{min:([e,n]=D(()=>ie(w)),e=await e,n(),e),max:([e,n]=D(()=>se(w)),e=await e,n(),e)}},pan:{enabled:!0,mode:"x",onPan:j}},tooltip:{callbacks:{title:u}}}};return(c,o)=>(F(),Ce(De,null,[m(s(M),{title:"Invitation CRS Score"},{default:g(()=>[R("div",null,[m(s(ve),{ref_key:"scoreChartRef",ref:a,onMouseover:o[0]||(o[0]=b=>Y(i)?i.value=s(a):i=s(a)),onMouseleave:o[1]||(o[1]=b=>Y(i)?i.value=null:i=null),options:s(P),data:s(Pe)(s(w)),style:{height:"30vh",width:"100%"}},null,8,["options","data"])])]),_:1}),m(s(M),{title:"Invitation Size"},{default:g(()=>[R("div",null,[m(s(He),{ref_key:"sizeChartRef",ref:r,onMouseover:o[2]||(o[2]=b=>Y(i)?i.value=s(r):i=s(r)),onMouseleave:o[3]||(o[3]=b=>Y(i)?i.value=null:i=null),options:s(C),data:s(G)(s(w),"m"),style:{height:"30vh",width:"100%"}},null,8,["options","data"])])]),_:1})],64))}}),X=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},bt=X(pt,[["__scopeId","data-v-150dce06"]]),gt=J({__name:"Candidates",async setup(t){let e,n;fe.register(me,pe,be,Te,Se,ge,re,we,he,Re,We),[e,n]=D(()=>ke()),await e,n();let a=([e,n]=D(()=>it()),e=await e,n(),e),r={maintainAspectRatio:!1,scales:{x:{type:"time"},y:{min:0,stacked:!0}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"xy"},limits:{y:{min:0,max:lt(a)},x:{min:ct(a),max:ut(a)}},pan:{enabled:!0,mode:"xy"}},tooltip:{enabled:!1}}};return(i,_)=>(F(),O(s(M),{title:"Candidates in the Pool"},{"header-extra":g(()=>[m(s(qe),null,{checked:g(()=>[E(" Big wheels keep on turnin' ")]),unchecked:g(()=>[E(" Carry me home to see my kin ")]),_:1})]),default:g(()=>[R("div",null,[m(s(ve),{ref:"candidatesChart",options:s(r),data:s(st)(s(a)),style:{height:"70vh",width:"100%"}},null,8,["options","data"])])]),_:1}))}}),wt=X(gt,[["__scopeId","data-v-4511f593"]]);var x=(t=>(t.GENERAL="General",t.PNP="Province",t.CEC="Inland",t.FSW="Oversea",t.STEM="STEM",t.HEALTH="Health",t.FRENCH="French",t.TRADE="Trade",t.TRANSPORT="Transport",t.AGRICULTURE="Agriculture",t.UNKNOWN="Unknown",t))(x||{});function q(t){return t=="General"?"#ECF0F1":t=="Province"?"#9B59B6":t=="Inland"?"#E74C3C":t=="Oversea"?"#C0392B":t=="STEM"?"#3498DB":t=="Health"?"#16A085":t=="French"?"#D35400":t=="Trade"?"#7F8C8D":t=="Transport"?"#F39C12":t=="Agriculture"?"#2ECC71":"#000000"}let le={2015:{min:68e3,max:74e3},2016:{min:54e3,max:59e3},2017:{min:69600,max:77300},2018:{min:72700,max:78200},2019:{min:76e3,max:86e3},2020:{min:88500,max:1e5},2021:{min:81e3,max:110250},2022:{min:52e3,max:64e3},2023:{min:67750,max:88e3},2024:{min:9e4,max:116e3},2025:{min:96500,max:124e3},2026:{min:96500,max:124e3}};async function ht(){const e=await fetch("https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}async function Oe(){const t=await ht();return console.log(t),t.rounds.map(function(e){return{id:parseInt(e.drawNumber.replace(/,/g,"")),crs:parseInt(e.drawCRS.replace(/,/g,"")),size:parseInt(e.drawSize.replace(/,/g,"")),name:yt(e.drawName),date:new Date(Date.parse(e.drawDateFull)),pool:xt([e.dd1,e.dd2,e.dd4,e.dd5,e.dd6,e.dd7,e.dd8,e.dd10,e.dd11,e.dd12,e.dd13,e.dd14,e.dd15,e.dd16,e.dd17])}})}function yt(t){return t=="No Program Specified"||t=="General"?x.GENERAL:t=="Provincial Nominee Program"?x.PNP:t=="Canadian Experience Class"?x.CEC:t=="Federal Skilled Worker"?x.FSW:t=="Federal Skilled Trades"?x.TRADE:t=="STEM occupations (2023-1)"?x.STEM:t=="Healthcare occupations (2023-1)"?x.HEALTH:t=="French language proficiency (2023-1)"||t=="French language proficiency (2024-1)"?x.FRENCH:t=="Trade occupations (2023-1)"?x.TRADE:t=="Transport occupations (2023-1)"?x.TRANSPORT:t=="Agriculture and agri-food occupations (2023-1)"?x.AGRICULTURE:x.UNKNOWN}function xt(t){const e=[0,301,351,401,411,421,431,441,451,461,471,481,491,501,601],n=[300,350,400,410,420,430,440,450,460,470,480,490,500,600,1200],a=t.map(r=>parseInt(r.replace(/,/g,"")));return a.reduce((r,i)=>r+i,0)==0?[]:a.map(function(r,i){return{min:e[i],max:n[i],count:r}})}const Ct=252,vt=J({__name:"Categories",async setup(t){let e,n;fe.register(me,pe,be,Ve,ge,re,we,he);const a=[x.STEM,x.HEALTH,x.FRENCH,x.AGRICULTURE,x.TRADE,x.TRANSPORT],r=([e,n]=D(()=>Oe()),e=await e,n(),e).filter(u=>u.id>=Ct);function i(){const u=a.concat([x.GENERAL]),f=a.map(c=>r.filter(o=>o.name==c).map(o=>o.size).reduce((o,b)=>o+b,0)),p=r.filter(c=>!a.includes(c.name)).map(c=>c.size).reduce((c,o)=>c+o,0),C=[{data:f.concat([p]),backgroundColor:u.map(c=>q(c)),borderColor:u.map(c=>q(c))}];return{data:{labels:u,datasets:C},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"},tooltip:{callbacks:{label:function(c){const o=c.dataset.data.reduce((T,v)=>T+v,0);return(c.raw/o*100).toFixed(2)+"%"}}}}}}}function _(){const u=a.concat([x.GENERAL]),f=a.map(c=>r.filter(o=>o.name==c).length),p=r.filter(c=>!a.includes(c.name)).length,C=[{data:f.concat([p]),backgroundColor:u.map(c=>q(c)),borderColor:u.map(c=>q(c))}];return{data:{labels:u,datasets:C},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"}}}}}function y(u,f){return u.filter(p=>p.name==f).sort((p,C)=>C.date.getTime()-p.date.getTime())[0]}function w(){const u=a.concat([x.GENERAL]);function f(o){const b=o.size,T=o.pool.filter(A=>A.min>o.crs).reduce((A,Ie)=>A+Ie.count,0),v=o.pool.filter(A=>A.min<=o.crs&&o.crs<=A.max)[0],S=(v.max-o.crs)/(v.max-v.min)*v.count;return b/(S+T)}const p=a.map(o=>y(r,o)).map(o=>f(o)),C=1-p.reduce((o,b)=>o+b,0),c=[{data:p.concat([C]),backgroundColor:u.map(o=>q(o)),borderColor:u.map(o=>q(o))}];return{data:{labels:u,datasets:c},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"},tooltip:{callbacks:{label:function(o){return(o.raw*100).toFixed(2)+"%"}}}}}}}function H(){const u=a.map(f=>y(r,f)).map(function(f){return{category:f.name,date:f.date.toISOString().substring(0,10)}});return{columns:[{title:"Category",key:"category"},{title:"Date",key:"date",defaultSortOrder:"ascend",sorter:"default"}],data:u}}let j=i(),N=_(),U=w(),$=H(),P=visualViewport.height;return(u,f)=>(F(),O(s(Ze),{"x-gap":12,"y-gap":8,cols:2},{default:g(()=>[m(s(oe),null,{default:g(()=>[m(s(M),{title:"Invitation Size By Categories"},{default:g(()=>[m(s(ye),{ref:"invitationSizeChart",options:s(j).options,data:s(j).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),m(s(oe),null,{default:g(()=>[m(s(M),{title:"Invitation Count By Categories"},{default:g(()=>[m(s(ye),{ref:"invitationCountChart",options:s(N).options,data:s(N).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),m(s(oe),null,{default:g(()=>[m(s(M),{title:"Estimated Candidates By Categories"},{default:g(()=>[m(s(ye),{id:"candidateSizeChart",options:s(U).options,data:s(U).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),m(s(oe),null,{default:g(()=>[m(s(M),{title:"Most Recent Draw By Categories"},{default:g(()=>[m(s(Ye),{ref:"invitationRecencyTable",columns:s($).columns,data:s($).data,bordered:!1,"max-height":s(P)*.25,style:{height:"30vh",width:"100%"}},null,8,["columns","data","max-height"])]),_:1})]),_:1})]),_:1}))}}),Rt=X(vt,[["__scopeId","data-v-dc90fd95"]]),Tt=J({__name:"Plan",async setup(t){let e,n;fe.register(me,pe,be,ze,Te,Se,ge,re,we,he,_e,Re);const a=([e,n]=D(()=>Oe()),e=await e,n(),e).filter(u=>u.name!=x.PNP),r=Math.min(...a.map(u=>u.date.getFullYear())),i=Math.max(...a.map(u=>u.date.getFullYear()))+3;function _(){let u=new Date(r,0).getTime(),f=new Date(i,0).getTime(),p=f-u;return{min:u-p*.02,max:f+p*.02}}const y=_(),w=function(u,f,p){let C=this.getLabelForValue(u);return" ".repeat(8-C.length)+C};function H(){let u=[];for(let p=r;p<i;p++){let C=new Date(p,6).getTime(),c=le[p].min,o=le[p].max;var f=null;Date.now()>=new Date(p,0).getTime()&&(f=a.filter(b=>b.date.getFullYear()==p).reduce((b,T)=>b+T.size,0)),u.push({label:C,planMin:c,planMax:o,actual:f})}return u}function j(){let u=[];for(let p=r;p<i;p++){let C=le[p].min,c=le[p].max;for(let o=0;o<12;o++){let b=new Date(p,o,15).getTime(),T=C/(12-o),v=c/(12-o);var f=null;Date.now()>=new Date(p,o).getTime()?(f=a.filter(S=>S.date.getFullYear()==p&&S.date.getMonth()==o).reduce((S,A)=>S+A.size,0),c-=f,C-=f):(c-=v,C-=T),c=Math.max(0,c),C=Math.max(0,C),u.push({label:b,planMin:T,planMax:v,actual:f})}}return u}function N(u){const f=u?j():H(),p=f.map(v=>v.label),C={label:"Low Range",data:f.map(v=>v.planMin),cubicInterpolationMode:"monotone",backgroundColor:"#F4D03F",borderColor:"#F4D03F",borderDash:[5,5]},c={label:"Low Range",data:f.map(v=>v.planMax),cubicInterpolationMode:"monotone",backgroundColor:"#F4D03F",borderColor:"#F4D03F",borderDash:[5,5]},o={label:"Invitation",data:f.map(v=>v.actual),cubicInterpolationMode:"monotone",backgroundColor:"#58D68D ",borderColor:"#58D68D "},b=[C,c,o];console.log(f);const T=v=>{let S=v.chart,A={min:S.scales.x.min,max:S.scales.x.max};(A.max-A.min)/1e3/3600/24>2500?S.data=N(!1).data:S.data=N(!0).data,S.update("none")};return{data:{labels:p,datasets:b},options:{responsive:!1,maintainAspectRatio:!1,scales:{x:{type:"time",min:y.min,max:y.max},y:{type:"linear",grid:{display:!1},ticks:{callback:w}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"x",onZoom:T},limits:{x:{min:y.min,max:y.max}},pan:{enabled:!0,mode:"x"}}}}}}let U=N(!1),$=Z(),P=null;return(u,f)=>(F(),O(s(M),{title:"IRCC Departmental Plan"},{default:g(()=>[m(s(ve),{ref_key:"planChart",ref:$,onMouseover:f[0]||(f[0]=p=>Y(P)?P.value=s($):P=s($)),onMouseleave:f[1]||(f[1]=p=>Y(P)?P.value=null:P=null),options:s(U).options,data:s(U).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1}))}}),St=X(Tt,[["__scopeId","data-v-0bb7368e"]]),kt={};function It(t,e){return F(),Ce("p",null,"SHA: 37c03206b8dacddd84e9814b50f639a6c44b7159")}const Et=X(kt,[["render",It]]),z=t=>(je("data-v-2ef8aeac"),t=t(),Ue(),t),Mt=z(()=>R("h3",null,"Invitation CRS Score",-1)),Ft=z(()=>R("ul",null,[R("li",null," Canada Experience Class (CEC) are renamed as Inland since most of CECs are inland applicants. "),R("li",null," Federal Skill Worker (FSW) are renamed as Oversee since most of FSWs are oversea applicants. "),R("li",null," Federal Skill Trade (FST) and Trade 2023-1 are merged as same category due to their similarity in items of NOC requirement. "),R("li",null," General and No Program Specified are merged because they are the same. "),R("li",null," French 2023-1 and French 2024-1 are merged because they are the same. ")],-1)),At=z(()=>R("h3",null,"Invitation Size",-1)),Pt=z(()=>R("h3",null,"Candidates in the Pool",-1)),Dt=z(()=>R("h3",null,"Invitation Size By Categories",-1)),zt=z(()=>R("h3",null,"Invitation Count By Categories",-1)),Nt=z(()=>R("h3",null,"Estimated Candidates By Categories",-1)),Ot=z(()=>R("h3",null,"Most Recent Draw By Categories",-1)),Lt=z(()=>R("h3",null,"IRCC Departmental Plan",-1)),$t=z(()=>R("br",null,null,-1)),Bt=J({__name:"Methodology",setup(t){const e=Z("$$\\frac{\\text{draw size}}{\\text{pool size with CRS} \\geq \\text{draw CRS}}$$"),n=Z("$$\\frac{\\text{yearly planned size} - \\text{already invited size}}{\\text{number of remaining months}}$$");return(a,r)=>{const i=Be("vue-mathjax");return F(),Ce(De,null,[m(s(M),{title:"Introduction"},{default:g(()=>[E(" Since IRCC does not much information about Express Entry, lots of data in this website are estimated or derived from official source. Here are the documentation about how each estimated value are generated. If you find some better estimation method, please let me know by opening a Issue on GitHub repo. ")]),_:1}),m(s(M),{title:"Invitations Tab"},{default:g(()=>[Mt,E(" Data is from IRCC directly, with the following modification: "),Ft,At,E(" Same as Invitation CRS Score ")]),_:1}),m(s(M),{title:"Candidates Tab"},{default:g(()=>[Pt,E(" Data is from IRCC directly, with missing value being skipped. ")]),_:1}),m(s(M),{title:"Categories Tab"},{default:g(()=>[Dt,E(" Data is from IRCC directly, only count draws happens after 252nd rounds (inclusive). "),zt,E(" Same as Invitation Size By Categories. "),Nt,E(" This is computed as "),m(i,{formula:e.value},null,8,["formula"]),E(" TODO: This is far from accurate because it does not account for recovery of a particular occupation overtime. "),Ot,E(" Data is from IRCC directly. ")]),_:1}),m(s(M),{title:"IRCC Plan Tab"},{default:g(()=>[Lt,E(" For per year data, the data is from IRCC yearly departmental plan directly. "),$t,E(" For per month data, it is computed as "),m(i,{formula:n.value},null,8,["formula"])]),_:1})],64)}}}),jt=X(Bt,[["__scopeId","data-v-2ef8aeac"]]),Ut=J({__name:"App",setup(t){return(e,n)=>(F(),O(s(Xe),{theme:s(Je)},{default:g(()=>[m(s(Ke),{type:"line",animated:""},{default:g(()=>[m(s(ee),{name:"invitations",tab:"Invitations"},{default:g(()=>[(F(),O(Q,null,{default:g(()=>[m(bt)]),_:1}))]),_:1}),m(s(ee),{name:"candidates",tab:"Candidates"},{default:g(()=>[(F(),O(Q,null,{default:g(()=>[m(wt)]),_:1}))]),_:1}),m(s(ee),{name:"categories",tab:"Categories"},{default:g(()=>[(F(),O(Q,null,{default:g(()=>[m(Rt)]),_:1}))]),_:1}),m(s(ee),{name:"plan",tab:"IRCC Plan"},{default:g(()=>[(F(),O(Q,null,{default:g(()=>[m(St)]),_:1}))]),_:1}),m(s(ee),{name:"methodology",tab:"Methodology"},{default:g(()=>[(F(),O(Q,null,{default:g(()=>[m(jt)]),_:1}))]),_:1})]),_:1}),m(Et)]),_:1},8,["theme"]))}});Ge(Ut).use(Qe).mount("#app");
