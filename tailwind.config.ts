import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        mono: ["Monaco", "Consolas", "Liberation Mono", "monospace"],
      },
      colors: {
        primary: {
          500: "#a29bfe",
          600: "#6e66df",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
