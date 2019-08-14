module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },

  plugins: ['prettier'],
  extends: [
    'prettier',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    // The following rules are just until we finish formatting legacy code.
    'import/no-named-as-default': 'warn',
  },
};
