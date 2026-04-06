import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        content: "src/content.jsx",
      },
      output: {
        entryFileNames: "content.js",
      },
    },
    outDir: "dist",
  },
});