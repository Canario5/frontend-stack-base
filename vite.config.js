import { defineConfig } from 'vite';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import PluginCritical from 'rollup-plugin-critical';

export default defineConfig({
  base: '/',
  plugins: [
    VitePluginSvgSpritemap('src/assets/svg/*.svg', {
      styles: {
        filename: 'src/styles/spritemap.scss',
        lang: 'scss',
      },
      svgo: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // Convert colors to currentColor for CSS styling
                convertColors: {
                  currentColor: true,
                },
                removeViewBox: false,

                cleanupIds: {
                  preservePrefixes: ['sprite-'],
                },
              },
            },
          },
          // Additional plugins can be added here
          'removeDimensions',
          {
            name: 'removeStyleElement',
          },
        ],
      },
    }),
    PluginCritical({
      criticalUrl: './dist/', //? [criticalUrl] + [criticalPages] = which file to input (can be live url "https://site.com/")
      criticalBase: './dist/', //? [criticalBase] + [criticalPages] = which file to output
      criticalPages: [
        {
          uri: 'index.html',
          template: 'index', //!important for noninlined files, its prefix; index_critical.css, about-page_critical.css etc.
        },
      ],
      criticalConfig: {
        inline: true,
        extract: false,
        dimensions: [
          { width: 375, height: 667 },
          { width: 1367, height: 720 },
        ],
      },
    }),
  ],
});
