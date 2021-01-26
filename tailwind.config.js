const colors =  require("tailwindcss/colors")

module.exports = {
  purge: ["src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      teal: colors.teal,
      orange: colors.orange
    },
  },
  variants: {},
  plugins: [],
}
