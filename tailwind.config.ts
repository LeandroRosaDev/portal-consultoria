import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'menu-color': '#101010', //cor do fundo
        'txt-menu-color': '#B4B4B4', //cor txt menu
        'blue-color-text': '#262A41', //cor text dentro(parte branca)
      },
    },
  },
  plugins: [],
};
export default config;
