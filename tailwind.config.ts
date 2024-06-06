import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'menu-color': '#101010', //cor do fundo
        'txt-menu-color': '#B4B4B4', //cor txt menu
        'blue-color-text': '#262A41', //cor text dentro(parte branca)
        'card-color': '#F2F5F9', //cor background card
      },
      boxShadow: {
        card: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        cardHover: '10px 10px 5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
