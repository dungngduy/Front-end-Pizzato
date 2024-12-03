/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      pulseRing: 'pulseRing 1.5s infinite',
    },
    keyframes: {
      pulseRing: {
        '0%': {
          transform: 'scale(0.8)',
          opacity: '0.5',
        },
        '70%': {
          transform: 'scale(2.5)',
          opacity: '0',
        },
        '100%': {
          transform: 'scale(3)',
          opacity: '0',
        },
      },
    },
  },
};
export const plugins = [];