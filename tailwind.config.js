/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d47a1',
          light: '#81d4fa',
          hover: '#0a3880'
        },
        secondary: {
          DEFAULT: '#ffc107',
          hover: '#ffa000'
        },
        success: {
          DEFAULT: '#4caf50',
          hover: '#43a047'
        },
        warning: {
          DEFAULT: '#ff9800',
          hover: '#f57c00'
        },
        accent: {
          DEFAULT: '#ff5252',
          hover: '#ff1744'
        },
        gray: {
          light: '#f5f5f5',
          DEFAULT: '#333333'
        }
      }
    },
  },
  plugins: [],
};