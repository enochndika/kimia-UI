module.exports = {
  darkMode: false,
  purge: [
    './packages/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './website/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        container: '2%',
      },
      animation: {
        left: 'left 0.3s',
        right: 'right 0.3s',
        modal: 'modal 0.3s',
        'drawer-right': 'drawer-right 0.3s',
        'drawer-left': 'drawer-left 0.3s',
        'drawer-top': 'drawer-top 0.3s',
        'drawer-bottom': 'drawer-bottom 0.3s',
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

        modal: {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        'drawer-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },
        'drawer-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },
        'drawer-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        'drawer-bottom': {
          '0%, 100%': { bottom: '-500px' },
          '100%': { bottom: '0' },
        },
      },
      fontFamily: {
        body: ['Inter'],
      },
    },
    variants: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      inset: ['checked'],
      opacity: ['disabled'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
