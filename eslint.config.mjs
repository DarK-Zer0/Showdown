// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// noinspection JSUnusedGlobalSymbols
export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': {
          'max': 3
        },
        'multiline': {
          'max': 4
        }
      }
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'semi': [
      'error',
      'always'
    ]
  }
});
