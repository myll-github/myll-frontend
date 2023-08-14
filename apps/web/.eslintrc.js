module.exports = {
  root: true,
  extends: ['custom', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['@tanstack/query'],
  rules: {
    'no-param-reassign': 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'import/prefer-default-export': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
        project: ['**/tsconfig.json'],
        paths: ['src'],
      },
    },
  },
}
