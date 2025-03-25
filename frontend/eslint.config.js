import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import stylistic from '@stylistic/eslint-plugin'
import tailwind from "eslint-plugin-tailwindcss"
import tseslint from 'typescript-eslint';
import globals from 'globals';
 
export default tseslint.config(
    eslint.configs.recommended, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked,
    reactPlugin.configs.flat.recommended, reactPlugin.configs.flat['jsx-runtime'], jsxA11y.flatConfigs.recommended,
    ...tailwind.configs["flat/recommended"], ...pluginQuery.configs['flat/recommended'],
    {
        ignores: [
            "eslint.config.js", "tailwind.config.js", "postcss.config.js", "vite.config.ts",
            ".storybook/main.tsx", "./**/*.storybook.ts", "dist", "node_modules"
        ],
    },
    {
        name: 'general',
        files: ['./**/*.(js|ts|jsx|tsx)'],
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.vitest,
                ...globals.builtin,
                NodeJS: true,
                __VERSION__: true,
            },
            ecmaVersion: 2018,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        name: 'defaults',
        rules: {
            'no-else-return': [
                'error',
                {
                    allowElseIf: true,
                },
            ],
            "no-unused-vars": "off",
            'no-param-reassign': 'off',
            'no-console': 'warn',
            'arrow-body-style': 'off',
            'prefer-arrow-callback': 'off',
        },
    },
    {
        name: 'import',
        extends: [
            importPlugin.flatConfigs.recommended,
            importPlugin.flatConfigs.typescript,
        ],
        rules: {
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'import/no-default-export': 'error',
        },
    },
    {
        ...reactRecommended,
        name: 'react',
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            ...reactRecommended.languageOptions,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-pascal-case': 'error',
            'react/jsx-no-script-url': 'error',
            'react/jsx-no-leaked-render': [
                'error',
                {
                    validStrategies: ['ternary'],
                },
            ],
            'react/jsx-max-depth': [
                'error',
                {
                    max: 15,
                },
            ],
            'react/jsx-fragments': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-curly-brace-presence': 'warn',
            'react/jsx-sort-props': 'error',
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ],
            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
            'react/function-component-definition': [
                2,
                {
                    namedComponents: 'arrow-function',
                },
            ],
            'react/destructuring-assignment': [
                'error',
                'always',
                {
                    destructureInSignature: 'always',
                },
            ],
            'react/prefer-stateless-function': 'error',
            'react/button-has-type': 'error',
            'react/no-unused-prop-types': 'error',
            'react/no-children-prop': 'error',
            'react/no-danger': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
            'react/no-typos': 'warn',
            'react/display-name': 'warn',
            'react/self-closing-comp': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/prefer-read-only-props': 'error',
        },
    },
    {
        name: 'react-extra',
        plugins: {
            'react-hooks': pluginReactHooks,
            'react-compiler': reactCompiler,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'off',
            'react-compiler/react-compiler': 'error',
            'jsx-a11y/anchor-is-valid': 'off',
        },
    },
    {
        name: 'typescript',
        rules: {
            '@typescript-eslint/no-misused-promises': 'warn',
             '@typescript-eslint/no-deprecated': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            '@typescript-eslint/no-unnecessary-template-expression': 'warn',
            '@typescript-eslint/unbound-method': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/no-duplicate-type-constituents': 'warn',
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-confusing-void-expression': 'warn',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn',
            '@typescript-eslint/require-await': 'warn',
             '@typescript-eslint/restrict-template-expressions': 'warn',
            '@typescript-eslint/no-base-to-string': 'warn',
            '@typescript-eslint/restrict-plus-operands': 'warn',
            '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
 
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ],
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.vitest,
                NodeJS: true,
                __VERSION__: true,
            },
            ecmaVersion: 2018,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },},
  {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/semi': ["error", "always"],
            '@stylistic/indent': ['error', 'tab', { 'tabLength': 2, 'SwitchCase': 1 }],
            "@stylistic/jsx-indent-props": ['error', 'tab'],
            '@stylistic/quotes': ["error", "single"],
            '@stylistic/comma-dangle': ["error", "always-multiline"],
            '@stylistic/jsx-quotes': ["error", "prefer-single"],
            '@stylistic/array-bracket-newline': ["error", { "multiline": true, "minItems": 4 }],
            "@stylistic/arrow-spacing": "error"
        },
    },
);