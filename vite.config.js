import { defineConfig } from "vite";

export default defineConfig({
  // The custom domain deploys this site from the domain root.
  base: "/koshya.in/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
