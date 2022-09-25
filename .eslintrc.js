module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  extends: ['react-app', 'plugin:jsx-a11y/strict'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    semi: [2, 'always'],
    // 'comma-dangle': [2, 'ignore'],
    'space-before-function-paren': 0,
    'multiline-ternary': ['error', 'never'],
  },
};
