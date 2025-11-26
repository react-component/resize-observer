(self.webpackChunk_rc_component_resize_observer=self.webpackChunk_rc_component_resize_observer||[]).push([[904],{71030:function(_,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;var t=o(e(30081)),d=o(e(67294));function o(r){return r&&r.__esModule?r:{default:r}}function f(r,a={}){let l=[];return d.default.Children.forEach(r,i=>{i==null&&!a.keepEmpty||(Array.isArray(i)?l=l.concat(f(i)):(0,t.default)(i)&&i.props?l=l.concat(f(i.props.children,a)):l.push(i))}),l}},94868:function(_,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=d,n.getDOM=t,n.isDOM=e;function e(o){return o instanceof HTMLElement||o instanceof SVGElement}function t(o){return o&&typeof o=="object"&&e(o.nativeElement)?o.nativeElement:e(o)?o:null}function d(o){const f=t(o);if(f)return f;if(o&&typeof o=="object"&&"current"in o){const r=t(o.current);if(r)return r}return null}},30081:function(_,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;const e=Symbol.for("react.element"),t=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function o(f){return f&&typeof f=="object"&&(f.$$typeof===e||f.$$typeof===t)&&f.type===d}},94327:function(_,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;var t=o(e(67294));function d(r){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(d=function(i){return i?l:a})(r)}function o(r,a){if(!a&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var l=d(a);if(l&&l.has(r))return l.get(r);var i={__proto__:null},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if(c!=="default"&&Object.prototype.hasOwnProperty.call(r,c)){var u=m?Object.getOwnPropertyDescriptor(r,c):null;u&&(u.get||u.set)?Object.defineProperty(i,c,u):i[c]=r[c]}return i.default=r,l&&l.set(r,i),i}function f(r,a,l){const i=t.useRef({});return(!("value"in i.current)||l(i.current.condition,a))&&(i.current.value=r(),i.current.condition=a),i.current.value}},20058:function(_,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useComposeRef=n.supportRef=n.supportNodeRef=n.getNodeRef=n.fillRef=n.composeRef=void 0;var t=e(67294),d=e(59864),o=r(e(94327)),f=r(e(30081));function r(s){return s&&s.__esModule?s:{default:s}}const a=Number(t.version.split(".")[0]),l=(s,R)=>{typeof s=="function"?s(R):typeof s=="object"&&s&&"current"in s&&(s.current=R)};n.fillRef=l;const i=(...s)=>{const R=s.filter(Boolean);return R.length<=1?R[0]:b=>{s.forEach(h=>{l(h,b)})}};n.composeRef=i;const m=(...s)=>(0,o.default)(()=>i(...s),s,(R,b)=>R.length!==b.length||R.every((h,O)=>h!==b[O]));n.useComposeRef=m;const c=s=>{var b,h;if(!s)return!1;if(u(s)&&a>=19)return!0;const R=(0,d.isMemo)(s)?s.type.type:s.type;return!(typeof R=="function"&&!((b=R.prototype)!=null&&b.render)&&R.$$typeof!==d.ForwardRef||typeof s=="function"&&!((h=s.prototype)!=null&&h.render)&&s.$$typeof!==d.ForwardRef)};n.supportRef=c;function u(s){return(0,t.isValidElement)(s)&&!(0,f.default)(s)}const v=s=>u(s)&&c(s);n.supportNodeRef=v;const E=s=>{if(s&&u(s)){const R=s;return R.props.propertyIsEnumerable("ref")?R.props.ref:R.ref}return null};n.getNodeRef=E},17039:function(_,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.call=a,n.default=void 0,n.note=f,n.noteOnce=i,n.preMessage=void 0,n.resetWarned=r,n.warning=o,n.warningOnce=l;let e={};const t=[],d=c=>{t.push(c)};n.preMessage=d;function o(c,u){}function f(c,u){}function r(){e={}}function a(c,u,v){!u&&!e[v]&&(c(!1,v),e[v]=!0)}function l(c,u){a(o,c,u)}function i(c,u){a(f,c,u)}l.preMessage=d,l.resetWarned=r,l.noteOnce=i;var m=n.default=l},33147:function(_,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return b}});var d=e(15009),o=e.n(d),f=e(99289),r=e.n(f),a=e(67294),l=e(69945),i=e(27515),m=e(71030),c=e(17039),u=e(54677),v=e(36067),E=e(40150),s=e(94868),R=e(20058),b={"docs-demo-basic-demo-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98471))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37050).Z},react:{type:"NPM",value:"16.14.0"},"../assets/index.less":{type:"FILE",value:e(86834).Z},"../src.tsx":{type:"FILE",value:e(2333).Z},"@rc-component/util":{type:"NPM",value:"1.4.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../assets/index.less":l,"../src.tsx":i,"./utils/observerUtil.ts":u,"./SingleObserver.tsx":v,"./Collection.tsx":E,react:t||(t=e.t(a,2)),"/Users/afc163/Projects/resize-observer/assets/index.less":l,"/Users/afc163/Projects/resize-observer/src/index.tsx":i,"@rc-component/util/lib/Children/toArray":m,"@rc-component/util/lib/warning":c,"/Users/afc163/Projects/resize-observer/src/utils/observerUtil.ts":u,"/Users/afc163/Projects/resize-observer/src/SingleObserver/index.tsx":v,"/Users/afc163/Projects/resize-observer/src/Collection.tsx":E,"@rc-component/util/lib/Dom/findDOMNode":s,"@rc-component/util/lib/ref":R},renderOpts:{compile:function(){var h=r()(o()().mark(function P(){var g,M=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(250).then(e.bind(e,90250));case 2:return p.abrupt("return",(g=p.sent).default.apply(g,M));case 3:case"end":return p.stop()}},P)}));function O(){return h.apply(this,arguments)}return O}()}}}},84711:function(_,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return b}});var d=e(15009),o=e.n(d),f=e(99289),r=e.n(f),a=e(67294),l=e(27515),i=e(69945),m=e(71030),c=e(17039),u=e(54677),v=e(36067),E=e(40150),s=e(94868),R=e(20058),b={"docs-demo-collection-demo-collection":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,5125))})),asset:{type:"BLOCK",id:"docs-demo-collection-demo-collection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21339).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.4.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":i,"./utils/observerUtil.ts":u,"./SingleObserver.tsx":v,"./Collection.tsx":E,react:t||(t=e.t(a,2)),"/Users/afc163/Projects/resize-observer/src/index.tsx":l,"/Users/afc163/Projects/resize-observer/assets/index.less":i,"@rc-component/util/lib/Children/toArray":m,"@rc-component/util/lib/warning":c,"/Users/afc163/Projects/resize-observer/src/utils/observerUtil.ts":u,"/Users/afc163/Projects/resize-observer/src/SingleObserver/index.tsx":v,"/Users/afc163/Projects/resize-observer/src/Collection.tsx":E,"@rc-component/util/lib/Dom/findDOMNode":s,"@rc-component/util/lib/ref":R},renderOpts:{compile:function(){var h=r()(o()().mark(function P(){var g,M=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(250).then(e.bind(e,90250));case 2:return p.abrupt("return",(g=p.sent).default.apply(g,M));case 3:case"end":return p.stop()}},P)}));function O(){return h.apply(this,arguments)}return O}()}}}},94530:function(_,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return b}});var d=e(15009),o=e.n(d),f=e(99289),r=e.n(f),a=e(67294),l=e(27515),i=e(69945),m=e(71030),c=e(17039),u=e(36067),v=e(54677),E=e(40150),s=e(94868),R=e(20058),b={"docs-demo-debug-demo-debug":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,5665))})),asset:{type:"BLOCK",id:"docs-demo-debug-demo-debug",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29425).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.4.0"},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":i,"./SingleObserver.tsx":u,"./utils/observerUtil.ts":v,"./Collection.tsx":E,react:t||(t=e.t(a,2)),"/Users/afc163/Projects/resize-observer/src/index.tsx":l,"/Users/afc163/Projects/resize-observer/assets/index.less":i,"@rc-component/util/lib/Children/toArray":m,"@rc-component/util/lib/warning":c,"/Users/afc163/Projects/resize-observer/src/SingleObserver/index.tsx":u,"/Users/afc163/Projects/resize-observer/src/utils/observerUtil.ts":v,"/Users/afc163/Projects/resize-observer/src/Collection.tsx":E,"@rc-component/util/lib/Dom/findDOMNode":s,"@rc-component/util/lib/ref":R},renderOpts:{compile:function(){var h=r()(o()().mark(function P(){var g,M=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(250).then(e.bind(e,90250));case 2:return p.abrupt("return",(g=p.sent).default.apply(g,M));case 3:case"end":return p.stop()}},P)}));function O(){return h.apply(this,arguments)}return O}()}}}},48194:function(_,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return b}});var d=e(15009),o=e.n(d),f=e(99289),r=e.n(f),a=e(67294),l=e(27515),i=e(69945),m=e(71030),c=e(17039),u=e(36067),v=e(40150),E=e(54677),s=e(94868),R=e(20058),b={"docs-demo-render-props-demo-renderprops":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,295))})),asset:{type:"BLOCK",id:"docs-demo-render-props-demo-renderprops",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19746).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.4.0"},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":i,"./SingleObserver.tsx":u,"./Collection.tsx":v,"./utils/observerUtil.ts":E,react:t||(t=e.t(a,2)),"/Users/afc163/Projects/resize-observer/src/index.tsx":l,"/Users/afc163/Projects/resize-observer/assets/index.less":i,"@rc-component/util/lib/Children/toArray":m,"@rc-component/util/lib/warning":c,"/Users/afc163/Projects/resize-observer/src/SingleObserver/index.tsx":u,"/Users/afc163/Projects/resize-observer/src/Collection.tsx":v,"/Users/afc163/Projects/resize-observer/src/utils/observerUtil.ts":E,"@rc-component/util/lib/Dom/findDOMNode":s,"@rc-component/util/lib/ref":R},renderOpts:{compile:function(){var h=r()(o()().mark(function P(){var g,M=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(250).then(e.bind(e,90250));case 2:return p.abrupt("return",(g=p.sent).default.apply(g,M));case 3:case"end":return p.stop()}},P)}));function O(){return h.apply(this,arguments)}return O}()}}}},11171:function(_,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return d}});var t=e(67294),d={}},40150:function(_,n,e){"use strict";e.r(n),e.d(n,{Collection:function(){return o},CollectionContext:function(){return d}});var t=e(67294),d=t.createContext(null);function o(f){var r=f.children,a=f.onBatchResize,l=t.useRef(0),i=t.useRef([]),m=t.useContext(d),c=t.useCallback(function(u,v,E){l.current+=1;var s=l.current;i.current.push({size:u,element:v,data:E}),Promise.resolve().then(function(){s===l.current&&(a==null||a(i.current),i.current=[])}),m==null||m(u,v,E)},[a,m]);return t.createElement(d.Provider,{value:c},r)}},36067:function(_,n,e){"use strict";e.r(n);var t=e(97857),d=e.n(t),o=e(94868),f=e(20058),r=e(67294),a=e(40150),l=e(54677);function i(c,u){var v=c.children,E=c.disabled,s=r.useRef(null),R=r.useContext(a.CollectionContext),b=typeof v=="function",h=b?v(s):v,O=r.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),P=!b&&r.isValidElement(h)&&(0,f.supportRef)(h),g=P?(0,f.getNodeRef)(h):null,M=(0,f.useComposeRef)(g,s),D=function(){return(0,o.getDOM)(s.current)};r.useImperativeHandle(u,function(){return D()});var p=r.useRef(c);p.current=c;var U=r.useCallback(function(z){var L=p.current,T=L.onResize,S=L.data,j=z.getBoundingClientRect(),y=j.width,x=j.height,C=z.offsetWidth,I=z.offsetHeight,W=Math.floor(y),A=Math.floor(x);if(O.current.width!==W||O.current.height!==A||O.current.offsetWidth!==C||O.current.offsetHeight!==I){var B={width:W,height:A,offsetWidth:C,offsetHeight:I};O.current=B;var N=C===Math.round(y)?y:C,H=I===Math.round(x)?x:I,K=d()(d()({},B),{},{offsetWidth:N,offsetHeight:H});R==null||R(K,z,S),T&&Promise.resolve().then(function(){T(K,z)})}},[]);return r.useEffect(function(){var z=D();return z&&!E&&(0,l.observe)(z,U),function(){return(0,l.unobserve)(z,U)}},[s.current,E]),P?r.cloneElement(h,{ref:M}):h}var m=r.forwardRef(i);n.default=m},27515:function(_,n,e){"use strict";e.r(n),e.d(n,{_rs:function(){return i._rs}});var t=e(67333),d=e.n(t),o=e(67294),f=e(71030),r=e(17039),a=e(36067),l=e(40150),i=e(54677),m="rc-observer-key";function c(v,E){var s=v.children,R=typeof s=="function"?[s]:(0,f.default)(s);return R.map(function(b,h){var O=(b==null?void 0:b.key)||"".concat(m,"-").concat(h);return o.createElement(a.default,d()({},v,{key:O,ref:h===0?E:void 0}),b)})}var u=o.forwardRef(c);u.Collection=l.Collection,n.default=u},54677:function(_,n,e){"use strict";e.r(n),e.d(n,{_el:function(){return r},_rs:function(){return a},observe:function(){return l},unobserve:function(){return i}});var t=new Map;function d(m){m.forEach(function(c){var u,v=c.target;(u=t.get(v))===null||u===void 0||u.forEach(function(E){return E(v)})})}var o;function f(){return o||(o=new ResizeObserver(d)),o}var r=null,a=null;function l(m,c){t.has(m)||(t.set(m,new Set),f().observe(m)),t.get(m).add(c)}function i(m,c){t.has(m)&&(t.get(m).delete(c),t.get(m).size||(f().unobserve(m),t.delete(m)))}},69945:function(_,n,e){"use strict";e.r(n)},55469:function(_,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[]},61298:function(_,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Use ",paraId:0},{value:"ResizeObserver.Collection",paraId:0},{value:" to collect multiple ",paraId:0},{value:"ResizeObserver",paraId:0},{value:" resize event within frame.",paraId:0}]},45041:function(_,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[]},69562:function(_,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[]},51446:function(_,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Resize observer for React.",paraId:1,tocIndex:0},{value:"https://resize-observer-react-component.vercel.app/",paraId:2,tocIndex:1},{value:`import ResizeObserver from 'rc-resize-observer';
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
`,paraId:5,tocIndex:5},{value:"rc-resize-observer is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(_,n){"use strict";n.Z=`@footer-prefix-cls: rc-footer;

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
`},37050:function(_,n){"use strict";n.Z=`import '../assets/index.less';
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
`},21339:function(_,n){"use strict";n.Z=`import '../assets/index.less';
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
`},29425:function(_,n){"use strict";n.Z=`import '../assets/index.less';
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
`},19746:function(_,n){"use strict";n.Z=`import '../assets/index.less';
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
`},76044:function(_,n){"use strict";n.Z=`import * as React from 'react';
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
`},11238:function(_,n){"use strict";n.Z=`import { getDOM } from '@rc-component/util/lib/Dom/findDOMNode';
import { supportRef, useComposeRef, getNodeRef } from '@rc-component/util/lib/ref';
import * as React from 'react';
import type { ResizeObserverProps } from '..';
import { CollectionContext } from '../Collection';
import { observe, unobserve } from '../utils/observerUtil';

export interface SingleObserverProps extends ResizeObserverProps {
  children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}

function SingleObserver(props: SingleObserverProps, ref: React.Ref<HTMLElement>) {
  const { children, disabled } = props;
  const elementRef = React.useRef<Element>(null);

  const onCollectionResize = React.useContext(CollectionContext);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  const sizeRef = React.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? getNodeRef(mergedChildren) : null;

  const mergedRef = useComposeRef(originRef, elementRef);

  const getDomElement = () => {
    return getDOM( elementRef.current ) as HTMLElement
  }
  

  React.useImperativeHandle(ref, () => getDomElement());

  // =========================== Observe ============================
  const propsRef = React.useRef<SingleObserverProps>(props);
  propsRef.current = props;

  // Handler
  const onInternalResize = React.useCallback((target: HTMLElement) => {
    const { onResize, data } = propsRef.current;

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

      // Let collection know what happened
      onCollectionResize?.(sizeInfo, target, data);

      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(() => {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  React.useEffect(() => {
    const currentElement: HTMLElement = getDomElement();

    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }

    return () => unobserve(currentElement, onInternalResize);
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return (
      canRef
        ? React.cloneElement(mergedChildren as any, {
            ref: mergedRef,
          })
        : mergedChildren
  );
}

const RefSingleObserver = React.forwardRef(SingleObserver);

if (process.env.NODE_ENV !== 'production') {
  RefSingleObserver.displayName = 'SingleObserver';
}

export default RefSingleObserver;
`},2333:function(_,n){"use strict";n.Z=`import * as React from 'react';
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
`},57571:function(_,n){"use strict";n.Z=`export type ResizeListener = (element: Element) => void;

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
`},67333:function(_){function n(){return _.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o])}return e},_.exports.__esModule=!0,_.exports.default=_.exports,n.apply(this,arguments)}_.exports=n,_.exports.__esModule=!0,_.exports.default=_.exports}}]);
