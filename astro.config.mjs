// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    // redirecting challenges outside of this repository
    // usually because it's requiring complex library that would conflict with current repo
    // yeah, it's skill issue
    "/challenge/rest-countries-api-with-color-theme-switcher":
      "https://fmc-rest-countries-api-with-color-theme-switcher.pages.dev/",
    "/challenge/calculator-app": "https://fmc-calculator-app.pages.dev/",
  },
  integrations: [tailwind(), react()],
});
