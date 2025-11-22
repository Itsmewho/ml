import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname } from "path";
import react from "@vitejs/plugin-react";

// These lines are for setting up the '@' alias
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    // This lets you write: import Component from "@/components/MyComponent"
    // instead of: import Component from "./src/components/MyComponent"
    alias: {
      "@": `${__dirname}/src`,
    },
  },
  server: {
    port: 5500,
    proxy: {
      // It forwards any request to "/api/..." to your backend
      "/api": "http://127.0.0.1:5000",
    },
  },
});
