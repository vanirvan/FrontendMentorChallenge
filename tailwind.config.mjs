/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'difficulty': {
          1: "#6abecd",
          2: "#aad742",
          3: "#f1b604",
          4: "#f48925",
          5: "#ed2c49",
        }
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "barlow": ["Barlow", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
