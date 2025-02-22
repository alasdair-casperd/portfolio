/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        base: colors.zinc,
        accent: colors.violet,
      },
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};
