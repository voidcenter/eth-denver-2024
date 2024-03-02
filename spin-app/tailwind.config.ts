import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ll-gray": "#fdfbfd",
        "light-gray": "#EAEDF3",
        "common-gray": "#E6E6E6",
        "dark-gray": "#C6CBD5",
        "dd-gray": "#6A75A0",
        "ddd-gray": "#454C69",
        "ll-orange": "#FEF8EE",
        "light-orange": "#F4A368",
        "common-orange": "#FA8926",
        "dark-orange": "#E9511A",
        "common-green": "#57BF15",
        "dark-green": "#43AB01",
      },
      screens: {
        'xs': '480px',
        "md": "890px",
        "lg": "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
