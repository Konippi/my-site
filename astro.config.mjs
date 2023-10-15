import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${import.meta.env.MODE}` });

export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: Number(process.env.PORT),
    open: true,
  },
});
