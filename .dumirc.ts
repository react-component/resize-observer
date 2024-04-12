import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'resize-observer',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
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
