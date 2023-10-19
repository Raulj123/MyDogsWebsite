/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
}

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "valentine", "aqua"],
  },
};

