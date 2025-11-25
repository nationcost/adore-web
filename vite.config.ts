import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    // Maximum memory optimization - use terser instead of esbuild to avoid WASM
    minify: 'terser',
    target: 'es2015',
    cssCodeSplit: false,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
      maxParallelFileOps: 2,
    },
    // Reduce concurrent operations
    reportCompressedSize: false,
    // Smaller chunk size
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        passes: 1,
      },
    },
  },
  esbuild: false,
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});