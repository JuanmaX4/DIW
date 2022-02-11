module.exports = {
  variants: {
    extend: {
        animation: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        symbols: ['WebSymbolsRegular'],
        bebas: ['BebasNeue'],
      },
      animation: {
        'barrita': 'barrita 3s linear'
      },
      keyframes: {
        barrita: { 
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.6) rotate(10deg)'}                  
        },
      }
    }
  }
}