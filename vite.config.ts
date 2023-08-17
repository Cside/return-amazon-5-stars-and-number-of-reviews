import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vitest/config";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [crx({ manifest })],
  test: {
    globals: true,
  },
});
