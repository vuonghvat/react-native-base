module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['node_modules', 'android', 'ios', 'coverage', '__tests__'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
    'arrow-spacing': 'warn',
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs'],
    camelcase: 'error',
    'default-case': 'error',
    'eol-last': 'warn',
    eqeqeq: 'warn',
    'global-require': 'warn',
    'max-len': ['warn', 120],
    'max-lines': ['warn', 800],
    'max-params': ['warn', 5],
    'newline-before-return': 'warn',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    quotes: ['error', 'double'],
    semi: 'off',
    'arrow-parens': ['warn', 'always'],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
