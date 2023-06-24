/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fadeIn': {
          '0%, 100%': {opacity: '0'},
          '50%': {opacity: '0.5'},
        }
      },

      animation : {
        'fadeIn' : 'fadeIn 6s ease-in'
      }

    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "emerald"]
  }
}

