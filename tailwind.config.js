/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'breathe-mid': 'breathe_mid 10s ease-in-out infinite',
        'breathe-lg': 'breathe_lg 8s ease-in-out infinite',
      },
      keyframes: {
        breathe_mid: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.20)' },
        },
        breathe_lg: {
          '0%, 100%': { transform: 'scale(1.8)' },
          '50%': { transform: 'scale(2.0)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'Ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
};
