import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['./packages/components/src/index.ts'],
      output: [
        {
          format: 'es',
          dir: './dist/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: './dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        }
      ]
    },
    lib: {
      entry: './packages/components/src/index.ts',
      formats: ['es', 'cjs']
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './packages/components/src',
      outDir: './dist/es'
    })
  ]
})
