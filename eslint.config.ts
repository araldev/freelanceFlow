import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
  { rules: {
    'react/react-in-jsx-scope': 'off',
    'space-in-parens': ['error', 'never'], // nunca espacio
    'object-curly-spacing': ['error', 'always'], // espacio dentro de llaves
    'indent': ['error', 2],            // <--- 2 espacios
    'quotes': ['error', 'single'], 
    'no-undef': 'warn',
    semi: ['error', 'never'],
    'prefer-const': 'error',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
  }
])
