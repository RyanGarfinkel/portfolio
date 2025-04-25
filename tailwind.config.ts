import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      scale: {
        102: '1.02',
      },
    },
    screens: {
      sm: '375px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  plugins: [],
};

export default config;