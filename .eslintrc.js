module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // 'no-console': 'warn', // Uncomment to enable
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // ignorePatterns: [
  //   'node_modules/',
  //   '.next/',
  //   'src/types/',
  //   'src/interfaces/',
  //   'src/components/',
  //   'src/helpers/',
  //   'src/hooks/',
  //   'src/pages/',
  //   'src/icons/',
  // ],
};
