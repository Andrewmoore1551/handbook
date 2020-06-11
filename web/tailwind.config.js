const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    options: {
      // These are used by the markdown autolink-headers
      whitelist: ['group', 'float-right', 'invisible', 'group-hover'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
}
