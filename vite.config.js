import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://sachinmobile.onrender.com/api/",
      "/uploads/": "https://sachinmobile.onrender.com/api",
    },
  },
});
