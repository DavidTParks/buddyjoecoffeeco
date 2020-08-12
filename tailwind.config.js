/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00A5CE",
          200: "#00A5CE",
          300: "#00A5CE",
          400: "#00A5CE",
          500: "#00A5CE",
          600: "#00A5CE",
          700: "#00A5CE",
          800: "#00A5CE"
        },
        secondary: {
          100: "#FECD00",
          200: "#FECD00",
          300: "#FECD00",
          400: "#FECD00",
          500: "#FECD00",
          600: "#FECD00",
          700: "#FECD00",
          800: "#FECD00"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'node_modules/aos/dist/aos.css'
    ]
  }
};
