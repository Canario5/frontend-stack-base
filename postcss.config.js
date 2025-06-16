// postcss.config.js
import pxtorom from '@minko-fe/postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import combineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

export default {
  plugins: [
    pxtorom({
      rootValue: 16,
      propList: ['*'],
      atRules: ['media'],
    }),
    autoprefixer(),
    combineDuplicatedSelectors(),
    purgeCSSPlugin({
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,html}'],
      safelist: {
        standard: [/^important-/, 'always-keep-this-class'],
      },
      variables: true,
    }),
    cssnano({
      preset: 'default',
    }),
  ],
};
