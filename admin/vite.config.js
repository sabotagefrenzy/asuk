import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    // Add the proxy configuration here
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Your backend server address
        changeOrigin: true,
      },
    },
  },
});
