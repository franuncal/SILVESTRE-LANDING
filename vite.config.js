/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // esto activa las funciones globales
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
