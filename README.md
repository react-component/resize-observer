<div align="center">
  <h1>@rc-component/resize-observer</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Part of the Ant Design ecosystem.</sub></p>
  <p>📏 React ResizeObserver wrapper with render-prop and batch collection support.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/resize-observer"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/resize-observer.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/resize-observer"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/resize-observer.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/resize-observer/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/resize-observer/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/resize-observer"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/resize-observer/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/resize-observer"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/resize-observer?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>


## Highlights

- Observes resize changes for a single React child.
- Supports render props when the observed element is not the direct child.
- Batches multiple child resize events with `ResizeObserver.Collection`.
- Reports both bounding-box and offset sizes.

## Install

```bash
npm install @rc-component/resize-observer
```

## Usage

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

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

### ResizeObserver

| Name       | Type                                                           | Default | Description                                                          |
| ---------- | -------------------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| `children` | ReactNode \| `(ref: React.RefObject<Element>) => ReactElement` | -       | Element to observe, or a render function receiving the observer ref. |
| `data`     | any                                                            | -       | Extra payload passed to `ResizeObserver.Collection` callbacks.       |
| `disabled` | boolean                                                        | false   | Disable resize observation.                                          |
| `onResize` | `(size: SizeInfo, element: HTMLElement) => void`               | -       | Triggered when the observed element size changes.                    |

### SizeInfo

| Name           | Type   | Description                                                                        |
| -------------- | ------ | ---------------------------------------------------------------------------------- |
| `height`       | number | Floored bounding-box height.                                                       |
| `offsetHeight` | number | Element offset height, normalized when it matches the rounded bounding-box height. |
| `offsetWidth`  | number | Element offset width, normalized when it matches the rounded bounding-box width.   |
| `width`        | number | Floored bounding-box width.                                                        |

### ResizeObserver.Collection

| Name            | Type                                 | Default | Description                                                          |
| --------------- | ------------------------------------ | ------- | -------------------------------------------------------------------- |
| `children`      | ReactNode                            | -       | Observers to collect.                                                |
| `onBatchResize` | `(resizeInfo: ResizeInfo[]) => void` | -       | Triggered once per microtask with all collected child resize events. |

## Development

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

The dumi site runs at `http://localhost:8000` by default.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/resize-observer is released under the [MIT](./LICENSE) license.
