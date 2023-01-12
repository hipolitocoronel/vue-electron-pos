require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-standard/createAliasSetting');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard',
    'eslint-config-prettier',
  ],
  rules: {
    'import/no-unresolved': 'error',
    "vue/multi-word-component-names": 'off'
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
};
