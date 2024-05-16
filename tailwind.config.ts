import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'menu-color': '#1E1E1E',
        'txt-menu-color': '#B4B4B4',
      },
    },
  },
  plugins: [],
};
export default config;
