// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    // 'plugin:vue/base', // or 'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    // 'no-multi-assign': 0,

    // 'global-require': 0,
    // 'import/no-unresolved': 0,
    // 'no-param-reassign': 0,
    // 'no-shadow': 0,
    // 'import/extensions': 0,
    // 'import/newline-after-import': 0,
    // // added
    // "import/no-extraneous-dependencies": 0,
    // "no-plusplus": 0,
  }
}
