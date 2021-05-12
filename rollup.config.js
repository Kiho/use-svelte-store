import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';

export default {
  input: 'src/index.ts',
  output: [
    { file: `es6/svelte-store.js`, format: 'es' },
    { file: `cjs/svelte-store.js`, format: 'cjs' },
  ],
  external: [
    'react',
  ],
  plugins: [
    svelte({}),
    resolve(),
    typescript(),
  ],
};
