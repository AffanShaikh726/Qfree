import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    proxy: {},
    // Handle SPA fallback for all routes
    fs: {
      strict: true
    },
    // This ensures all routes are handled by index.html
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
