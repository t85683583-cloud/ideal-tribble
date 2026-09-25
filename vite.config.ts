import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  root: "client",
  base: process.env.GITHUB_ACTIONS ? "/ideal-tribble/" : "/",
  plugins: [react()],
  server: { host: true, allowedHosts: true },
  resolve: { alias: { "@": path.resolve(__dirname, "./client/src") } },
  build: { outDir: "../dist", emptyOutDir: true },
});
