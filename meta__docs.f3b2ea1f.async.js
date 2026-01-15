!(function(){var fe=Object.defineProperty;var w=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var k=(f,n,e)=>n in f?fe(f,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[n]=e,q=(f,n)=>{for(var e in n||(n={}))_e.call(n,e)&&k(f,e,n[e]);if(w)for(var e of w(n))me.call(n,e)&&k(f,e,n[e]);return f};(self.webpackChunk_rc_component_resize_observer=self.webpackChunk_rc_component_resize_observer||[]).push([[904],{25219:function(f,n,e){"use strict";e.r(n),e.d(n,{get:function(){return B},merge:function(){return te},noteOnce:function(){return X},omit:function(){return ce},set:function(){return S},supportNodeRef:function(){return h},supportRef:function(){return U},toArray:function(){return Z},useComposeRef:function(){return D},useControlledState:function(){return O},useEvent:function(){return i},useMergedState:function(){return v},warning:function(){return ae}});var r=e(67294);function p(t){const s=r.useRef();return s.current=t,r.useCallback((...d)=>{var P;return(P=s.current)==null?void 0:P.call(s,...d)},[])}var i=p;function R(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}const a=R()?r.useLayoutEffect:r.useEffect,m=(t,s)=>{const c=r.useRef(!0);a(()=>t(c.current),s),a(()=>(c.current=!1,()=>{c.current=!0}),[])},u=(t,s)=>{m(c=>{if(!c)return t()},s)};var l=m;function E(t){const s=r.useRef(!1),[c,d]=r.useState(t);r.useEffect(()=>(s.current=!1,()=>{s.current=!0}),[]);function P(L,C){C&&s.current||d(L)}return[c,P]}function _(t){return t!==void 0}function v(t,s){const{defaultValue:c,value:d,onChange:P,postState:L}=s||{},[C,T]=E(()=>_(d)?d:_(c)?typeof c=="function"?c():c:typeof t=="function"?t():t),W=d!==void 0?d:C,N=L?L(W):W,$=i(P),[J,ue]=E([W]);u(()=>{const F=J[0];C!==F&&$(C,F)},[J]),u(()=>{_(d)||T(d)},[d]);const de=i((F,Q)=>{T(F,Q),ue([W],Q)});return[N,de]}function O(t,s){const[c,d]=(0,r.useState)(t),P=s!==void 0?s:c;return l(L=>{L||d(s)},[s]),[P,d]}var z=e(59864);function o(t,s,c){const d=r.useRef({});return(!("value"in d.current)||c(d.current.condition,s))&&(d.current.value=t(),d.current.condition=s),d.current.value}const b=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),g=Symbol.for("react.fragment");function y(t){return t&&typeof t=="object"&&(t.$$typeof===b||t.$$typeof===M)&&t.type===g}const I=Number(r.version.split(".")[0]),x=(t,s)=>{typeof t=="function"?t(s):typeof t=="object"&&t&&"current"in t&&(t.current=s)},j=(...t)=>{const s=t.filter(Boolean);return s.length<=1?s[0]:c=>{t.forEach(d=>{x(d,c)})}},D=(...t)=>o(()=>j(...t),t,(s,c)=>s.length!==c.length||s.every((d,P)=>d!==c[P])),U=t=>{var c,d;if(!t)return!1;if(A(t)&&I>=19)return!0;const s=(0,z.isMemo)(t)?t.type.type:t.type;return!(typeof s=="function"&&!((c=s.prototype)!=null&&c.render)&&s.$$typeof!==z.ForwardRef||typeof t=="function"&&!((d=t.prototype)!=null&&d.render)&&t.$$typeof!==z.ForwardRef)};function A(t){return(0,r.isValidElement)(t)&&!y(t)}const h=t=>A(t)&&U(t),ve=t=>{if(t&&A(t)){const s=t;return s.props.propertyIsEnumerable("ref")?s.props.ref:s.ref}return null};function B(t,s){let c=t;for(let d=0;d<s.length;d+=1){if(c==null)return;c=c[s[d]]}return c}function V(t,s,c,d){if(!s.length)return c;const[P,...L]=s;let C;return!t&&typeof P=="number"?C=[]:Array.isArray(t)?C=[...t]:C=q({},t),d&&c===void 0&&L.length===1?delete C[P][L[0]]:C[P]=V(C[P],L,c,d),C}function S(t,s,c,d=!1){return s.length&&d&&c===void 0&&!B(t,s.slice(0,-1))?t:V(t,s,c,d)}function ee(t){return typeof t=="object"&&t!==null&&Object.getPrototypeOf(t)===Object.prototype}function G(t){return Array.isArray(t)?[]:{}}const ne=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function te(...t){let s=G(t[0]);return t.forEach(c=>{function d(P,L){const C=new Set(L),T=B(c,P),W=Array.isArray(T);if(W||ee(T)){if(!C.has(T)){C.add(T);const N=B(s,P);W?s=S(s,P,[]):(!N||typeof N!="object")&&(s=S(s,P,G(T))),ne(T).forEach($=>{d([...P,$],C)})}}else s=S(s,P,T)}d([])}),s}let H={};const re=[],se=t=>{re.push(t)};function oe(t,s){}function ie(t,s){}function le(){H={}}function Y(t,s,c){!s&&!H[c]&&(t(!1,c),H[c]=!0)}function K(t,s){Y(oe,t,s)}function X(t,s){Y(ie,t,s)}K.preMessage=se,K.resetWarned=le,K.noteOnce=X;var ae=K;function ce(t,s){const c=Object.assign({},t);return Array.isArray(s)&&s.forEach(d=>{delete c[d]}),c}function Z(t,s={}){let c=[];return r.Children.forEach(t,d=>{d==null&&!s.keepEmpty||(Array.isArray(d)?c=c.concat(Z(d)):y(d)&&d.props?c=c.concat(Z(d.props.children,s)):c.push(d))}),c}},71030:function(f,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=R;var r=i(e(30081)),p=i(e(67294));function i(a){return a&&a.__esModule?a:{default:a}}function R(a,m={}){let u=[];return p.default.Children.forEach(a,l=>{l==null&&!m.keepEmpty||(Array.isArray(l)?u=u.concat(R(l)):(0,r.default)(l)&&l.props?u=u.concat(R(l.props.children,m)):u.push(l))}),u}},94868:function(f,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=p,n.getDOM=r,n.isDOM=e;function e(i){return i instanceof HTMLElement||i instanceof SVGElement}function r(i){return i&&typeof i=="object"&&e(i.nativeElement)?i.nativeElement:e(i)?i:null}function p(i){const R=r(i);if(R)return R;if(i&&typeof i=="object"&&"current"in i){const a=r(i.current);if(a)return a}return null}},30081:function(f,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;const e=Symbol.for("react.element"),r=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function i(R){return R&&typeof R=="object"&&(R.$$typeof===e||R.$$typeof===r)&&R.type===p}},94327:function(f,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=R;var r=i(e(67294));function p(a){if(typeof WeakMap!="function")return null;var m=new WeakMap,u=new WeakMap;return(p=function(l){return l?u:m})(a)}function i(a,m){if(!m&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=p(m);if(u&&u.has(a))return u.get(a);var l={__proto__:null},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in a)if(_!=="default"&&Object.prototype.hasOwnProperty.call(a,_)){var v=E?Object.getOwnPropertyDescriptor(a,_):null;v&&(v.get||v.set)?Object.defineProperty(l,_,v):l[_]=a[_]}return l.default=a,u&&u.set(a,l),l}function R(a,m,u){const l=r.useRef({});return(!("value"in l.current)||u(l.current.condition,m))&&(l.current.value=a(),l.current.condition=m),l.current.value}},20058:function(f,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useComposeRef=n.supportRef=n.supportNodeRef=n.getNodeRef=n.fillRef=n.composeRef=void 0;var r=e(67294),p=e(59864),i=a(e(94327)),R=a(e(30081));function a(o){return o&&o.__esModule?o:{default:o}}const m=Number(r.version.split(".")[0]),u=(o,b)=>{typeof o=="function"?o(b):typeof o=="object"&&o&&"current"in o&&(o.current=b)};n.fillRef=u;const l=(...o)=>{const b=o.filter(Boolean);return b.length<=1?b[0]:M=>{o.forEach(g=>{u(g,M)})}};n.composeRef=l;const E=(...o)=>(0,i.default)(()=>l(...o),o,(b,M)=>b.length!==M.length||b.every((g,y)=>g!==M[y]));n.useComposeRef=E;const _=o=>{var M,g;if(!o)return!1;if(v(o)&&m>=19)return!0;const b=(0,p.isMemo)(o)?o.type.type:o.type;return!(typeof b=="function"&&!((M=b.prototype)!=null&&M.render)&&b.$$typeof!==p.ForwardRef||typeof o=="function"&&!((g=o.prototype)!=null&&g.render)&&o.$$typeof!==p.ForwardRef)};n.supportRef=_;function v(o){return(0,r.isValidElement)(o)&&!(0,R.default)(o)}const O=o=>v(o)&&_(o);n.supportNodeRef=O;const z=o=>{if(o&&v(o)){const b=o;return b.props.propertyIsEnumerable("ref")?b.props.ref:b.ref}return null};n.getNodeRef=z},17039:function(f,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.call=m,n.default=void 0,n.note=R,n.noteOnce=l,n.preMessage=void 0,n.resetWarned=a,n.warning=i,n.warningOnce=u;let e={};const r=[],p=_=>{r.push(_)};n.preMessage=p;function i(_,v){}function R(_,v){}function a(){e={}}function m(_,v,O){!v&&!e[O]&&(_(!1,O),e[O]=!0)}function u(_,v){m(i,_,v)}function l(_,v){m(R,_,v)}u.preMessage=p,u.resetWarned=a,u.noteOnce=l;var E=n.default=u},33147:function(f,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return y}});var p=e(15009),i=e.n(p),R=e(99289),a=e.n(R),m=e(67294),u=e(69945),l=e(27515),E=e(71030),_=e(17039),v=e(36067),O=e(40150),z=e(33005),o=e(54677),b=e(94868),M=e(20058),g=e(25219),y={"docs-demo-basic-demo-basic":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,98471))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37050).Z},react:{type:"NPM",value:"16.14.0"},"../assets/index.less":{type:"FILE",value:e(86834).Z},"../src.tsx":{type:"FILE",value:e(2333).Z},"@rc-component/util":{type:"NPM",value:"1.3.0"},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./useResizeObserver.ts":{type:"FILE",value:e(50168).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z}},entry:"index.tsx"},context:{"../assets/index.less":u,"../src.tsx":l,"./SingleObserver.tsx":v,"./Collection.tsx":O,"./useResizeObserver.ts":z,"./utils/observerUtil.ts":o,react:r||(r=e.t(m,2)),"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":u,"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":l,"@rc-component/util/lib/Children/toArray":E,"@rc-component/util/lib/warning":_,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":v,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":O,"/Users/jilin/projects/antd/rc-resize-observer/src/useResizeObserver.ts":z,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":o,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":M,"@rc-component/util":g},renderOpts:{compile:function(){var I=a()(i()().mark(function j(){var D,U=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(250).then(e.bind(e,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,U));case 3:case"end":return h.stop()}},j)}));function x(){return I.apply(this,arguments)}return x}()}}}},84711:function(f,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return y}});var p=e(15009),i=e.n(p),R=e(99289),a=e.n(R),m=e(67294),u=e(27515),l=e(69945),E=e(71030),_=e(17039),v=e(36067),O=e(33005),z=e(40150),o=e(54677),b=e(94868),M=e(20058),g=e(25219),y={"docs-demo-collection-demo-collection":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,5125))})),asset:{type:"BLOCK",id:"docs-demo-collection-demo-collection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21339).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.3.0"},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./useResizeObserver.ts":{type:"FILE",value:e(50168).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z}},entry:"index.tsx"},context:{"../src.tsx":u,"../assets/index.less":l,"./SingleObserver.tsx":v,"./useResizeObserver.ts":O,"./Collection.tsx":z,"./utils/observerUtil.ts":o,react:r||(r=e.t(m,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":u,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":l,"@rc-component/util/lib/Children/toArray":E,"@rc-component/util/lib/warning":_,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":v,"/Users/jilin/projects/antd/rc-resize-observer/src/useResizeObserver.ts":O,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":z,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":o,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":M,"@rc-component/util":g},renderOpts:{compile:function(){var I=a()(i()().mark(function j(){var D,U=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(250).then(e.bind(e,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,U));case 3:case"end":return h.stop()}},j)}));function x(){return I.apply(this,arguments)}return x}()}}}},94530:function(f,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return y}});var p=e(15009),i=e.n(p),R=e(99289),a=e.n(R),m=e(67294),u=e(27515),l=e(69945),E=e(71030),_=e(17039),v=e(33005),O=e(36067),z=e(40150),o=e(54677),b=e(94868),M=e(20058),g=e(25219),y={"docs-demo-debug-demo-debug":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,5665))})),asset:{type:"BLOCK",id:"docs-demo-debug-demo-debug",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29425).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.3.0"},"./useResizeObserver.ts":{type:"FILE",value:e(50168).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z}},entry:"index.tsx"},context:{"../src.tsx":u,"../assets/index.less":l,"./useResizeObserver.ts":v,"./SingleObserver.tsx":O,"./Collection.tsx":z,"./utils/observerUtil.ts":o,react:r||(r=e.t(m,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":u,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":l,"@rc-component/util/lib/Children/toArray":E,"@rc-component/util/lib/warning":_,"/Users/jilin/projects/antd/rc-resize-observer/src/useResizeObserver.ts":v,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":O,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":z,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":o,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":M,"@rc-component/util":g},renderOpts:{compile:function(){var I=a()(i()().mark(function j(){var D,U=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(250).then(e.bind(e,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,U));case 3:case"end":return h.stop()}},j)}));function x(){return I.apply(this,arguments)}return x}()}}}},48194:function(f,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return y}});var p=e(15009),i=e.n(p),R=e(99289),a=e.n(R),m=e(67294),u=e(27515),l=e(69945),E=e(71030),_=e(17039),v=e(33005),O=e(54677),z=e(40150),o=e(36067),b=e(94868),M=e(20058),g=e(25219),y={"docs-demo-render-props-demo-renderprops":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,295))})),asset:{type:"BLOCK",id:"docs-demo-render-props-demo-renderprops",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19746).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.3.0"},"./useResizeObserver.ts":{type:"FILE",value:e(50168).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z}},entry:"index.tsx"},context:{"../src.tsx":u,"../assets/index.less":l,"./useResizeObserver.ts":v,"./utils/observerUtil.ts":O,"./Collection.tsx":z,"./SingleObserver.tsx":o,react:r||(r=e.t(m,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":u,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":l,"@rc-component/util/lib/Children/toArray":E,"@rc-component/util/lib/warning":_,"/Users/jilin/projects/antd/rc-resize-observer/src/useResizeObserver.ts":v,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":O,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":z,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":o,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":M,"@rc-component/util":g},renderOpts:{compile:function(){var I=a()(i()().mark(function j(){var D,U=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(250).then(e.bind(e,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,U));case 3:case"end":return h.stop()}},j)}));function x(){return I.apply(this,arguments)}return x}()}}}},11171:function(f,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return p}});var r=e(67294),p={}},40150:function(f,n,e){"use strict";e.r(n),e.d(n,{Collection:function(){return i},CollectionContext:function(){return p}});var r=e(67294),p=r.createContext(null);function i(R){var a=R.children,m=R.onBatchResize,u=r.useRef(0),l=r.useRef([]),E=r.useContext(p),_=r.useCallback(function(v,O,z){u.current+=1;var o=u.current;l.current.push({size:v,element:O,data:z}),Promise.resolve().then(function(){o===u.current&&(m==null||m(l.current),l.current=[])}),E==null||E(v,O,z)},[m,E]);return r.createElement(p.Provider,{value:_},a)}},36067:function(f,n,e){"use strict";e.r(n);var r=e(94868),p=e(20058),i=e(67294),R=e(40150),a=e(33005);function m(l,E){var _=l.children,v=l.disabled,O=l.onResize,z=l.data,o=i.useRef(null),b=i.useContext(R.CollectionContext),M=typeof _=="function",g=M?_(o):_,y=!M&&i.isValidElement(g)&&(0,p.supportRef)(g),I=y?(0,p.getNodeRef)(g):null,x=(0,p.useComposeRef)(I,o),j=function(){return(0,r.getDOM)(o.current)};return i.useImperativeHandle(E,function(){return j()}),(0,a.default)(!v,j,O,function(D,U){b==null||b(D,U,z)}),y?i.cloneElement(g,{ref:x}):g}var u=i.forwardRef(m);n.default=u},27515:function(f,n,e){"use strict";e.r(n),e.d(n,{_rs:function(){return l._rs},useResizeObserver:function(){return E.default}});var r=e(67333),p=e.n(r),i=e(67294),R=e(71030),a=e(17039),m=e(36067),u=e(40150),l=e(54677),E=e(33005),_="rc-observer-key";function v(z,o){var b=z.children,M=typeof b=="function"?[b]:(0,R.default)(b);return M.map(function(g,y){var I=(g==null?void 0:g.key)||"".concat(_,"-").concat(y);return i.createElement(m.default,p()({},z,{key:I,ref:y===0?o:void 0}),g)})}var O=i.forwardRef(v);O.Collection=u.Collection,n.default=O},33005:function(f,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m}});var r=e(97857),p=e.n(r),i=e(67294),R=e(54677),a=e(25219);function m(u,l,E,_){var v=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),O=(0,a.useEvent)(function(o){var b=o.getBoundingClientRect(),M=b.width,g=b.height,y=o.offsetWidth,I=o.offsetHeight,x=Math.floor(M),j=Math.floor(g);if(v.current.width!==x||v.current.height!==j||v.current.offsetWidth!==y||v.current.offsetHeight!==I){var D={width:x,height:j,offsetWidth:y,offsetHeight:I};v.current=D;var U=y===Math.round(M)?M:y,A=I===Math.round(g)?g:I,h=p()(p()({},D),{},{offsetWidth:U,offsetHeight:A});_==null||_(h,o),Promise.resolve().then(function(){E==null||E(h,o)})}}),z=typeof l=="function";i.useEffect(function(){var o=z?l():l;return o&&u&&(0,R.observe)(o,O),function(){o&&(0,R.unobserve)(o,O)}},[u,z?0:l])}},54677:function(f,n,e){"use strict";e.r(n),e.d(n,{_el:function(){return a},_rs:function(){return m},observe:function(){return u},unobserve:function(){return l}});var r=new Map;function p(E){E.forEach(function(_){var v,O=_.target;(v=r.get(O))===null||v===void 0||v.forEach(function(z){return z(O)})})}var i;function R(){return i||(i=new ResizeObserver(p)),i}var a=null,m=null;function u(E,_){r.has(E)||(r.set(E,new Set),R().observe(E)),r.get(E).add(_)}function l(E,_){r.has(E)&&(r.get(E).delete(_),r.get(E).size||(R().unobserve(E),r.delete(E)))}},69945:function(f,n,e){"use strict";e.r(n)},55469:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[]},61298:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Use ",paraId:0},{value:"ResizeObserver.Collection",paraId:0},{value:" to collect multiple ",paraId:0},{value:"ResizeObserver",paraId:0},{value:" resize event within frame.",paraId:0}]},45041:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[]},69562:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[]},51446:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Resize observer for React.",paraId:1,tocIndex:0},{value:"https://resize-observer-react-component.vercel.app/",paraId:2,tocIndex:1},{value:`import ResizeObserver from 'rc-resize-observer';
import { render } from 'react-dom';

render(
  <ResizeObserver
    onResize={() => {
      console.log('resized!');
    }}
  >
    <textarea />
  </ResizeObserver>,
  mountNode,
);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"disabled",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"({ width, height }) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Trigger when child node resized",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-resize-observer is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(f,n){"use strict";n.Z=`@footer-prefix-cls: rc-footer;

.@{footer-prefix-cls} {
  position: relative;
  clear: both;
  color: rgba(255, 255, 255, .4);
  font-size: 14px;
  line-height: 1.5;
  background-color: #000;

  a {
    transition: all .3s;
    color: rgba(255, 255, 255, .9);
    text-decoration: none;

    &:hover {
      color: #40a9ff;
    }
  }

  &-container {
    width: 100%;
    max-width: 1200px;
    padding: 80px 0;
    margin: auto;
  }

  &-columns {
    display: flex;
    justify-content: space-around;
  }

  &-column {
    h2 {
      position: relative;
      margin: 0 auto 24px;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
    }

    &-icon {
      margin-right: .5em;
      width: 22px;
      display: inline-block;
      vertical-align: middle;
      top: -1px;
      position: relative;
      text-align: center;

      > span,
      > svg,
      img {
        width: 100%;
        display: block;
      }
    }
  }

  &-item {
    margin: 12px 0;

    &-icon {
      margin-right: .4em;
      width: 16px;
      display: inline-block;
      vertical-align: middle;
      top: -1px;
      position: relative;
      text-align: center;

      > span,
      > svg,
      img {
        width: 100%;
        display: block;
      }
    }

    &-separator {
      margin: 0 .3em;
    }
  }

  &-bottom {
    &-container {
      border-top: 1px solid rgba(255, 255, 255, .25);
      width: 100%;
      max-width: 1200px;
      text-align: center;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 32px;
      font-size: 16px;
    }
  }

  &-light {
    background-color: transparent;
    color: rgba(0, 0, 0, .85);

    h2,
    a {
      color: rgba(0, 0, 0, .85);
    }
  }

  &-light &-bottom-container {
    border-top-color: #e8e8e8;
  }

  &-light &-item-separator,
  &-light &-item-description {
    color: rgba(0, 0, 0, .45);
  }
}

@media only screen and (max-width: 767.99px) {
  .@{footer-prefix-cls} {
    text-align: center;

    &-container {
      padding: 40px 0;
    }

    &-columns {
      display: block;
    }

    &-column {
      display: block;
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
`},37050:function(f,n){"use strict";n.Z=`import '../assets/index.less';
import React from 'react';
import type { ResizeObserverProps } from '../src';
import ResizeObserver from '../src';

const Wrapper = ({ children }: any) => <>{children}</>;

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

  const onResize: ResizeObserverProps['onResize'] = ({
    width,
    height,
    offsetHeight,
    offsetWidth,
  }) => {
    setTimes(prevTimes => prevTimes + 1);
    console.log(
      'Resize:',
      '\\n',
      'BoundingBox',
      width,
      height,
      '\\n',
      'Offset',
      offsetWidth,
      offsetHeight,
    );
  };

  return (
    <React.StrictMode>
      <div style={{ transform: 'scale(1.1)', transformOrigin: '0% 0%' }}>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setDisabled(!disabled);
              }}
              checked={disabled}
            />{' '}
            Disabled Observe
          </label>
          {' >>> '}
          <span>Resize times: {times}</span>
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          <Wrapper>
            <textarea ref={textareaRef} placeholder="I'm a textarea!" />
          </Wrapper>
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
`},21339:function(f,n){"use strict";n.Z=`import '../assets/index.less';
import React from 'react';
import ResizeObserver from '../src';

function randomSize() {
  return {
    width: Math.round(50 + Math.random() * 150),
    height: Math.round(50 + Math.random() * 150),
  };
}

const sharedStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

export default function App() {
  const [size1, setSize1] = React.useState(randomSize());
  const [size2, setSize2] = React.useState(randomSize());

  console.log('Render:', size1, size2);

  return (
    <ResizeObserver.Collection
      onBatchResize={infoList => {
        console.log(
          'Batch Resize:',
          infoList,
          infoList.map(({ data, size }) => \`\${data}(\${size.width}/\${size.height})\`),
        );
      }}
    >
      <div style={{ display: 'flex', columnGap: 4, marginBottom: 8 }}>
        <button onClick={() => setSize1(randomSize())}>Resize: 1</button>
        <button onClick={() => setSize2(randomSize())}>Resize: 2</button>
        <button
          onClick={() => {
            setSize1(randomSize());
            setSize2(randomSize());
          }}
        >
          Resize: all
        </button>
      </div>
      <div style={{ display: 'flex', columnGap: 16 }}>
        <ResizeObserver data="shape_1">
          <div style={{ ...sharedStyle, ...size1, background: 'red' }}>1</div>
        </ResizeObserver>
        <ResizeObserver data="shape_2">
          <div style={{ ...sharedStyle, ...size2, background: 'blue' }}>2</div>
        </ResizeObserver>
      </div>
    </ResizeObserver.Collection>
  );
}
`},29425:function(f,n){"use strict";n.Z=`import '../assets/index.less';
import React from 'react';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const onResize = (size: { width: number; height: number }) => {
    setTimes(prevTimes => prevTimes + 1);
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <React.StrictMode>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setDisabled(!disabled);
              }}
              checked={disabled}
            />{' '}
            Disabled Observe
          </label>
          {' >>> '}
          <span>
            Resize times: {times} ({width}/{height})
          </span>
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          <textarea placeholder="I'm a textarea!" />
          <button type="button">Warning with multiple children</button>
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
`},19746:function(f,n){"use strict";n.Z=`import '../assets/index.less';
import React from 'react';
import type { ResizeObserverProps } from '../src';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const onResize: ResizeObserverProps['onResize'] = () => {
    setTimes(prevTimes => prevTimes + 1);
  };

  return (
    <React.StrictMode>
      <div style={{ transform: 'scale(1.1)', transformOrigin: '0% 0%' }}>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setDisabled(!disabled);
              }}
              checked={disabled}
            />{' '}
            Disabled Observe
          </label>
          {' >>> '}
          <span>Resize times: {times}</span>
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          {resizeRef => (
            <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <textarea placeholder="I'm a textarea!" />
              <div ref={resizeRef} style={{ background: 'red', height: 50, fontSize: 10 }}>
                Target
              </div>
            </div>
          )}
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
`},76044:function(f,n){"use strict";n.Z=`import * as React from 'react';
import type { SizeInfo } from '.';

type onCollectionResize = (size: SizeInfo, element: HTMLElement, data: any) => void;

export const CollectionContext = React.createContext<onCollectionResize>(null);

export interface ResizeInfo {
  size: SizeInfo;
  data: any;
  element: HTMLElement;
}

export interface CollectionProps {
  /** Trigger when some children ResizeObserver changed. Collect by frame render level */
  onBatchResize?: (resizeInfo: ResizeInfo[]) => void;
  children?: React.ReactNode;
}

/**
 * Collect all the resize event from children ResizeObserver
 */
export function Collection({ children, onBatchResize }: CollectionProps) {
  const resizeIdRef = React.useRef(0);
  const resizeInfosRef = React.useRef<ResizeInfo[]>([]);

  const onCollectionResize = React.useContext(CollectionContext);

  const onResize = React.useCallback<onCollectionResize>(
    (size, element, data) => {
      resizeIdRef.current += 1;
      const currentId = resizeIdRef.current;

      resizeInfosRef.current.push({
        size,
        element,
        data,
      });

      Promise.resolve().then(() => {
        if (currentId === resizeIdRef.current) {
          onBatchResize?.(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });

      // Continue bubbling if parent exist
      onCollectionResize?.(size, element, data);
    },
    [onBatchResize, onCollectionResize],
  );

  return <CollectionContext.Provider value={onResize}>{children}</CollectionContext.Provider>;
}
`},11238:function(f,n){"use strict";n.Z=`import { getDOM } from '@rc-component/util/lib/Dom/findDOMNode';
import { supportRef, useComposeRef, getNodeRef } from '@rc-component/util/lib/ref';
import * as React from 'react';
import type { ResizeObserverProps } from '..';
import { CollectionContext } from '../Collection';
import useResizeObserver from '../useResizeObserver';

export interface SingleObserverProps extends ResizeObserverProps {
  children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}

function SingleObserver(props: SingleObserverProps, ref: React.Ref<HTMLElement>) {
  const { children, disabled, onResize, data } = props;
  const elementRef = React.useRef<Element>(null);

  const onCollectionResize = React.useContext(CollectionContext);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? getNodeRef(mergedChildren) : null;

  const mergedRef = useComposeRef(originRef, elementRef);

  const getDomElement = () => {
    return getDOM(elementRef.current) as HTMLElement;
  };

  React.useImperativeHandle(ref, () => getDomElement());

  // =========================== Observe ============================
  useResizeObserver(!disabled, getDomElement, onResize, (sizeInfo, target) => {
    onCollectionResize?.(sizeInfo, target, data);
  });

  // ============================ Render ============================
  return canRef
    ? React.cloneElement(mergedChildren as any, {
        ref: mergedRef,
      })
    : mergedChildren;
}

const RefSingleObserver = React.forwardRef(SingleObserver);

if (process.env.NODE_ENV !== 'production') {
  RefSingleObserver.displayName = 'SingleObserver';
}

export default RefSingleObserver;
`},2333:function(f,n){"use strict";n.Z=`import * as React from 'react';
import toArray from '@rc-component/util/lib/Children/toArray';
import { warning } from '@rc-component/util/lib/warning';
import SingleObserver from './SingleObserver';
import { Collection } from './Collection';

const INTERNAL_PREFIX_KEY = 'rc-observer-key';

import { _rs } from './utils/observerUtil';
export {
  /** @private Test only for mock trigger resize event */
  _rs,
};

export { default as useResizeObserver } from './useResizeObserver';

export interface SizeInfo {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
}

export type OnResize = (size: SizeInfo, element: HTMLElement) => void;

export interface ResizeObserverProps {
  /** Pass to ResizeObserver.Collection with additional data */
  data?: any;
  children: React.ReactNode | ((ref: React.RefObject<any>) => React.ReactElement);
  disabled?: boolean;
  /** Trigger if element resized. Will always trigger when first time render. */
  onResize?: OnResize;
}

function ResizeObserver(props: ResizeObserverProps, ref: React.Ref<HTMLElement>) {
  const { children } = props;
  const childNodes = typeof children === 'function' ? [children] : toArray(children);

  if (process.env.NODE_ENV !== 'production') {
    if (childNodes.length > 1) {
      warning(
        false,
        'Find more than one child node with \`children\` in ResizeObserver. Please use ResizeObserver.Collection instead.',
      );
    } else if (childNodes.length === 0) {
      warning(false, '\`children\` of ResizeObserver is empty. Nothing is in observe.');
    }
  }

  return childNodes.map((child, index) => {
    const key = child?.key || \`\${INTERNAL_PREFIX_KEY}-\${index}\`;
    return (
      <SingleObserver {...props} key={key} ref={index === 0 ? ref : undefined}>
        {child}
      </SingleObserver>
    );
  }) as any as React.ReactElement;
}

const RefResizeObserver = React.forwardRef(ResizeObserver) as React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ResizeObserverProps> & React.RefAttributes<any>
> & {
  Collection: typeof Collection;
};

if (process.env.NODE_ENV !== 'production') {
  RefResizeObserver.displayName = 'ResizeObserver';
}

RefResizeObserver.Collection = Collection;

export default RefResizeObserver;
`},50168:function(f,n){"use strict";n.Z=`import * as React from 'react';
import type { OnResize, SizeInfo } from '.';
import { observe, unobserve } from './utils/observerUtil';
import { useEvent } from '@rc-component/util';

export default function useResizeObserver(
  enabled: boolean,
  getTarget: HTMLElement | (() => HTMLElement),
  onDelayResize?: OnResize,
  onSyncResize?: OnResize,
) {
  // ============================= Size =============================
  const sizeRef = React.useRef<SizeInfo>({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  // =========================== Observe ============================

  // Handler
  const onInternalResize = useEvent((target: HTMLElement) => {
    const { width, height } = target.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = target;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use \`boundary\` instead of \`contentRect\` here to avoid shaking.
     */
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight };
      sizeRef.current = size;

      // IE is strange, right?
      const mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      const mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;

      const sizeInfo = {
        ...size,
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight,
      };

      // Call the callback immediately, let the caller decide whether to defer
      // onResize(sizeInfo, target);
      onSyncResize?.(sizeInfo, target);

      // defer the callback but not defer to next frame
      Promise.resolve().then(() => {
        onDelayResize?.(sizeInfo, target);
      });
    }
  });

  // Dynamic observe
  const isFuncTarget = typeof getTarget === 'function';
  React.useEffect(() => {
    const target = isFuncTarget ? getTarget() : getTarget;

    if (target && enabled) {
      observe(target, onInternalResize);
    }

    return () => {
      if (target) {
        unobserve(target, onInternalResize);
      }
    };
  }, [
    enabled,
    // When is function, no need to watch it
    isFuncTarget ? 0 : getTarget,
  ]);
}
`},57571:function(f,n){"use strict";n.Z=`export type ResizeListener = (element: Element) => void;

// =============================== Const ===============================
const elementListeners = new Map<Element, Set<ResizeListener>>();

function onResize(entities: ResizeObserverEntry[]) {
  entities.forEach(entity => {
    const { target } = entity;
    elementListeners.get(target)?.forEach(listener => listener(target));
  });
}

// Delay create ResizeObserver since it's not supported in server side
let observer: ResizeObserver;

function ensureResizeObserver() {
  if (!observer) {
    observer = new ResizeObserver(onResize);
  }
  return observer;
}

// Dev env only
export const _el = process.env.NODE_ENV !== 'production' ? elementListeners : null; // eslint-disable-line
export const _rs = process.env.NODE_ENV !== 'production' ? onResize : null; // eslint-disable-line

// ============================== Observe ==============================
export function observe(element: Element, callback: ResizeListener) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    ensureResizeObserver().observe(element);
  }

  elementListeners.get(element).add(callback);
}

export function unobserve(element: Element, callback: ResizeListener) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      ensureResizeObserver().unobserve(element);
      elementListeners.delete(element);
    }
  }
}
`},67333:function(f){function n(){return f.exports=n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var p=arguments[r];for(var i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i])}return e},f.exports.__esModule=!0,f.exports.default=f.exports,n.apply(this,arguments)}f.exports=n,f.exports.__esModule=!0,f.exports.default=f.exports}}]);
}());