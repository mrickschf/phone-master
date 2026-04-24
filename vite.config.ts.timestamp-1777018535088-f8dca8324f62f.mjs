// vite.config.ts
import { defineConfig } from "file:///sessions/cool-loving-mendel/mnt/Phone%20Master%20site/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/cool-loving-mendel/mnt/Phone%20Master%20site/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  ssr: {
    noExternal: ["framer-motion", "react-helmet-async"]
  },
  build: {
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"]
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvY29vbC1sb3ZpbmctbWVuZGVsL21udC9QaG9uZSBNYXN0ZXIgc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2Nvb2wtbG92aW5nLW1lbmRlbC9tbnQvUGhvbmUgTWFzdGVyIHNpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL2Nvb2wtbG92aW5nLW1lbmRlbC9tbnQvUGhvbmUlMjBNYXN0ZXIlMjBzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGlzU3NyQnVpbGQgfSkgPT4gKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbXCJsdWNpZGUtcmVhY3RcIl0sXG4gIH0sXG4gIHNzcjoge1xuICAgIG5vRXh0ZXJuYWw6IFtcImZyYW1lci1tb3Rpb25cIiwgXCJyZWFjdC1oZWxtZXQtYXN5bmNcIl0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDogaXNTc3JCdWlsZFxuICAgICAgICA/IHt9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgICAgIHJlYWN0OiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0LXJvdXRlci1kb21cIl0sXG4gICAgICAgICAgICAgIG1vdGlvbjogW1wiZnJhbWVyLW1vdGlvblwiXSxcbiAgICAgICAgICAgICAgaWNvbnM6IFtcImx1Y2lkZS1yZWFjdFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VSxTQUFTLG9CQUFvQjtBQUN6VyxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxXQUFXLE9BQU87QUFBQSxFQUMvQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsWUFBWSxDQUFDLGlCQUFpQixvQkFBb0I7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUSxhQUNKLENBQUMsSUFDRDtBQUFBLFFBQ0UsY0FBYztBQUFBLFVBQ1osT0FBTyxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxVQUNoRCxRQUFRLENBQUMsZUFBZTtBQUFBLFVBQ3hCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDTjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
