import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        500: "#a29bfe",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
