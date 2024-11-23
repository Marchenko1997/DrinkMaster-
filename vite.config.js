import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [
    svgr(), 
    react(),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/drink-code-frontend",
});
