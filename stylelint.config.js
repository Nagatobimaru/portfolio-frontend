module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
    'no-descending-specificity': null,
    'property-no-unknown': [true, {ignoreProperties: ['/^SoquraColor/']}],
    'scss/dollar-variable-empty-line-before': null,
    'selector-class-pattern': null,
    'media-query-no-invalid': null,
  },
};
