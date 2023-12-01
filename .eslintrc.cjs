module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-essential',
    '@nuxt/eslint-config',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs'],
}
