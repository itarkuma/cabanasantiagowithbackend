import type { Config } from "tailwindcss";

const defaultTheme = require( "tailwindcss/defaultTheme" );
const colors = require( "tailwindcss/colors" );
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        golden: '#d5b23f',
        goldenboy: '#9c814e',
        goldento: '#bc9928',
        goldenf1: '#a5783f',
        goldenf2: '#c5a96e',
        goldenf3: '#a5783f',
        goldenf4: '#9f6f37',
        barra: '#6c5325',
        verdea: '#002d11',
        verdeb: '#003e2f',
        verdeoficial: '#002f15'
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 8s linear infinite',
      },
      maxWidth: {
        '8xl': '1380px', // Personalizando el valor de max-w-8xl
      },
    },
    fontFamily: {
      sans: [ "Inter", ...defaultTheme.fontFamily.sans ],
      stock: [ defaultTheme.fontFamily.sans ],
    },
  },
  plugins: [],
};
export default config;
