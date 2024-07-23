import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactFastRefresh from 'eslint-plugin-react-refresh';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
                ...globals.node,
                ...globals.jest,
                expect: true,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        ignores: ['dist/', 'coverage/'],
    },
    {
        plugins: {
            prettier: eslintPluginPrettier,
            pluginReact,
            pluginReactHooks,
            reactFastRefresh,
            jestPlugin,
        },
        rules: {
            'no-undef': 'error',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
            'no-trailing-spaces': 'error',
            'no-console': 'error',
            'pluginReactHooks/rules-of-hooks': 'error',
            'pluginReactHooks/exhaustive-deps': 'warn',
            'reactFastRefresh/only-export-components': 'error',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'jsx-quotes': ['error', 'prefer-double'],
        },
    },
];
