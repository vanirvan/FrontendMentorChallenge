// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/challenge/rest-countries-api-with-color-theme-switcher":
      "https://fmc-rest-countries-api-with-color-theme-switcher.pages.dev/",
  },
  integrations: [tailwind(), react()],
});
