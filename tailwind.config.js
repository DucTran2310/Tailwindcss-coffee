const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': 'url("./image/slider-bg.jpeg")',
        'img-mugs1': 'url("./image/pink-coffee.jpg")',
        'img-mugs2': 'url("./image/pink-grown-coffee.jpg")',
        'img-mugs3': 'url("./image/bacsiu.jpg")',
        'img-mugs4': 'url("./image/bar-cup.jpg")',
        'img-mugs5': 'url("./image/black-cup.jpg")',
        'img-mugs6': 'url("./image/ceramic-tea.jpg")',
        'img-mugs7': 'url("./image/espresso-cup.jpg")',
        'img-mugs8': 'url("./image/estensial.jpg")',
        'img-mugs9': 'url("./image/pink-ceramic.jpg")',
        'img-mugs10': 'url("./image/red-cup.jpg")',
        'img-mugs11': 'url("./image/winter-style.jpg")',
        'img-mugs12': 'url("./image/magazine.jpg")',
        'img-mugs13': 'url("./image/cup.jpg")',
        'img-mugs14': 'url("./image/cup-coffee.jpg")',
        'img-mugs15': 'url("./image/parallax.jpg")',
        'img-mugs16': 'url("./image/store1.jpg")',
        'img-mugs17': 'url("./image/store2.jpg")',
        'img-mugs18': 'url("./image/store3.jpg")',
      }
    },
  },
  plugins: [],
}