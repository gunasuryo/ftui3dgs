import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "index.html"
    }
  },
  resolve: {
    alias: {
      "gaussian-splats-3d": "./lib/gaussian-splats-3d.module.js"
    }
  }
});
