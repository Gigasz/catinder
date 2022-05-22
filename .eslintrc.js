module.exports = {
  extends: [
    'airbnb-base',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
  },
  env: {
    jest: true,
  },
  rules: {
    '@typescript-eslint/default-param-last': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/no-array-index-key': 'off',
  },
  globals: {
    fetch: false,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'node_modules/@types'],
        paths: ['./src'],
      },
    },
    'babel-plugin-root-import': {
      rootPathSuffix: 'src',
    },
  },
};
