import { defineConfig, loadEnv} from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint'

const IS_PRODUCTION = process.env.NODE_ENV === "production";

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      }),
    ],
    server: {
      host: true,
      port: 8080,
      proxy: {}
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "*": resolve("")
      }
    },
    base: IS_PRODUCTION ? "/zerotouch" :   "./", 
    define: {
      "process.env": {}
    },
    build: {
      outDir: resolve(__dirname, "dist")
    }
  });
