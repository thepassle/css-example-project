import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { polyfillsLoader } from '@web/rollup-plugin-polyfills-loader';
import css from 'rollup-plugin-native-css-modules';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    html({ input: 'index.html' }),

    polyfillsLoader({
      polyfills: {
        esModuleShims: 'always',
        constructibleStylesheets: true
      },
      modernOutput: {
        name: 'modern',
        type: 'module-shim',
      },
    }),

    nodeResolve(),

    css()
  ]
}