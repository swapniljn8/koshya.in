import { defineConfig } from "vite";

export default defineConfig({
  // The custom domain deploys this site from the domain root.
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
