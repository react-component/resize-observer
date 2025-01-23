(self.webpackChunk_rc_component_resize_observer=self.webpackChunk_rc_component_resize_observer||[]).push([[904],{71030:function(m,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=_;var i=s(e(30081)),o=s(e(67294));function s(t){return t&&t.__esModule?t:{default:t}}function _(t,a={}){let d=[];return o.default.Children.forEach(t,l=>{l==null&&!a.keepEmpty||(Array.isArray(l)?d=d.concat(_(l)):(0,i.default)(l)&&l.props?d=d.concat(_(l.props.children,a)):d.push(l))}),d}},94868:function(m,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=o,n.getDOM=i,n.isDOM=e;function e(s){return s instanceof HTMLElement||s instanceof SVGElement}function i(s){return s&&typeof s=="object"&&e(s.nativeElement)?s.nativeElement:e(s)?s:null}function o(s){const _=i(s);if(_)return _;if(s&&typeof s=="object"&&"current"in s){const t=i(s.current);if(t)return t}return null}},30081:function(m,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=s;const e=Symbol.for("react.element"),i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(_){return _&&typeof _=="object"&&(_.$$typeof===e||_.$$typeof===i)&&_.type===o}},94327:function(m,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=_;var i=s(e(67294));function o(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,d=new WeakMap;return(o=function(l){return l?d:a})(t)}function s(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var d=o(a);if(d&&d.has(t))return d.get(t);var l={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(c!=="default"&&Object.prototype.hasOwnProperty.call(t,c)){var v=u?Object.getOwnPropertyDescriptor(t,c):null;v&&(v.get||v.set)?Object.defineProperty(l,c,v):l[c]=t[c]}return l.default=t,d&&d.set(t,l),l}function _(t,a,d){const l=i.useRef({});return(!("value"in l.current)||d(l.current.condition,a))&&(l.current.value=t(),l.current.condition=a),l.current.value}},20058:function(m,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useComposeRef=n.supportRef=n.supportNodeRef=n.getNodeRef=n.fillRef=n.composeRef=void 0;var i=e(67294),o=e(59864),s=t(e(94327)),_=t(e(30081));function t(r){return r&&r.__esModule?r:{default:r}}const a=(r,f)=>{typeof r=="function"?r(f):typeof r=="object"&&r&&"current"in r&&(r.current=f)};n.fillRef=a;const d=(...r)=>{const f=r.filter(Boolean);return f.length<=1?f[0]:b=>{r.forEach(E=>{a(E,b)})}};n.composeRef=d;const l=(...r)=>(0,s.default)(()=>d(...r),r,(f,b)=>f.length!==b.length||f.every((E,h)=>E!==b[h]));n.useComposeRef=l;const u=r=>{var b,E;if(!r)return!1;if(c(r)&&r.props.propertyIsEnumerable("ref"))return!0;const f=(0,o.isMemo)(r)?r.type.type:r.type;return!(typeof f=="function"&&!((b=f.prototype)!=null&&b.render)&&f.$$typeof!==o.ForwardRef||typeof r=="function"&&!((E=r.prototype)!=null&&E.render)&&r.$$typeof!==o.ForwardRef)};n.supportRef=u;function c(r){return(0,i.isValidElement)(r)&&!(0,_.default)(r)}const v=r=>c(r)&&u(r);n.supportNodeRef=v;const p=r=>{if(r&&c(r)){const f=r;return f.props.propertyIsEnumerable("ref")?f.props.ref:f.ref}return null};n.getNodeRef=p},17039:function(m,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.call=a,n.default=void 0,n.note=_,n.noteOnce=l,n.preMessage=void 0,n.resetWarned=t,n.warning=s,n.warningOnce=d;let e={};const i=[],o=c=>{i.push(c)};n.preMessage=o;function s(c,v){}function _(c,v){}function t(){e={}}function a(c,v,p){!v&&!e[p]&&(c(!1,p),e[p]=!0)}function d(c,v){a(s,c,v)}function l(c,v){a(_,c,v)}d.preMessage=o,d.resetWarned=t,d.noteOnce=l;var u=n.default=d},33147:function(m,n,e){"use strict";var i;e.r(n),e.d(n,{demos:function(){return h}});var o=e(15009),s=e.n(o),_=e(99289),t=e.n(_),a=e(67294),d=e(81935),l=e(27515),u=e(69945),c=e(71030),v=e(17039),p=e(54677),r=e(36067),f=e(40150),b=e(94868),E=e(20058),h={"docs-demo-basic-demo-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,34761))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37050).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.2.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":u,"./utils/observerUtil.ts":p,"./SingleObserver.tsx":r,"./Collection.tsx":f,react:i||(i=e.t(a,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":l,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":u,"@rc-component/util/lib/Children/toArray":c,"@rc-component/util/lib/warning":v,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":p,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":r,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":f,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":E},renderOpts:{compile:function(){var O=t()(s()().mark(function P(){var g,M=arguments;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(335).then(e.bind(e,37335));case 2:return R.abrupt("return",(g=R.sent).default.apply(g,M));case 3:case"end":return R.stop()}},P)}));function z(){return O.apply(this,arguments)}return z}()}}}},84711:function(m,n,e){"use strict";var i;e.r(n),e.d(n,{demos:function(){return h}});var o=e(15009),s=e.n(o),_=e(99289),t=e.n(_),a=e(67294),d=e(74289),l=e(27515),u=e(69945),c=e(71030),v=e(17039),p=e(54677),r=e(40150),f=e(36067),b=e(94868),E=e(20058),h={"docs-demo-collection-demo-collection":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,5125))})),asset:{type:"BLOCK",id:"docs-demo-collection-demo-collection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21339).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.2.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":u,"./utils/observerUtil.ts":p,"./Collection.tsx":r,"./SingleObserver.tsx":f,react:i||(i=e.t(a,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":l,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":u,"@rc-component/util/lib/Children/toArray":c,"@rc-component/util/lib/warning":v,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":p,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":r,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":f,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":E},renderOpts:{compile:function(){var O=t()(s()().mark(function P(){var g,M=arguments;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(335).then(e.bind(e,37335));case 2:return R.abrupt("return",(g=R.sent).default.apply(g,M));case 3:case"end":return R.stop()}},P)}));function z(){return O.apply(this,arguments)}return z}()}}}},94530:function(m,n,e){"use strict";var i;e.r(n),e.d(n,{demos:function(){return h}});var o=e(15009),s=e.n(o),_=e(99289),t=e.n(_),a=e(67294),d=e(13249),l=e(69945),u=e(27515),c=e(71030),v=e(17039),p=e(54677),r=e(36067),f=e(40150),b=e(94868),E=e(20058),h={"docs-demo-debug-demo-debug":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,5665))})),asset:{type:"BLOCK",id:"docs-demo-debug-demo-debug",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29425).Z},react:{type:"NPM",value:"16.14.0"},"../assets/index.less":{type:"FILE",value:e(86834).Z},"../src.tsx":{type:"FILE",value:e(2333).Z},"@rc-component/util":{type:"NPM",value:"1.2.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../assets/index.less":l,"../src.tsx":u,"./utils/observerUtil.ts":p,"./SingleObserver.tsx":r,"./Collection.tsx":f,react:i||(i=e.t(a,2)),"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":l,"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":u,"@rc-component/util/lib/Children/toArray":c,"@rc-component/util/lib/warning":v,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":p,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":r,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":f,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":E},renderOpts:{compile:function(){var O=t()(s()().mark(function P(){var g,M=arguments;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(335).then(e.bind(e,37335));case 2:return R.abrupt("return",(g=R.sent).default.apply(g,M));case 3:case"end":return R.stop()}},P)}));function z(){return O.apply(this,arguments)}return z}()}}}},48194:function(m,n,e){"use strict";var i;e.r(n),e.d(n,{demos:function(){return h}});var o=e(15009),s=e.n(o),_=e(99289),t=e.n(_),a=e(67294),d=e(45261),l=e(27515),u=e(69945),c=e(71030),v=e(17039),p=e(54677),r=e(36067),f=e(40150),b=e(94868),E=e(20058),h={"docs-demo-render-props-demo-renderprops":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,295))})),asset:{type:"BLOCK",id:"docs-demo-render-props-demo-renderprops",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19746).Z},react:{type:"NPM",value:"16.14.0"},"../src.tsx":{type:"FILE",value:e(2333).Z},"../assets/index.less":{type:"FILE",value:e(86834).Z},"@rc-component/util":{type:"NPM",value:"1.2.0"},"./utils/observerUtil.ts":{type:"FILE",value:e(57571).Z},"./SingleObserver.tsx":{type:"FILE",value:e(11238).Z},"./Collection.tsx":{type:"FILE",value:e(76044).Z}},entry:"index.tsx"},context:{"../src.tsx":l,"../assets/index.less":u,"./utils/observerUtil.ts":p,"./SingleObserver.tsx":r,"./Collection.tsx":f,react:i||(i=e.t(a,2)),"/Users/jilin/projects/antd/rc-resize-observer/src/index.tsx":l,"/Users/jilin/projects/antd/rc-resize-observer/assets/index.less":u,"@rc-component/util/lib/Children/toArray":c,"@rc-component/util/lib/warning":v,"/Users/jilin/projects/antd/rc-resize-observer/src/utils/observerUtil.ts":p,"/Users/jilin/projects/antd/rc-resize-observer/src/SingleObserver/index.tsx":r,"/Users/jilin/projects/antd/rc-resize-observer/src/Collection.tsx":f,"@rc-component/util/lib/Dom/findDOMNode":b,"@rc-component/util/lib/ref":E},renderOpts:{compile:function(){var O=t()(s()().mark(function P(){var g,M=arguments;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(335).then(e.bind(e,37335));case 2:return R.abrupt("return",(g=R.sent).default.apply(g,M));case 3:case"end":return R.stop()}},P)}));function z(){return O.apply(this,arguments)}return z}()}}}},11171:function(m,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return s}});var i=e(67294),o=e(68537),s={}},40150:function(m,n,e){"use strict";e.r(n),e.d(n,{Collection:function(){return s},CollectionContext:function(){return o}});var i=e(67294),o=i.createContext(null);function s(_){var t=_.children,a=_.onBatchResize,d=i.useRef(0),l=i.useRef([]),u=i.useContext(o),c=i.useCallback(function(v,p,r){d.current+=1;var f=d.current;l.current.push({size:v,element:p,data:r}),Promise.resolve().then(function(){f===d.current&&(a==null||a(l.current),l.current=[])}),u==null||u(v,p,r)},[a,u]);return i.createElement(o.Provider,{value:c},t)}},36067:function(m,n,e){"use strict";e.r(n);var i=e(97857),o=e.n(i),s=e(94868),_=e(20058),t=e(67294),a=e(40150),d=e(54677);function l(c,v){var p=c.children,r=c.disabled,f=t.useRef(null),b=t.useContext(a.CollectionContext),E=typeof p=="function",h=E?p(f):p,O=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),z=!E&&t.isValidElement(h)&&(0,_.supportRef)(h),P=z?(0,_.getNodeRef)(h):null,g=(0,_.useComposeRef)(P,f),M=function(){return(0,s.getDOM)(f.current)};t.useImperativeHandle(v,function(){return M()});var I=t.useRef(c);I.current=c;var R=t.useCallback(function(D){var U=I.current,L=U.onResize,S=U.data,T=D.getBoundingClientRect(),y=T.width,x=T.height,C=D.offsetWidth,j=D.offsetHeight,W=Math.floor(y),A=Math.floor(x);if(O.current.width!==W||O.current.height!==A||O.current.offsetWidth!==C||O.current.offsetHeight!==j){var B={width:W,height:A,offsetWidth:C,offsetHeight:j};O.current=B;var N=C===Math.round(y)?y:C,H=j===Math.round(x)?x:j,K=o()(o()({},B),{},{offsetWidth:N,offsetHeight:H});b==null||b(K,D,S),L&&Promise.resolve().then(function(){L(K,D)})}},[]);return t.useEffect(function(){var D=M();return D&&!r&&(0,d.observe)(D,R),function(){return(0,d.unobserve)(D,R)}},[f.current,r]),z?t.cloneElement(h,{ref:g}):h}var u=t.forwardRef(l);n.default=u},27515:function(m,n,e){"use strict";e.r(n),e.d(n,{_rs:function(){return l._rs}});var i=e(67333),o=e.n(i),s=e(67294),_=e(71030),t=e(17039),a=e(36067),d=e(40150),l=e(54677),u="rc-observer-key";function c(p,r){var f=p.children,b=typeof f=="function"?[f]:(0,_.default)(f);return b.map(function(E,h){var O=(E==null?void 0:E.key)||"".concat(u,"-").concat(h);return s.createElement(a.default,o()({},p,{key:O,ref:h===0?r:void 0}),E)})}var v=s.forwardRef(c);v.Collection=d.Collection,n.default=v},54677:function(m,n,e){"use strict";e.r(n),e.d(n,{_el:function(){return t},_rs:function(){return a},observe:function(){return d},unobserve:function(){return l}});var i=new Map;function o(u){u.forEach(function(c){var v,p=c.target;(v=i.get(p))===null||v===void 0||v.forEach(function(r){return r(p)})})}var s;function _(){return s||(s=new ResizeObserver(o)),s}var t=null,a=null;function d(u,c){i.has(u)||(i.set(u,new Set),_().observe(u)),i.get(u).add(c)}function l(u,c){i.has(u)&&(i.get(u).delete(c),i.get(u).size||(_().unobserve(u),i.delete(u)))}},69945:function(m,n,e){"use strict";e.r(n)},55469:function(m,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});var i=e(81935);const o=[]},61298:function(m,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});var i=e(74289);const o=[{value:"Use ",paraId:0},{value:"ResizeObserver.Collection",paraId:0},{value:" to collect multiple ",paraId:0},{value:"ResizeObserver",paraId:0},{value:" resize event within frame.",paraId:0}]},45041:function(m,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});var i=e(13249);const o=[]},69562:function(m,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});var i=e(45261);const o=[]},51446:function(m,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});var i=e(68537);const o=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Resize observer for React.",paraId:1,tocIndex:0},{value:"https://react-component.github.io/resize-observer/",paraId:2,tocIndex:1},{value:`import ResizeObserver from 'rc-resize-observer';
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
`,paraId:5,tocIndex:5},{value:"rc-resize-observer is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(m,n){"use strict";n.Z=`@footer-prefix-cls: rc-footer;

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
`},37050:function(m,n){"use strict";n.Z=`import '../assets/index.less';
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
`},21339:function(m,n){"use strict";n.Z=`import '../assets/index.less';
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
`},29425:function(m,n){"use strict";n.Z=`import '../assets/index.less';
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
`},19746:function(m,n){"use strict";n.Z=`import '../assets/index.less';
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
`},76044:function(m,n){"use strict";n.Z=`import * as React from 'react';
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
`},11238:function(m,n){"use strict";n.Z=`import { getDOM } from '@rc-component/util/lib/Dom/findDOMNode';
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
`},2333:function(m,n){"use strict";n.Z=`import * as React from 'react';
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
`},57571:function(m,n){"use strict";n.Z=`export type ResizeListener = (element: Element) => void;

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
`},67333:function(m){function n(){return m.exports=n=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},m.exports.__esModule=!0,m.exports.default=m.exports,n.apply(this,arguments)}m.exports=n,m.exports.__esModule=!0,m.exports.default=m.exports}}]);
