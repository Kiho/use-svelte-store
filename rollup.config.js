import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';

export default {
  input: 'src/index.ts',
  output: [
    { file: `dist/svelte-store.js`, format: 'es' },
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
