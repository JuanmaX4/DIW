module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      symbols: ['WebSymbolsRegular'],
      bebas: ['BebasNeue'],
    },
      extend: {},
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}