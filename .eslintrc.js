module.exports = {
  extends: [
    'erb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error', // Prettier 포맷과 다른 경우 오류 표시
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
