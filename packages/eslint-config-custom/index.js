module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'plugin:jsx-a11y/strict',
    'turbo',
    'prettier',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y', 'prettier', 'simple-import-sort', '@typescript-eslint', 'import'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'warn',
    'prettier/prettier': 0,
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],

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
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
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
