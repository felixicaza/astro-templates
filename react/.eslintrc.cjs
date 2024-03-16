module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended']
    },
    {
      files: ['**/*.astro/*.ts', '*.astro/*.ts'],
      env: {
        browser: true,
        es2021: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: null
      },
      rules: {
        'prettier/prettier': 'off'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json']
      },
      extends: ['standard-with-typescript'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off'
      }
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        jsx: true,
        project: ['./tsconfig.json']
      },
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended'
      ],
      plugins: ['react', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off'
      }
    }
  ]
}
