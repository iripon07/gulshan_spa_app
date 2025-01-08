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
       keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 3s steps(20, end) forwards',
        blink: 'blink 0.5s step-end infinite',
      },
    
    },
  },
  plugins: [],
} satisfies Config;
