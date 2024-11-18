import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FA6036",
        },
        place: {
          brigit: "#24956A",
          bulletproof: "#45C1FF",
          prokur: "#2584C6",
          jouzu: "#F3D539",
          journez: "#ED7373",
          regauto: "#488D23",
        },
      },
      fontFamily: {
        sans: ["Manrope"],
      },
    },
  },
  plugins: [],
} satisfies Config;
