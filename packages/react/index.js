module.exports = {
  extends: [
    'plugin:react/recommended',
    '@litarussell/eslint-config-ts',
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
