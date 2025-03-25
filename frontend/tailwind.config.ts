import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        ibm: "var(--font-ibm)",
        dmsans: "var(--font-dmsans)",
        cardo: "var(--font-cardo)",
        inter: "var(--font-inter)",
        ptSerif: "var(--font-pt-serif)",
      },
    },
  },
  plugins: [],
};

export default config;
