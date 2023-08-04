module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 2023,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ['react', '@babel', '@typescript-eslint', 'react-hooks', 'unicorn'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/consistent-type-imports': [2, { disallowTypeAnnotations: false }],
      },
    },
    {
      files: ['**/*.json'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
  rules: {
    'compat/compat': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'react/jsx-no-useless-fragment': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    "key-spacing": ["error", { "afterColon": true }],
    'import/no-extraneous-dependencies': 0,
    'comma-spacing': ['error', { before: false, after: true }],
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'no-var': 2,
    'semi': ['error', 'always'],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 2,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0, // TODO: remove later
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0, // Should not check test file
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 0,
    'import/extensions': 0,
    'import/no-cycle': 2,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,

    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 0,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,

    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'jest/no-done-callback': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,
    'jest/no-standalone-expect': 0,

    'unicorn/better-regex': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/expiring-todo-comments': 2,
    'unicorn/no-abusive-eslint-disable': 0,

    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
    'no-undef': 0,
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'indent': ['error', 2],
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
  },
  globals: {
    gtag: true,
  },
};