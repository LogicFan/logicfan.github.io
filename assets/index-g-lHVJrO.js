var Be=Object.defineProperty;var je=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var H=(t,e,n)=>(je(t,typeof e!="symbol"?e+"":e,n),n);import{d as J,bx as N,r as q,aO as M,a1 as re,a9 as f,by as h,a2 as I,bg as i,az as V,F as ze,$ as j,c as A,aX as Ue,aR as Ge,aP as He,M as Q,_ as We}from"./@vue-C6c05riL.js";import{L as fe,B as Ve,D as ve}from"./vue-chartjs-NfUR0-Eb.js";import{p as Se}from"./chartjs-plugin-zoom-DGFF8bbX.js";import{b as oe,C as pe,p as be,d as ge,f as we,h as Ne,i as ke,P as Ie,j as he,k as xe,T as ye,l as qe,A as Ye}from"./chart.js-CS2BZAAA.js";import"./chartjs-adapter-date-fns-B1M5gydP.js";import{N as F,a as Ze,b as ie,c as Ke,d as Je,e as ee,f as Xe,g as Qe,h as et}from"./naive-ui-DFOT7nzu.js";import{V as tt}from"./vue-mathjax-next-CPDiIMce.js";import"./hammerjs-BKGieZPK.js";import"./@babel-DuvU54pN.js";import"./@kurkle-BZxJdD1U.js";import"./date-fns-99pyhWYT.js";import"./seemly-BFh2AANw.js";import"./vooks-UHRToW5y.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-nRLt9CzG.js";import"./@emotion-WldOFDRm.js";import"./@css-render-5itupMdg.js";import"./css-render-Ct37b3-v.js";import"./vueuc-CQX-IOll.js";import"./vdirs-DL8EOfHr.js";import"./@juggle-C8OzoCMD.js";import"./treemate-HRdUPn5m.js";import"./vue-CMUvV8mj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ae=(t,e)=>Math.pow(Math.max(0,t),e)-Math.pow(Math.max(0,-t),e),Fe=(t,e)=>{let n=e.max-e.min;return(t-e.min)/n*2-1},Pe=(t,e)=>{let n=e.max-e.min;return(t+1)*n*.5+e.min};class me extends oe{constructor(n){super(n);H(this,"start");H(this,"end");H(this,"_startValue");H(this,"_endValue");H(this,"_valueRange");this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}fTransform(n){let a={min:this.min,max:this.max},r=Fe(n,a),o=Ae(r,this.options.level),_=Pe(o,a);return Math.round(_)}rTransform(n){let a={min:this.min,max:this.max},r=Fe(n,a),o=Ae(r,1/this.options.level),_=Pe(o,a);return Math.round(_)}buildTicks(){return super.buildTicks().map(a=>Object.assign({},a,{value:this.fTransform(a.value)}))}getPixelForValue(n,a){return super.getPixelForValue(this.rTransform(n),a)}getValueForPixel(n){return super.getValueForPixel(this.fTransform(n))}}H(me,"id","focus"),H(me,"defaults",{level:1});let w;const U=new Array(128).fill(void 0);U.push(void 0,null,!0,!1);let ae=U.length;function d(t){ae===U.length&&U.push(U.length+1);const e=ae;return ae=U[e],U[e]=t,e}function s(t){return U[t]}function nt(t){t<132||(U[t]=ae,ae=t)}function S(t){const e=s(t);return nt(t),e}const Oe=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Oe.decode();let te=null;function ue(){return(te===null||te.byteLength===0)&&(te=new Uint8Array(w.memory.buffer)),te}function W(t,e){return t=t>>>0,Oe.decode(ue().subarray(t,t+e))}let K=0;const de=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},at=typeof de.encodeInto=="function"?function(t,e){return de.encodeInto(t,e)}:function(t,e){const n=de.encode(t);return e.set(n),{read:t.length,written:n.length}};function _e(t,e,n){if(n===void 0){const x=de.encode(t),C=e(x.length,1)>>>0;return ue().subarray(C,C+x.length).set(x),K=x.length,C}let a=t.length,r=e(a,1)>>>0;const o=ue();let _=0;for(;_<a;_++){const x=t.charCodeAt(_);if(x>127)break;o[r+_]=x}if(_!==a){_!==0&&(t=t.slice(_)),r=n(r,a,a=_+t.length*3,1)>>>0;const x=ue().subarray(r+_,r+a),C=at(t,x);_+=C.written,r=n(r,a,_,1)>>>0}return K=_,r}function rt(t){return t==null}let ne=null;function Y(){return(ne===null||ne.byteLength===0)&&(ne=new Int32Array(w.memory.buffer)),ne}function Te(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const r=t.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=t.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(t)){const r=t.length;let o="[";r>0&&(o+=Te(t[0]));for(let _=1;_<r;_++)o+=", "+Te(t[_]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let a;if(n.length>1)a=n[1];else return toString.call(t);if(a=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:a}const De=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{w.__wbindgen_export_2.get(t.dtor)(t.a,t.b)});function ot(t,e,n,a){const r={a:t,b:e,cnt:1,dtor:n},o=(..._)=>{r.cnt++;const x=r.a;r.a=0;try{return a(x,r.b,..._)}finally{--r.cnt===0?(w.__wbindgen_export_2.get(r.dtor)(x,r.b),De.unregister(r)):r.a=x}};return o.original=r,De.register(o,r,r),o}function it(t,e,n){w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1fc7d0969a12ef6f(t,e,d(n))}function st(t){const e=w.wasm_invite_score_data(t);return S(e)}function Re(t,e){const n=_e(e,w.__wbindgen_malloc,w.__wbindgen_realloc),a=K,r=w.wasm_invite_size_data(t,n,a);return S(r)}function se(t){const e=w.wasm_invite_x_min(t);return S(e)}function le(t){const e=w.wasm_invite_x_max(t);return S(e)}function lt(){const t=w.wasm_pool_n();return S(t)}function ct(t){const e=w.wasm_pool_count_data(t);return S(e)}function ut(t){const e=w.wasm_pool_count_y_max(t);return S(e)}function dt(t){const e=w.wasm_pool_count_x_min(t);return S(e)}function _t(t){const e=w.wasm_pool_count_x_max(t);return S(e)}function ft(t,e){const n=w.wasm_pool_rate_data(t,e);return S(n)}function mt(t){const e=w.wasm_pool_rate_x_min(t);return S(e)}function pt(t){const e=w.wasm_pool_rate_x_max(t);return S(e)}function Le(){const t=w.wasm_invite_data();return S(t)}function bt(){const t=w.wasm_pool_data();return S(t)}function E(t,e){try{return t.apply(this,e)}catch(n){w.__wbindgen_exn_store(d(n))}}function gt(t,e,n,a){w.wasm_bindgen__convert__closures__invoke2_mut__h92b3b5d7258d78e6(t,e,d(n),d(a))}async function wt(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function ht(){const t={};return t.wbg={},t.wbg.__wbindgen_number_new=function(e){return d(e)},t.wbg.__wbindgen_object_drop_ref=function(e){S(e)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=s(e);return d(n)},t.wbg.__wbindgen_string_new=function(e,n){const a=W(e,n);return d(a)},t.wbg.__wbg_fetch_27eb4c0a08a9ca04=function(e){const n=fetch(s(e));return d(n)},t.wbg.__wbindgen_cb_drop=function(e){const n=S(e).original;return n.cnt--==1?(n.a=0,!0):!1},t.wbg.__wbg_queueMicrotask_f61ee94ee663068b=function(e){queueMicrotask(s(e))},t.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=function(e){const n=s(e).queueMicrotask;return d(n)},t.wbg.__wbindgen_is_function=function(e){return typeof s(e)=="function"},t.wbg.__wbg_fetch_10edd7d7da150227=function(e,n){const a=s(e).fetch(s(n));return d(a)},t.wbg.__wbg_signal_8fbb4942ce477464=function(e){const n=s(e).signal;return d(n)},t.wbg.__wbg_new_92cc7d259297256c=function(){return E(function(){const e=new AbortController;return d(e)},arguments)},t.wbg.__wbg_abort_510372063dd66b29=function(e){s(e).abort()},t.wbg.__wbg_newwithstrandinit_11fbc38beb4c26b0=function(){return E(function(e,n,a){const r=new Request(W(e,n),s(a));return d(r)},arguments)},t.wbg.__wbindgen_string_get=function(e,n){const a=s(n),r=typeof a=="string"?a:void 0;var o=rt(r)?0:_e(r,w.__wbindgen_malloc,w.__wbindgen_realloc),_=K;Y()[e/4+1]=_,Y()[e/4+0]=o},t.wbg.__wbg_new_4db22fd5d40c5665=function(){return E(function(){const e=new Headers;return d(e)},arguments)},t.wbg.__wbg_append_b2e8ed692fc5eb6e=function(){return E(function(e,n,a,r,o){s(e).append(W(n,a),W(r,o))},arguments)},t.wbg.__wbg_instanceof_Response_b5451a06784a2404=function(e){let n;try{n=s(e)instanceof Response}catch{n=!1}return n},t.wbg.__wbg_url_e319aee56d26ddf1=function(e,n){const a=s(n).url,r=_e(a,w.__wbindgen_malloc,w.__wbindgen_realloc),o=K;Y()[e/4+1]=o,Y()[e/4+0]=r},t.wbg.__wbg_status_bea567d1049f0b6a=function(e){return s(e).status},t.wbg.__wbg_headers_96d9457941f08a33=function(e){const n=s(e).headers;return d(n)},t.wbg.__wbg_arrayBuffer_eb2005809be09726=function(){return E(function(e){const n=s(e).arrayBuffer();return d(n)},arguments)},t.wbg.__wbindgen_is_object=function(e){const n=s(e);return typeof n=="object"&&n!==null},t.wbg.__wbindgen_error_new=function(e,n){const a=new Error(W(e,n));return d(a)},t.wbg.__wbindgen_bigint_from_u64=function(e){const n=BigInt.asUintN(64,e);return d(n)},t.wbg.__wbg_set_f975102236d3c502=function(e,n,a){s(e)[S(n)]=S(a)},t.wbg.__wbg_new_75208e29bddfd88c=function(){const e=new Array;return d(e)},t.wbg.__wbg_newnoargs_cfecb3965268594c=function(e,n){const a=new Function(W(e,n));return d(a)},t.wbg.__wbg_next_586204376d2ed373=function(e){const n=s(e).next;return d(n)},t.wbg.__wbg_next_b2d3366343a208b3=function(){return E(function(e){const n=s(e).next();return d(n)},arguments)},t.wbg.__wbg_done_90b14d6f6eacc42f=function(e){return s(e).done},t.wbg.__wbg_value_3158be908c80a75e=function(e){const n=s(e).value;return d(n)},t.wbg.__wbg_iterator_40027cdd598da26b=function(){return d(Symbol.iterator)},t.wbg.__wbg_get_3fddfed2c83f434c=function(){return E(function(e,n){const a=Reflect.get(s(e),s(n));return d(a)},arguments)},t.wbg.__wbg_call_3f093dd26d5569f8=function(){return E(function(e,n){const a=s(e).call(s(n));return d(a)},arguments)},t.wbg.__wbg_new_632630b5cec17f21=function(){const e=new Object;return d(e)},t.wbg.__wbg_self_05040bd9523805b9=function(){return E(function(){const e=self.self;return d(e)},arguments)},t.wbg.__wbg_window_adc720039f2cb14f=function(){return E(function(){const e=window.window;return d(e)},arguments)},t.wbg.__wbg_globalThis_622105db80c1457d=function(){return E(function(){const e=globalThis.globalThis;return d(e)},arguments)},t.wbg.__wbg_global_f56b013ed9bcf359=function(){return E(function(){const e=global.global;return d(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return s(e)===void 0},t.wbg.__wbg_set_79c308ecd9a1d091=function(e,n,a){s(e)[n>>>0]=S(a)},t.wbg.__wbg_call_67f2111acd2dfdb6=function(){return E(function(e,n,a){const r=s(e).call(s(n),s(a));return d(r)},arguments)},t.wbg.__wbg_new_70828a4353259d4b=function(e,n){try{var a={a:e,b:n},r=(_,x)=>{const C=a.a;a.a=0;try{return gt(C,a.b,_,x)}finally{a.a=C}};const o=new Promise(r);return d(o)}finally{a.a=a.b=0}},t.wbg.__wbg_resolve_5da6faf2c96fd1d5=function(e){const n=Promise.resolve(s(e));return d(n)},t.wbg.__wbg_then_f9e58f5a50f43eae=function(e,n){const a=s(e).then(s(n));return d(a)},t.wbg.__wbg_then_20a5920e447d1cb1=function(e,n,a){const r=s(e).then(s(n),s(a));return d(r)},t.wbg.__wbg_buffer_b914fb8b50ebbc3e=function(e){const n=s(e).buffer;return d(n)},t.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=function(e,n,a){const r=new Uint8Array(s(e),n>>>0,a>>>0);return d(r)},t.wbg.__wbg_new_b1f2d6842d615181=function(e){const n=new Uint8Array(s(e));return d(n)},t.wbg.__wbg_set_7d988c98e6ced92d=function(e,n,a){s(e).set(s(n),a>>>0)},t.wbg.__wbg_length_21c4b0ae73cba59d=function(e){return s(e).length},t.wbg.__wbg_stringify_865daa6fb8c83d5a=function(){return E(function(e){const n=JSON.stringify(s(e));return d(n)},arguments)},t.wbg.__wbg_has_ad45eb020184f624=function(){return E(function(e,n){return Reflect.has(s(e),s(n))},arguments)},t.wbg.__wbg_set_961700853a212a39=function(){return E(function(e,n,a){return Reflect.set(s(e),s(n),s(a))},arguments)},t.wbg.__wbindgen_debug_string=function(e,n){const a=Te(s(n)),r=_e(a,w.__wbindgen_malloc,w.__wbindgen_realloc),o=K;Y()[e/4+1]=o,Y()[e/4+0]=r},t.wbg.__wbindgen_throw=function(e,n){throw new Error(W(e,n))},t.wbg.__wbindgen_memory=function(){const e=w.memory;return d(e)},t.wbg.__wbindgen_closure_wrapper452=function(e,n,a){const r=ot(e,n,88,it);return d(r)},t}function xt(t,e){return w=t.exports,Ee.__wbindgen_wasm_module=e,ne=null,te=null,w}async function Ee(t){if(w!==void 0)return w;typeof t>"u"&&(t=new URL("/assets/analyzer_bg-Iz-BGexq.wasm",import.meta.url));const e=ht();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:a}=await wt(await t,e);return xt(n,a)}const yt=J({__name:"Invitations",async setup(t){let e,n;pe.register(be,ge,we,Ne,ke,Ie,he,oe,xe,ye,me,Se),[e,n]=N(()=>Ee()),await e,n();let a=q(),r=q(),o=q();const _=function(){return o.value.chart},x=function(){return o.value==a.value?r.value.chart:o.value==r.value?a.value.chart:null};let C=([e,n]=N(()=>Le()),e=await e,n(),e),O=st(C),L=Re(C,"m"),D=Re(C,"w"),$=Re(C,"d");const z=function(g,m,y){let G=this.getLabelForValue(g);return" ".repeat(8-G.length)+G},v=g=>{let m=g.chart;if(_()==m){let y=x();y.scales.x.options.min=m.scales.x.options.min,y.scales.x.options.max=m.scales.x.options.max,y.update("none")}},l=g=>{let m=g.chart;if(_()==m){let Ce=x();Ce.scales.x.options.min=m.scales.x.options.min,Ce.scales.x.options.max=m.scales.x.options.max,Ce.update("none")}let y=r.value.chart,G={min:y.scales.x.min,max:y.scales.x.max},Me=(G.max-G.min)/1e3/3600/24;Me>2500?(y.data=L,y.options.plugins.tooltip.callbacks.title=p):Me>583?(y.data=D,y.options.plugins.tooltip.callbacks.title=u):(y.data=$,y.options.plugins.tooltip.callbacks.title=k),y.update("none")};let c={zoom:{wheel:{enabled:!0},mode:"x",onZoom:l},limits:{x:{min:se(C),max:le(C)}},pan:{enabled:!0,mode:"x",onPan:v}};const b=function(g){return g.map(m=>O.tooltip.title[m.dataIndex])};let T={maintainAspectRatio:!1,scales:{x:{type:"time",min:se(C),max:le(C)},y:{type:"focus",level:1.5,min:0,max:1e3,grid:{display:!1},ticks:{callback:z}}},plugins:{zoom:c,tooltip:{callbacks:{title:b}}}};const p=function(g){return g.map(m=>L.tooltip.title[m.dataIndex])},u=function(g){return g.map(m=>D.tooltip.title[m.dataIndex])},k=function(g){return g.map(m=>$.tooltip.title[m.dataIndex])};let P={maintainAspectRatio:!1,scales:{x:{type:"time",min:([e,n]=N(()=>se(C)),e=await e,n(),e),max:([e,n]=N(()=>le(C)),e=await e,n(),e)},y:{type:"logarithmic",min:0,grid:{display:!1},ticks:{callback:z}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"x",onZoom:l},limits:{x:{min:([e,n]=N(()=>se(C)),e=await e,n(),e),max:([e,n]=N(()=>le(C)),e=await e,n(),e)}},pan:{enabled:!0,mode:"x",onPan:v}},tooltip:{callbacks:{title:p}}}};return(g,m)=>(M(),re(ze,null,[f(i(F),{title:"Invitation CRS Score"},{default:h(()=>[I("div",null,[f(i(fe),{ref_key:"scoreChartRef",ref:a,onMouseover:m[0]||(m[0]=y=>V(o)?o.value=i(a):o=i(a)),onMouseleave:m[1]||(m[1]=y=>V(o)?o.value=null:o=null),options:i(T),data:i(O),style:{height:"30vh",width:"100%"}},null,8,["options","data"])])]),_:1}),f(i(F),{title:"Invitation Size"},{default:h(()=>[I("div",null,[f(i(Ve),{ref_key:"sizeChartRef",ref:r,onMouseover:m[2]||(m[2]=y=>V(o)?o.value=i(r):o=i(r)),onMouseleave:m[3]||(m[3]=y=>V(o)?o.value=null:o=null),options:i(P),data:i(L),style:{height:"30vh",width:"100%"}},null,8,["options","data"])])]),_:1})],64))}}),X=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},Ct=X(yt,[["__scopeId","data-v-d4670594"]]),vt={key:0},Rt={key:1},Tt=J({__name:"Candidates",async setup(t){let e,n;pe.register(be,ge,we,ke,Ie,he,oe,xe,ye,Se,qe),[e,n]=N(()=>Ee()),await e,n();const a=function({focused:v,checked:l}){const c={};return l?(c.background="#e67e22",v&&(c.boxShadow="0 0 0 2px #e67e2240")):(c.background="#3498db",v&&(c.boxShadow="0 0 0 2px #3498db40")),c};let r=q(!1),o=([e,n]=N(()=>bt()),e=await e,n(),e),_=([e,n]=N(()=>Le()),e=await e,n(),e),x=lt(),C=ct(o),O=ft(o,_),L={maintainAspectRatio:!1,scales:{x:{type:"time"},y:{min:0,reverse:!0}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"xy"},limits:{y:{min:0,max:ut(o)},x:{min:dt(o),max:_t(o)}},pan:{enabled:!0,mode:"xy"}},tooltip:{enabled:!1}}};const D=function(v){return v.map(l=>"Predicted Increase Rate")},$=function(v){return console.log(v),console.log(O.tooltip.label[v.datasetIndex-x]),O.tooltip.label[v.datasetIndex-x]};let z={maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"xy",intersect:!1},scales:{x:{type:"time"},y:{reverse:!0}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"x"},limits:{x:{min:mt(o),max:pt(o)}},pan:{enabled:!0,mode:"x"}},tooltip:{filter:function(v){return v.datasetIndex>=x},callbacks:{title:D,label:$}},legend:{labels:{filter:function(v){return v.text!="none"}}}}};return(v,l)=>(M(),j(i(F),{title:"Candidates in the Pool"},{"header-extra":h(()=>[f(i(Ze),{round:!1,"rail-style":a,value:i(r),"onUpdate:value":l[0]||(l[0]=c=>V(r)?r.value=c:r=c)},{checked:h(()=>[A(" Increase Rate ")]),unchecked:h(()=>[A(" Total Count ")]),_:1},8,["value"])]),default:h(()=>[i(r)?(M(),re("div",vt,[f(i(fe),{ref:"rateChartRef",options:i(z),data:i(O),style:{height:"70vh",width:"100%"}},null,8,["options","data"])])):(M(),re("div",Rt,[f(i(fe),{ref:"countChartRef",options:i(L),data:i(C),style:{height:"70vh",width:"100%"}},null,8,["options","data"])]))]),_:1}))}}),St=X(Tt,[["__scopeId","data-v-9451d91d"]]);var R=(t=>(t.GENERAL="General",t.PNP="Province",t.CEC="Inland",t.FSW="Oversea",t.STEM="STEM",t.HEALTH="Health",t.FRENCH="French",t.TRADE="Trade",t.TRANSPORT="Transport",t.AGRICULTURE="Agriculture",t.UNKNOWN="Unknown",t))(R||{});function Z(t){return t=="General"?"#ECF0F1":t=="Province"?"#9B59B6":t=="Inland"?"#E74C3C":t=="Oversea"?"#C0392B":t=="STEM"?"#3498DB":t=="Health"?"#16A085":t=="French"?"#D35400":t=="Trade"?"#7F8C8D":t=="Transport"?"#F39C12":t=="Agriculture"?"#2ECC71":"#000000"}let ce={2015:{min:68e3,max:74e3},2016:{min:54e3,max:59e3},2017:{min:69600,max:77300},2018:{min:72700,max:78200},2019:{min:76e3,max:86e3},2020:{min:88500,max:1e5},2021:{min:81e3,max:110250},2022:{min:52e3,max:64e3},2023:{min:67750,max:88e3},2024:{min:9e4,max:116e3},2025:{min:96500,max:124e3},2026:{min:96500,max:124e3}};async function kt(){const e=await fetch("https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}async function $e(){const t=await kt();return console.log(t),t.rounds.map(function(e){return{id:parseInt(e.drawNumber.replace(/,/g,"")),crs:parseInt(e.drawCRS.replace(/,/g,"")),size:parseInt(e.drawSize.replace(/,/g,"")),name:It(e.drawName),date:new Date(Date.parse(e.drawDateFull)),pool:Et([e.dd1,e.dd2,e.dd4,e.dd5,e.dd6,e.dd7,e.dd8,e.dd10,e.dd11,e.dd12,e.dd13,e.dd14,e.dd15,e.dd16,e.dd17])}})}function It(t){return t=="No Program Specified"||t=="General"?R.GENERAL:t=="Provincial Nominee Program"?R.PNP:t=="Canadian Experience Class"?R.CEC:t=="Federal Skilled Worker"?R.FSW:t=="Federal Skilled Trades"?R.TRADE:t=="STEM occupations (2023-1)"?R.STEM:t=="Healthcare occupations (2023-1)"?R.HEALTH:t=="French language proficiency (2023-1)"||t=="French language proficiency (2024-1)"?R.FRENCH:t=="Trade occupations (2023-1)"?R.TRADE:t=="Transport occupations (2023-1)"?R.TRANSPORT:t=="Agriculture and agri-food occupations (2023-1)"?R.AGRICULTURE:R.UNKNOWN}function Et(t){const e=[0,301,351,401,411,421,431,441,451,461,471,481,491,501,601],n=[300,350,400,410,420,430,440,450,460,470,480,490,500,600,1200],a=t.map(r=>parseInt(r.replace(/,/g,"")));return a.reduce((r,o)=>r+o,0)==0?[]:a.map(function(r,o){return{min:e[o],max:n[o],count:r}})}const Mt=252,At=J({__name:"Categories",async setup(t){let e,n;pe.register(be,ge,we,Ye,he,oe,xe,ye);const a=[R.STEM,R.HEALTH,R.FRENCH,R.AGRICULTURE,R.TRADE,R.TRANSPORT],r=([e,n]=N(()=>$e()),e=await e,n(),e).filter(l=>l.id>=Mt);function o(){const l=a.concat([R.GENERAL]),c=a.map(p=>r.filter(u=>u.name==p).map(u=>u.size).reduce((u,k)=>u+k,0)),b=r.filter(p=>!a.includes(p.name)).map(p=>p.size).reduce((p,u)=>p+u,0),T=[{data:c.concat([b]),backgroundColor:l.map(p=>Z(p)),borderColor:l.map(p=>Z(p))}];return{data:{labels:l,datasets:T},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"},tooltip:{callbacks:{label:function(p){const u=p.dataset.data.reduce((P,g)=>P+g,0);return(p.raw/u*100).toFixed(2)+"%"}}}}}}}function _(){const l=a.concat([R.GENERAL]),c=a.map(p=>r.filter(u=>u.name==p).length),b=r.filter(p=>!a.includes(p.name)).length,T=[{data:c.concat([b]),backgroundColor:l.map(p=>Z(p)),borderColor:l.map(p=>Z(p))}];return{data:{labels:l,datasets:T},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"}}}}}function x(l,c){return l.filter(b=>b.name==c).sort((b,T)=>T.date.getTime()-b.date.getTime())[0]}function C(){const l=a.concat([R.GENERAL]);function c(u){const k=u.size,P=u.pool.filter(y=>y.min>u.crs).reduce((y,G)=>y+G.count,0),g=u.pool.filter(y=>y.min<=u.crs&&u.crs<=y.max)[0],m=(g.max-u.crs)/(g.max-g.min)*g.count;return k/(m+P)}const b=a.map(u=>x(r,u)).map(u=>c(u)),T=1-b.reduce((u,k)=>u+k,0),p=[{data:b.concat([T]),backgroundColor:l.map(u=>Z(u)),borderColor:l.map(u=>Z(u))}];return{data:{labels:l,datasets:p},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"right"},tooltip:{callbacks:{label:function(u){return(u.raw*100).toFixed(2)+"%"}}}}}}}function O(){const l=a.map(c=>x(r,c)).map(function(c){return{category:c.name,date:c.date.toISOString().substring(0,10)}});return{columns:[{title:"Category",key:"category"},{title:"Date",key:"date",defaultSortOrder:"ascend",sorter:"default"}],data:l}}let L=o(),D=_(),$=C(),z=O(),v=visualViewport.height;return(l,c)=>(M(),j(i(Je),{"x-gap":12,"y-gap":8,cols:2},{default:h(()=>[f(i(ie),null,{default:h(()=>[f(i(F),{title:"Invitation Size By Categories"},{default:h(()=>[f(i(ve),{ref:"invitationSizeChart",options:i(L).options,data:i(L).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),f(i(ie),null,{default:h(()=>[f(i(F),{title:"Invitation Count By Categories"},{default:h(()=>[f(i(ve),{ref:"invitationCountChart",options:i(D).options,data:i(D).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),f(i(ie),null,{default:h(()=>[f(i(F),{title:"Estimated Candidates By Categories"},{default:h(()=>[f(i(ve),{id:"candidateSizeChart",options:i($).options,data:i($).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1})]),_:1}),f(i(ie),null,{default:h(()=>[f(i(F),{title:"Most Recent Draw By Categories"},{default:h(()=>[f(i(Ke),{ref:"invitationRecencyTable",columns:i(z).columns,data:i(z).data,bordered:!1,"max-height":i(v)*.25,style:{height:"30vh",width:"100%"}},null,8,["columns","data","max-height"])]),_:1})]),_:1})]),_:1}))}}),Ft=X(At,[["__scopeId","data-v-dc90fd95"]]),Pt=J({__name:"Plan",async setup(t){let e,n;pe.register(be,ge,we,Ne,ke,Ie,he,oe,xe,ye,me,Se);const a=([e,n]=N(()=>$e()),e=await e,n(),e).filter(l=>l.name!=R.PNP),r=Math.min(...a.map(l=>l.date.getFullYear())),o=Math.max(...a.map(l=>l.date.getFullYear()))+3;function _(){let l=new Date(r,0).getTime(),c=new Date(o,0).getTime(),b=c-l;return{min:l-b*.02,max:c+b*.02}}const x=_(),C=function(l,c,b){let T=this.getLabelForValue(l);return" ".repeat(8-T.length)+T};function O(){let l=[];for(let b=r;b<o;b++){let T=new Date(b,6).getTime(),p=ce[b].min,u=ce[b].max;var c=null;Date.now()>=new Date(b,0).getTime()&&(c=a.filter(k=>k.date.getFullYear()==b).reduce((k,P)=>k+P.size,0)),l.push({label:T,planMin:p,planMax:u,actual:c})}return l}function L(){let l=[];for(let b=r;b<o;b++){let T=ce[b].min,p=ce[b].max;for(let u=0;u<12;u++){let k=new Date(b,u,15).getTime(),P=T/(12-u),g=p/(12-u);var c=null;Date.now()>=new Date(b,u).getTime()?(c=a.filter(m=>m.date.getFullYear()==b&&m.date.getMonth()==u).reduce((m,y)=>m+y.size,0),p-=c,T-=c):(p-=g,T-=P),p=Math.max(0,p),T=Math.max(0,T),l.push({label:k,planMin:P,planMax:g,actual:c})}}return l}function D(l){const c=l?L():O(),b=c.map(g=>g.label),T={label:"Low Range",data:c.map(g=>g.planMin),cubicInterpolationMode:"monotone",backgroundColor:"#F4D03F",borderColor:"#F4D03F",borderDash:[5,5]},p={label:"Low Range",data:c.map(g=>g.planMax),cubicInterpolationMode:"monotone",backgroundColor:"#F4D03F",borderColor:"#F4D03F",borderDash:[5,5]},u={label:"Invitation",data:c.map(g=>g.actual),cubicInterpolationMode:"monotone",backgroundColor:"#58D68D ",borderColor:"#58D68D "},k=[T,p,u];console.log(c);const P=g=>{let m=g.chart,y={min:m.scales.x.min,max:m.scales.x.max};(y.max-y.min)/1e3/3600/24>2500?m.data=D(!1).data:m.data=D(!0).data,m.update("none")};return{data:{labels:b,datasets:k},options:{responsive:!1,maintainAspectRatio:!1,scales:{x:{type:"time",min:x.min,max:x.max},y:{type:"linear",grid:{display:!1},ticks:{callback:C}}},plugins:{zoom:{zoom:{wheel:{enabled:!0},mode:"x",onZoom:P},limits:{x:{min:x.min,max:x.max}},pan:{enabled:!0,mode:"x"}}}}}}let $=D(!1),z=q(),v=null;return(l,c)=>(M(),j(i(F),{title:"IRCC Departmental Plan"},{default:h(()=>[f(i(fe),{ref_key:"planChart",ref:z,onMouseover:c[0]||(c[0]=b=>V(v)?v.value=i(z):v=i(z)),onMouseleave:c[1]||(c[1]=b=>V(v)?v.value=null:v=null),options:i($).options,data:i($).data,style:{height:"30vh",width:"100%"}},null,8,["options","data"])]),_:1}))}}),Dt=X(Pt,[["__scopeId","data-v-0bb7368e"]]),zt={};function Nt(t,e){return M(),re("p",null,"SHA: 8d08f1d58778e0e466641fa1b28b0f8517f2446f")}const Ot=X(zt,[["render",Nt]]),B=t=>(Ge("data-v-2ef8aeac"),t=t(),He(),t),Lt=B(()=>I("h3",null,"Invitation CRS Score",-1)),$t=B(()=>I("ul",null,[I("li",null," Canada Experience Class (CEC) are renamed as Inland since most of CECs are inland applicants. "),I("li",null," Federal Skill Worker (FSW) are renamed as Oversee since most of FSWs are oversea applicants. "),I("li",null," Federal Skill Trade (FST) and Trade 2023-1 are merged as same category due to their similarity in items of NOC requirement. "),I("li",null," General and No Program Specified are merged because they are the same. "),I("li",null," French 2023-1 and French 2024-1 are merged because they are the same. ")],-1)),Bt=B(()=>I("h3",null,"Invitation Size",-1)),jt=B(()=>I("h3",null,"Candidates in the Pool",-1)),Ut=B(()=>I("h3",null,"Invitation Size By Categories",-1)),Gt=B(()=>I("h3",null,"Invitation Count By Categories",-1)),Ht=B(()=>I("h3",null,"Estimated Candidates By Categories",-1)),Wt=B(()=>I("h3",null,"Most Recent Draw By Categories",-1)),Vt=B(()=>I("h3",null,"IRCC Departmental Plan",-1)),qt=B(()=>I("br",null,null,-1)),Yt=J({__name:"Methodology",setup(t){const e=q("$$\\frac{\\text{draw size}}{\\text{pool size with CRS} \\geq \\text{draw CRS}}$$"),n=q("$$\\frac{\\text{yearly planned size} - \\text{already invited size}}{\\text{number of remaining months}}$$");return(a,r)=>{const o=Ue("vue-mathjax");return M(),re(ze,null,[f(i(F),{title:"Introduction"},{default:h(()=>[A(" Since IRCC does not much information about Express Entry, lots of data in this website are estimated or derived from official source. Here are the documentation about how each estimated value are generated. If you find some better estimation method, please let me know by opening a Issue on GitHub repo. ")]),_:1}),f(i(F),{title:"Invitations Tab"},{default:h(()=>[Lt,A(" Data is from IRCC directly, with the following modification: "),$t,Bt,A(" Same as Invitation CRS Score ")]),_:1}),f(i(F),{title:"Candidates Tab"},{default:h(()=>[jt,A(" Data is from IRCC directly, with missing value being skipped. ")]),_:1}),f(i(F),{title:"Categories Tab"},{default:h(()=>[Ut,A(" Data is from IRCC directly, only count draws happens after 252nd rounds (inclusive). "),Gt,A(" Same as Invitation Size By Categories. "),Ht,A(" This is computed as "),f(o,{formula:e.value},null,8,["formula"]),A(" TODO: This is far from accurate because it does not account for recovery of a particular occupation overtime. "),Wt,A(" Data is from IRCC directly. ")]),_:1}),f(i(F),{title:"IRCC Plan Tab"},{default:h(()=>[Vt,A(" For per year data, the data is from IRCC yearly departmental plan directly. "),qt,A(" For per month data, it is computed as "),f(o,{formula:n.value},null,8,["formula"])]),_:1})],64)}}}),Zt=X(Yt,[["__scopeId","data-v-2ef8aeac"]]),Kt=J({__name:"App",setup(t){return(e,n)=>(M(),j(i(et),{theme:i(Qe)},{default:h(()=>[f(i(Xe),{type:"line","default-value":"invitations",animated:""},{default:h(()=>[f(i(ee),{name:"invitations",tab:"Invitations"},{default:h(()=>[(M(),j(Q,null,{default:h(()=>[f(Ct)]),_:1}))]),_:1}),f(i(ee),{name:"candidates",tab:"Candidates"},{default:h(()=>[(M(),j(Q,null,{default:h(()=>[f(St)]),_:1}))]),_:1}),f(i(ee),{name:"categories",tab:"Categories"},{default:h(()=>[(M(),j(Q,null,{default:h(()=>[f(Ft)]),_:1}))]),_:1}),f(i(ee),{name:"plan",tab:"IRCC Plan"},{default:h(()=>[(M(),j(Q,null,{default:h(()=>[f(Dt)]),_:1}))]),_:1}),f(i(ee),{name:"methodology",tab:"Methodology"},{default:h(()=>[(M(),j(Q,null,{default:h(()=>[f(Zt)]),_:1}))]),_:1})]),_:1}),f(Ot)]),_:1},8,["theme"]))}});We(Kt).use(tt).mount("#app");