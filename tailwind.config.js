import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        pacificoReg: ["Pacifico", "cursive"],
        playwriteBold: ["Playwrite NZ", "cursive"],
        dancing: ["Dancing Script", "cursive"]
      },
      colors: {
        myblack: ['#374151'],
        mygreen: ['#b3db61']
      }
    },
  },
  plugins: [
    daisyui,
    flowbite
  ],
};
