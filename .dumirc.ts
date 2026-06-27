import { defineConfig } from 'dumi';
import path from 'path';

const basePath = process.env.GH_PAGES ? '/resize-observer/' : '/';
const publicPath = basePath;

export default defineConfig({
  alias: {
    '@rc-component/resize-observer$': path.resolve('src'),
    '@rc-component/resize-observer/es': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'ResizeObserver',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: 'docs-dist',
  base: basePath,
  publicPath,
  styles: [
    `
      section.dumi-default-header-left  {
        width: 230px;
      }
      .markdown table {
        width: auto !important;
      }
    `,
  ],
});
