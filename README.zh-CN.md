<div align="center">
  <h1>@rc-component/resize-observer</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
  <p>📏 React 尺寸观察组件，用于监听元素大小变化。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/resize-observer"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/resize-observer.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/resize-observer"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/resize-observer.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/resize-observer/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/resize-observer/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/resize-observer"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/resize-observer/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/resize-observer"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/resize-observer?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- 观察单个 React 子项的调整大小变化。
- 当观察到的元素不是直接子元素时支持render props。
- 使用 `ResizeObserver.Collection` 批量处理多个子元素的尺寸变化事件。
- 报告边界框和偏移大小。

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

在线预览：https://resize-observer.react-component.vercel.app/

## 示例

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### ResizeObserver

| 名称       | 类型                                                           | 默认值 | 说明                                                          |
| ---------- | -------------------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| `children` | ReactNode \| `(ref: React.RefObject<Element>) => ReactElement` | -       | 要监听的元素，或接收 observer ref 的渲染函数。 |
| `data`     | any                                                            | -       | 传递给 `ResizeObserver.Collection` 回调的额外数据。       |
| `disabled` | boolean                                                        | false   | 禁用尺寸监听。                                          |
| `onResize` | `(size: SizeInfo, element: HTMLElement) => void`               | -       | 监听元素尺寸变化时触发。                    |

### SizeInfo

| 名称           | 类型   | 说明                                                                        |
| -------------- | ------ | ---------------------------------------------------------------------------------- |
| `height`       | number | 向下取整后的包围盒高度。                                                       |
| `offsetHeight` | number | 元素 offsetHeight；当它与四舍五入后的包围盒高度一致时会被规范化。 |
| `offsetWidth`  | number | 元素 offsetWidth；当它与四舍五入后的包围盒宽度一致时会被规范化。   |
| `width`        | number | 向下取整后的包围盒宽度。                                                        |

### ResizeObserver.Collection

| 名称            | 类型                                 | 默认值 | 说明                                                          |
| --------------- | ------------------------------------ | ------- | -------------------------------------------------------------------- |
| `children`      | ReactNode                            | -       | 要收集的观察器。                                                |
| `onBatchResize` | `(resizeInfo: ResizeInfo[]) => void` | -       | 每个微任务触发一次，并携带收集到的所有子元素 resize 事件。 |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

dumi 站点默认运行在 `http://localhost:8000`。

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/resize-observer 基于 [MIT](./LICENSE) 许可证发布。
