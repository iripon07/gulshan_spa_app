import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9a392",
        secondary: "#757575",
        grey: "#555",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        prosto: ["var(--font-prosto)", "cursive"],
        handwriting: ['"Monsieur La Doulaise"', "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
