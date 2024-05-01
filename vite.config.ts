import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "rts-library",
      fileName: "rts-library",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        //  "tailwindcss"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          // tailwindcss: "tailwindcss",
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
});
