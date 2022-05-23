module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'require-jsdoc': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'eol-last': 'off',
    'max-len': 'off'
  }
}