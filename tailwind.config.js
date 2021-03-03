module.exports = {
  darkMode: false,
  corePlugins: {
    container: false,
  },
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './website/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        container: '5%',
      },
      height: {
        xl: '500px',
      },
      animation: {
        left: 'left 0.3s',
        right: 'right 0.3s',
        'modal-right': 'modal-right 0.3s',
        'modal-top': 'modal-top 0.3s',
        'modal-left': 'modal-left 0.3s',
      },
      keyframes: {
        left: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        right: {
          '0%, 100%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        'modal-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        'modal-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },
        'modal-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      modal: 'rgba(0, 0, 0, 0.7)',
      parent: '#eceff1',
      code: '#011627',
      sidenav: 'rgba(0,0,0,0.4)',
    }),
    variants: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderWidth: ['hover'],
      opacity: ['disabled'],
      textColor: ['active'],
      overflow: ['hover'],
    },
  },
  plugins: [],
};
