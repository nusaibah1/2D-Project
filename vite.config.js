import { defineConfig } from "vite";

export default defineConfig({
    base: '/2D-Project/',
    build: {
        minify: "terser",
    },
});
