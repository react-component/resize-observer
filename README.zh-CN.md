<div align="center">
  <h1>@rc-component/resize-observer</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>📐 React 尺寸观察组件，用于监听元素大小变化。</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/resize-observer"><img src="https://img.shields.io/npm/v/@rc-component/resize-observer.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/resize-observer"><img src="https://img.shields.io/npm/dm/@rc-component/resize-observer.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/resize-observer/actions"><img src="https://github.com/react-component/resize-observer/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/resize-observer"><img src="https://img.shields.io/codecov/c/github/react-component/resize-observer/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/resize-observer"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/resize-observer" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- Observes resize changes for a single React child.
- 支持 render props when the observed element is not the direct child.
- Batches multiple child resize events with `ResizeObserver.Collection`.
- Reports both bounding-box and offset sizes.

## 安装

```bash
npm install @rc-component/resize-observer
```

## 使用

```tsx pure
import ResizeObserver from '@rc-component/resize-observer';

export default () => (
  <ResizeObserver
    onResize={(size, element) => {
      console.log(size.width, size.height, element);
    }}
  >
    <textarea />
  </ResizeObserver>
);
```

```tsx pure
import ResizeObserver from '@rc-component/resize-observer';

export default () => (
  <ResizeObserver.Collection
    onBatchResize={infoList => {
      console.log(infoList.map(({ data, size }) => [data, size.width]));
    }}
  >
    <ResizeObserver data="left">
      <div>Left</div>
    </ResizeObserver>
    <ResizeObserver data="right">
      <div>Right</div>
    </ResizeObserver>
  </ResizeObserver.Collection>
);
```

Online preview: https://resize-observer.react-component.vercel.app/

## API

### ResizeObserver

| 名称       | 类型                                                           | 默认值 | 说明                                                          |
| ---------- | -------------------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| `children` | ReactNode \| `(ref: React.RefObject<Element>) => ReactElement` | -       | Element to observe, or a render function receiving the observer ref. |
| `data`     | any                                                            | -       | Extra payload passed to `ResizeObserver.Collection` callbacks.       |
| `disabled` | boolean                                                        | false   | Disable resize observation.                                          |
| `onResize` | `(size: SizeInfo, element: HTMLElement) => void`               | -       | Triggered when the observed element size changes.                    |

### SizeInfo

| 名称           | 类型   | 说明                                                                        |
| -------------- | ------ | ---------------------------------------------------------------------------------- |
| `height`       | number | Floored bounding-box height.                                                       |
| `offsetHeight` | number | Element offset height, normalized when it matches the rounded bounding-box height. |
| `offsetWidth`  | number | Element offset width, normalized when it matches the rounded bounding-box width.   |
| `width`        | number | Floored bounding-box width.                                                        |

### ResizeObserver.Collection

| 名称            | 类型                                 | 默认值 | 说明                                                          |
| --------------- | ------------------------------------ | ------- | -------------------------------------------------------------------- |
| `children`      | ReactNode                            | -       | Observers to collect.                                                |
| `onBatchResize` | `(resizeInfo: ResizeInfo[]) => void` | -       | Triggered once per microtask with all collected child resize events. |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/resize-observer is released under the [MIT](./LICENSE.md) license.
