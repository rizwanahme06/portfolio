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
        sitePrimaryColor: "#0F172A",
        siteSecondaryColor: "#3C4D93",
        siteText:'#f2f2f2'
      },
    },
  },
  plugins: [],
} satisfies Config;
