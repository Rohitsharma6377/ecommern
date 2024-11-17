import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests
      "/api": {
        target: "https://sachinmobile.onrender.com",
        changeOrigin: true,
        secure: true, // Set to false if using self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      // Proxy Uploads
      "/uploads": {
        target: "https://sachinmobile.onrender.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/uploads/, "/uploads"),
      },
    },
  },
});
