import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/exports.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  tsconfig: './tsconfig.build.json',
});
