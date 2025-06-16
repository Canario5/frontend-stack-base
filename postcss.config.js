// postcss.config.js
import pxtorom from '@minko-fe/postcss-pxtorem';

export default {
  plugins: [
    pxtorom({
      rootValue: 16,
      propList: ['*'],
      atRules: ['media'],
    }),
  ],
};
