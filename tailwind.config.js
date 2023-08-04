/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xs': '200px', // other phone
      'xs': '390px', // iphone 12pro
      'sm': '640px', //
      'md': '820px', // ipad air
      'lg': '1280px', // pc
      'xl': '1440px', // +
      '2xl': '1600px',
      '3xl': '1920px',
    },
  },
  plugins: [],
});
