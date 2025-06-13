import { defineConfig } from 'vite';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
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
  ],
});
