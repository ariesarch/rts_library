(function($,Y){typeof exports=="object"&&typeof module<"u"?Y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],Y):($=typeof globalThis<"u"?globalThis:$||self,Y($["rts-library"]={},$.React))})(this,function($,Y){"use strict";var we={exports:{}},ee={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function sr(){if(ze)return ee;ze=1;var r=Y,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(d,b,g){var p,h={},_=null,P=null;g!==void 0&&(_=""+g),b.key!==void 0&&(_=""+b.key),b.ref!==void 0&&(P=b.ref);for(p in b)a.call(b,p)&&!s.hasOwnProperty(p)&&(h[p]=b[p]);if(d&&d.defaultProps)for(p in b=d.defaultProps,b)h[p]===void 0&&(h[p]=b[p]);return{$$typeof:t,type:d,key:_,ref:P,props:h,_owner:c.current}}return ee.Fragment=o,ee.jsx=l,ee.jsxs=l,ee}var re={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function lr(){return Me||(Me=1,process.env.NODE_ENV!=="production"&&function(){var r=Y,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),F=Symbol.iterator,C="@@iterator";function S(e){if(e===null||typeof e!="object")return null;var n=F&&e[F]||e[C];return typeof n=="function"?n:null}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(e){{for(var n=arguments.length,i=new Array(n>1?n-1:0),u=1;u<n;u++)i[u-1]=arguments[u];fe("error",e,i)}}function fe(e,n,i){{var u=j.ReactDebugCurrentFrame,y=u.getStackAddendum();y!==""&&(n+="%s",i=i.concat([y]));var w=i.map(function(v){return String(v)});w.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,w)}}var ne=!1,pe=!1,be=!1,ge=!1,me=!1,X;X=Symbol.for("react.module.reference");function ae(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===s||me||e===c||e===g||e===p||ge||e===P||ne||pe||be||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===X||e.getModuleId!==void 0))}function ie(e,n,i){var u=e.displayName;if(u)return u;var y=n.displayName||n.name||"";return y!==""?i+"("+y+")":i}function x(e){return e.displayName||"Context"}function z(e){if(e==null)return null;if(typeof e.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case o:return"Portal";case s:return"Profiler";case c:return"StrictMode";case g:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var n=e;return x(n)+".Consumer";case l:var i=e;return x(i._context)+".Provider";case b:return ie(e,e.render,"ForwardRef");case h:var u=e.displayName||null;return u!==null?u:z(e.type)||"Memo";case _:{var y=e,w=y._payload,v=y._init;try{return z(v(w))}catch{return null}}}return null}var M=Object.assign,N=0,B,se,H,D,le,G,J;function Be(){}Be.__reactDisabledLog=!0;function Jr(){{if(N===0){B=console.log,se=console.info,H=console.warn,D=console.error,le=console.group,G=console.groupCollapsed,J=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function Kr(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:B}),info:M({},e,{value:se}),warn:M({},e,{value:H}),error:M({},e,{value:D}),group:M({},e,{value:le}),groupCollapsed:M({},e,{value:G}),groupEnd:M({},e,{value:J})})}N<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var _e=j.ReactCurrentDispatcher,Ce;function ve(e,n,i){{if(Ce===void 0)try{throw Error()}catch(y){var u=y.stack.trim().match(/\n( *(at )?)/);Ce=u&&u[1]||""}return`
`+Ce+e}}var ke=!1,he;{var qr=typeof WeakMap=="function"?WeakMap:Map;he=new qr}function Je(e,n){if(!e||ke)return"";{var i=he.get(e);if(i!==void 0)return i}var u;ke=!0;var y=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var w;w=_e.current,_e.current=null,Jr();try{if(n){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(A){u=A}Reflect.construct(e,[],v)}else{try{v.call()}catch(A){u=A}e.call(v.prototype)}}else{try{throw Error()}catch(A){u=A}e()}}catch(A){if(A&&u&&typeof A.stack=="string"){for(var m=A.stack.split(`
`),O=u.stack.split(`
`),k=m.length-1,T=O.length-1;k>=1&&T>=0&&m[k]!==O[T];)T--;for(;k>=1&&T>=0;k--,T--)if(m[k]!==O[T]){if(k!==1||T!==1)do if(k--,T--,T<0||m[k]!==O[T]){var I=`
`+m[k].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),typeof e=="function"&&he.set(e,I),I}while(k>=1&&T>=0);break}}}finally{ke=!1,_e.current=w,Kr(),Error.prepareStackTrace=y}var Q=e?e.displayName||e.name:"",K=Q?ve(Q):"";return typeof e=="function"&&he.set(e,K),K}function Xr(e,n,i){return Je(e,!1)}function Hr(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function ye(e,n,i){if(e==null)return"";if(typeof e=="function")return Je(e,Hr(e));if(typeof e=="string")return ve(e);switch(e){case g:return ve("Suspense");case p:return ve("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Xr(e.render);case h:return ye(e.type,n,i);case _:{var u=e,y=u._payload,w=u._init;try{return ye(w(y),n,i)}catch{}}}return""}var ce=Object.prototype.hasOwnProperty,Ke={},qe=j.ReactDebugCurrentFrame;function xe(e){if(e){var n=e._owner,i=ye(e.type,e._source,n?n.type:null);qe.setExtraStackFrame(i)}else qe.setExtraStackFrame(null)}function Zr(e,n,i,u,y){{var w=Function.call.bind(ce);for(var v in e)if(w(e,v)){var m=void 0;try{if(typeof e[v]!="function"){var O=Error((u||"React class")+": "+i+" type `"+v+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[v]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}m=e[v](n,v,u,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(k){m=k}m&&!(m instanceof Error)&&(xe(y),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",i,v,typeof m),xe(null)),m instanceof Error&&!(m.message in Ke)&&(Ke[m.message]=!0,xe(y),R("Failed %s type: %s",i,m.message),xe(null))}}}var Qr=Array.isArray;function Se(e){return Qr(e)}function et(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,i=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function rt(e){try{return Xe(e),!1}catch{return!0}}function Xe(e){return""+e}function He(e){if(rt(e))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",et(e)),Xe(e)}var ue=j.ReactCurrentOwner,tt={key:!0,ref:!0,__self:!0,__source:!0},Ze,Qe,Te;Te={};function ot(e){if(ce.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function nt(e){if(ce.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function at(e,n){if(typeof e.ref=="string"&&ue.current&&n&&ue.current.stateNode!==n){var i=z(ue.current.type);Te[i]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',z(ue.current.type),e.ref),Te[i]=!0)}}function it(e,n){{var i=function(){Ze||(Ze=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function st(e,n){{var i=function(){Qe||(Qe=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var lt=function(e,n,i,u,y,w,v){var m={$$typeof:t,type:e,key:n,ref:i,props:v,_owner:w};return m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:y}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};function ct(e,n,i,u,y){{var w,v={},m=null,O=null;i!==void 0&&(He(i),m=""+i),nt(n)&&(He(n.key),m=""+n.key),ot(n)&&(O=n.ref,at(n,y));for(w in n)ce.call(n,w)&&!tt.hasOwnProperty(w)&&(v[w]=n[w]);if(e&&e.defaultProps){var k=e.defaultProps;for(w in k)v[w]===void 0&&(v[w]=k[w])}if(m||O){var T=typeof e=="function"?e.displayName||e.name||"Unknown":e;m&&it(v,T),O&&st(v,T)}return lt(e,m,O,y,u,ue.current,v)}}var Pe=j.ReactCurrentOwner,er=j.ReactDebugCurrentFrame;function Z(e){if(e){var n=e._owner,i=ye(e.type,e._source,n?n.type:null);er.setExtraStackFrame(i)}else er.setExtraStackFrame(null)}var je;je=!1;function Oe(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function rr(){{if(Pe.current){var e=z(Pe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ut(e){return""}var tr={};function dt(e){{var n=rr();if(!n){var i=typeof e=="string"?e:e.displayName||e.name;i&&(n=`

Check the top-level render call using <`+i+">.")}return n}}function or(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=dt(n);if(tr[i])return;tr[i]=!0;var u="";e&&e._owner&&e._owner!==Pe.current&&(u=" It was passed a child from "+z(e._owner.type)+"."),Z(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,u),Z(null)}}function nr(e,n){{if(typeof e!="object")return;if(Se(e))for(var i=0;i<e.length;i++){var u=e[i];Oe(u)&&or(u,n)}else if(Oe(e))e._store&&(e._store.validated=!0);else if(e){var y=S(e);if(typeof y=="function"&&y!==e.entries)for(var w=y.call(e),v;!(v=w.next()).done;)Oe(v.value)&&or(v.value,n)}}}function ft(e){{var n=e.type;if(n==null||typeof n=="string")return;var i;if(typeof n=="function")i=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===b||n.$$typeof===h))i=n.propTypes;else return;if(i){var u=z(n);Zr(i,e.props,"prop",u,e)}else if(n.PropTypes!==void 0&&!je){je=!0;var y=z(n);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",y||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pt(e){{for(var n=Object.keys(e.props),i=0;i<n.length;i++){var u=n[i];if(u!=="children"&&u!=="key"){Z(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u),Z(null);break}}e.ref!==null&&(Z(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),Z(null))}}var ar={};function ir(e,n,i,u,y,w){{var v=ae(e);if(!v){var m="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=ut();O?m+=O:m+=rr();var k;e===null?k="null":Se(e)?k="array":e!==void 0&&e.$$typeof===t?(k="<"+(z(e.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):k=typeof e,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",k,m)}var T=ct(e,n,i,y,w);if(T==null)return T;if(v){var I=n.children;if(I!==void 0)if(u)if(Se(I)){for(var Q=0;Q<I.length;Q++)nr(I[Q],e);Object.freeze&&Object.freeze(I)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nr(I,e)}if(ce.call(n,"key")){var K=z(e),A=Object.keys(n).filter(function(yt){return yt!=="key"}),Ae=A.length>0?"{key: someKey, "+A.join(": ..., ")+": ...}":"{key: someKey}";if(!ar[K+Ae]){var ht=A.length>0?"{"+A.join(": ..., ")+": ...}":"{}";R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ae,K,ht,K),ar[K+Ae]=!0}}return e===a?pt(T):ft(T),T}}function bt(e,n,i){return ir(e,n,i,!0)}function gt(e,n,i){return ir(e,n,i,!1)}var mt=gt,vt=bt;re.Fragment=a,re.jsx=mt,re.jsxs=vt}()),re}process.env.NODE_ENV==="production"?we.exports=sr():we.exports=lr();var cr=we.exports;function Ie(r){var t,o,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(t=0;t<c;t++)r[t]&&(o=Ie(r[t]))&&(a&&(a+=" "),a+=o)}else for(o in r)r[o]&&(a&&(a+=" "),a+=o);return a}function ur(){for(var r,t,o=0,a="",c=arguments.length;o<c;o++)(r=arguments[o])&&(t=Ie(r))&&(a&&(a+=" "),a+=t);return a}const Re="-";function dr(r){const t=pr(r),{conflictingClassGroups:o,conflictingClassGroupModifiers:a}=r;function c(l){const d=l.split(Re);return d[0]===""&&d.length!==1&&d.shift(),Fe(d,t)||fr(l)}function s(l,d){const b=o[l]||[];return d&&a[l]?[...b,...a[l]]:b}return{getClassGroupId:c,getConflictingClassGroupIds:s}}function Fe(r,t){var l;if(r.length===0)return t.classGroupId;const o=r[0],a=t.nextPart.get(o),c=a?Fe(r.slice(1),a):void 0;if(c)return c;if(t.validators.length===0)return;const s=r.join(Re);return(l=t.validators.find(({validator:d})=>d(s)))==null?void 0:l.classGroupId}const We=/^\[(.+)\]$/;function fr(r){if(We.test(r)){const t=We.exec(r)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function pr(r){const{theme:t,prefix:o}=r,a={nextPart:new Map,validators:[]};return gr(Object.entries(r.classGroups),o).forEach(([s,l])=>{Ee(l,a,s,t)}),a}function Ee(r,t,o,a){r.forEach(c=>{if(typeof c=="string"){const s=c===""?t:Ve(t,c);s.classGroupId=o;return}if(typeof c=="function"){if(br(c)){Ee(c(a),t,o,a);return}t.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(([s,l])=>{Ee(l,Ve(t,s),o,a)})})}function Ve(r,t){let o=r;return t.split(Re).forEach(a=>{o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o}function br(r){return r.isThemeGetter}function gr(r,t){return t?r.map(([o,a])=>{const c=a.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([l,d])=>[t+l,d])):s);return[o,c]}):r}function mr(r){if(r<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,a=new Map;function c(s,l){o.set(s,l),t++,t>r&&(t=0,a=o,o=new Map)}return{get(s){let l=o.get(s);if(l!==void 0)return l;if((l=a.get(s))!==void 0)return c(s,l),l},set(s,l){o.has(s)?o.set(s,l):c(s,l)}}}const Le="!";function vr(r){const t=r.separator,o=t.length===1,a=t[0],c=t.length;return function(l){const d=[];let b=0,g=0,p;for(let C=0;C<l.length;C++){let S=l[C];if(b===0){if(S===a&&(o||l.slice(C,C+c)===t)){d.push(l.slice(g,C)),g=C+c;continue}if(S==="/"){p=C;continue}}S==="["?b++:S==="]"&&b--}const h=d.length===0?l:l.substring(g),_=h.startsWith(Le),P=_?h.substring(1):h,F=p&&p>g?p-g:void 0;return{modifiers:d,hasImportantModifier:_,baseClassName:P,maybePostfixModifierPosition:F}}}function hr(r){if(r.length<=1)return r;const t=[];let o=[];return r.forEach(a=>{a[0]==="["?(t.push(...o.sort(),a),o=[]):o.push(a)}),t.push(...o.sort()),t}function yr(r){return{cache:mr(r.cacheSize),splitModifiers:vr(r),...dr(r)}}const xr=/\s+/;function wr(r,t){const{splitModifiers:o,getClassGroupId:a,getConflictingClassGroupIds:c}=t,s=new Set;return r.trim().split(xr).map(l=>{const{modifiers:d,hasImportantModifier:b,baseClassName:g,maybePostfixModifierPosition:p}=o(l);let h=a(p?g.substring(0,p):g),_=!!p;if(!h){if(!p)return{isTailwindClass:!1,originalClassName:l};if(h=a(g),!h)return{isTailwindClass:!1,originalClassName:l};_=!1}const P=hr(d).join(":");return{isTailwindClass:!0,modifierId:b?P+Le:P,classGroupId:h,originalClassName:l,hasPostfixModifier:_}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;const{modifierId:d,classGroupId:b,hasPostfixModifier:g}=l,p=d+b;return s.has(p)?!1:(s.add(p),c(b,g).forEach(h=>s.add(d+h)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function Rr(){let r=0,t,o,a="";for(;r<arguments.length;)(t=arguments[r++])&&(o=Ne(t))&&(a&&(a+=" "),a+=o);return a}function Ne(r){if(typeof r=="string")return r;let t,o="";for(let a=0;a<r.length;a++)r[a]&&(t=Ne(r[a]))&&(o&&(o+=" "),o+=t);return o}function Er(r,...t){let o,a,c,s=l;function l(b){const g=t.reduce((p,h)=>h(p),r());return o=yr(g),a=o.cache.get,c=o.cache.set,s=d,d(b)}function d(b){const g=a(b);if(g)return g;const p=wr(b,o);return c(b,p),p}return function(){return s(Rr.apply(null,arguments))}}function E(r){const t=o=>o[r]||[];return t.isThemeGetter=!0,t}const De=/^\[(?:([a-z-]+):)?(.+)\]$/i,_r=/^\d+\/\d+$/,Cr=new Set(["px","full","screen"]),kr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Sr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Pr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function W(r){return U(r)||Cr.has(r)||_r.test(r)}function V(r){return q(r,"length",Vr)}function U(r){return!!r&&!Number.isNaN(Number(r))}function de(r){return q(r,"number",U)}function te(r){return!!r&&Number.isInteger(Number(r))}function Or(r){return r.endsWith("%")&&U(r.slice(0,-1))}function f(r){return De.test(r)}function L(r){return kr.test(r)}const Ar=new Set(["length","size","percentage"]);function zr(r){return q(r,Ar,Ge)}function Mr(r){return q(r,"position",Ge)}const Ir=new Set(["image","url"]);function Fr(r){return q(r,Ir,Nr)}function Wr(r){return q(r,"",Lr)}function oe(){return!0}function q(r,t,o){const a=De.exec(r);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):o(a[2]):!1}function Vr(r){return Sr.test(r)&&!Tr.test(r)}function Ge(){return!1}function Lr(r){return Pr.test(r)}function Nr(r){return jr.test(r)}function Dr(){const r=E("colors"),t=E("spacing"),o=E("blur"),a=E("brightness"),c=E("borderColor"),s=E("borderRadius"),l=E("borderSpacing"),d=E("borderWidth"),b=E("contrast"),g=E("grayscale"),p=E("hueRotate"),h=E("invert"),_=E("gap"),P=E("gradientColorStops"),F=E("gradientColorStopPositions"),C=E("inset"),S=E("margin"),j=E("opacity"),R=E("padding"),fe=E("saturate"),ne=E("scale"),pe=E("sepia"),be=E("skew"),ge=E("space"),me=E("translate"),X=()=>["auto","contain","none"],ae=()=>["auto","hidden","clip","visible","scroll"],ie=()=>["auto",f,t],x=()=>[f,t],z=()=>["",W,V],M=()=>["auto",U,f],N=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",f],le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[U,de],J=()=>[U,f];return{cacheSize:500,separator:":",theme:{colors:[oe],spacing:[W,V],blur:["none","",L,f],brightness:G(),borderColor:[r],borderRadius:["none","","full",L,f],borderSpacing:x(),borderWidth:z(),contrast:G(),grayscale:D(),hueRotate:J(),invert:D(),gap:x(),gradientColorStops:[r],gradientColorStopPositions:[Or,V],inset:ie(),margin:ie(),opacity:G(),padding:x(),saturate:G(),scale:G(),sepia:D(),skew:J(),space:x(),translate:x()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[L]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...N(),f]}],overflow:[{overflow:ae()}],"overflow-x":[{"overflow-x":ae()}],"overflow-y":[{"overflow-y":ae()}],overscroll:[{overscroll:X()}],"overscroll-x":[{"overscroll-x":X()}],"overscroll-y":[{"overscroll-y":X()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",te,f]}],basis:[{basis:ie()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",te,f]}],"grid-cols":[{"grid-cols":[oe]}],"col-start-end":[{col:["auto",{span:["full",te,f]},f]}],"col-start":[{"col-start":M()}],"col-end":[{"col-end":M()}],"grid-rows":[{"grid-rows":[oe]}],"row-start-end":[{row:["auto",{span:[te,f]},f]}],"row-start":[{"row-start":M()}],"row-end":[{"row-end":M()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[_]}],"gap-x":[{"gap-x":[_]}],"gap-y":[{"gap-y":[_]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[ge]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ge]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,t]}],"min-w":[{"min-w":[f,t,"min","max","fit"]}],"max-w":[{"max-w":[f,t,"none","full","min","max","fit","prose",{screen:[L]},L]}],h:[{h:[f,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,t,"auto","min","max","fit"]}],"font-size":[{text:["base",L,V]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",de]}],"font-family":[{font:[oe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",U,de]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",W,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[j]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",W,V]}],"underline-offset":[{"underline-offset":["auto",W,f]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:x()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[j]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...N(),Mr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Fr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[F]}],"gradient-via-pos":[{via:[F]}],"gradient-to-pos":[{to:[F]}],"gradient-from":[{from:[P]}],"gradient-via":[{via:[P]}],"gradient-to":[{to:[P]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[j]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[j]}],"divide-style":[{divide:B()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[W,f]}],"outline-w":[{outline:[W,V]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[j]}],"ring-offset-w":[{"ring-offset":[W,V]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",L,Wr]}],"shadow-color":[{shadow:[oe]}],opacity:[{opacity:[j]}],"mix-blend":[{"mix-blend":[...se(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":se()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[a]}],contrast:[{contrast:[b]}],"drop-shadow":[{"drop-shadow":["","none",L,f]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[h]}],saturate:[{saturate:[fe]}],sepia:[{sepia:[pe]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[b]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[j]}],"backdrop-saturate":[{"backdrop-saturate":[fe]}],"backdrop-sepia":[{"backdrop-sepia":[pe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ne]}],"scale-x":[{"scale-x":[ne]}],"scale-y":[{"scale-y":[ne]}],rotate:[{rotate:[te,f]}],"translate-x":[{"translate-x":[me]}],"translate-y":[{"translate-y":[me]}],"skew-x":[{"skew-x":[be]}],"skew-y":[{"skew-y":[be]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[W,V,de]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Gr=Er(Dr),$r=(...r)=>Gr(ur(r));function $e(r){var t,o,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=$e(r[t]))&&(a&&(a+=" "),a+=o);else for(t in r)r[t]&&(a&&(a+=" "),a+=t);return a}function Yr(){for(var r,t,o=0,a="";o<arguments.length;)(r=arguments[o++])&&(t=$e(r))&&(a&&(a+=" "),a+=t);return a}const Ye=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,Ue=Yr,Ur=((r,t)=>o=>{var a;if((t==null?void 0:t.variants)==null)return Ue(r,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:c,defaultVariants:s}=t,l=Object.keys(c).map(g=>{const p=o==null?void 0:o[g],h=s==null?void 0:s[g];if(p===null)return null;const _=Ye(p)||Ye(h);return c[g][_]}),d=o&&Object.entries(o).reduce((g,p)=>{let[h,_]=p;return _===void 0||(g[h]=_),g},{}),b=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((g,p)=>{let{class:h,className:_,...P}=p;return Object.entries(P).every(F=>{let[C,S]=F;return Array.isArray(S)?S.includes({...s,...d}[C]):{...s,...d}[C]===S})?[...g,h,_]:g},[]);return Ue(r,l,b,o==null?void 0:o.class,o==null?void 0:o.className)})(["text-blue-500"],{variants:{variant:{solid:"",outline:"border-2",ghost:"transaction-color duration-300"},size:{sm:"px-4 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},colorschema:{primary:"text-white"}},compoundVariants:[{variant:"solid",colorschema:"primary",className:"bg-primary-500 hover:bg-primary-600"},{variant:"outline",colorschema:"primary",className:"text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"},{variant:"ghost",colorschema:"primary",className:"text-primary-600 bg-transparent hover:bg-primary-100"}],defaultVariants:{variant:"solid",size:"md",colorschema:"primary"}}),Br=Y.forwardRef(({variant:r,size:t,colorschema:o,className:a,...c},s)=>cr.jsx("button",{ref:s,className:$r(Ur({variant:r,size:t,colorschema:o,className:a})),...c}));$.Button=Br,Object.defineProperty($,Symbol.toStringTag,{value:"Module"})});
