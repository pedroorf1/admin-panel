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
        background: "var(--background)",
        foreground: "var(--foreground)",
        basebgcolor: "var(--basebgcolor)",
        basefontcolor: "var(--basefontcolor)",
        midwaybasecolor: "var(--midwaybasecolor)",
        baseTitlefontcolor: "var(--baseTitlefontcolor)",
        secondaryBgcolor: "var(--secondaryBgcolor)",
        secondaryLightBgcolor: "var(--secondaryLightBgcolor)",
        errorFontcolor:"#FF1493"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      backgroundImage: {
        'Vector-2svg': "url('/img/Vector-2.svg')",
        'Vector-2png': "url('/img/Vector-2.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
