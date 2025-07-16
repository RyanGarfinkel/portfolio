import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Gradient classes for projects
    'from-green-400', 'to-blue-500',
    'from-yellow-400', 'to-orange-500', 
    'from-blue-400', 'to-purple-500',
    'from-purple-400', 'to-pink-500',
    'from-indigo-400', 'to-cyan-500',
    // Ensure bg-gradient-to-r is included
    'bg-gradient-to-r'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    screens: {
      sm: '375px',
      md: '750px',
      lg: '1024px',
    }
  },
  plugins: [],
};
export default config;
