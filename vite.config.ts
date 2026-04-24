import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  ssr: {
    noExternal: ["framer-motion", "react-helmet-async"],
  },
  build: {
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              react: ["react", "react-dom", "react-router-dom"],
              motion: ["framer-motion"],
              icons: ["lucide-react"],
            },
          },
    },
  },
}));
