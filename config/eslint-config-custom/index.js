module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'plugin:jsx-a11y/strict', 'turbo', 'prettier', 'airbnb', 'plugin:prettier/recommended'],
  plugins: ['jsx-a11y', 'prettier', 'simple-import-sort', 'import'],
  rules: {
    'no-unused-vars': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'warn',
    'prettier/prettier': 0,
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': ['warn'],

    'import/no-extraneous-dependencies': ['warn'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/extensions': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    semi: 0,
  },
  parserOptions: {
    babelOptions: {},
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals:{
    JSX: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
        project: ['**/tsconfig.json'],
      },
    },
  },
}
