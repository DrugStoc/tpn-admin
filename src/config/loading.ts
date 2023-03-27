const loading = {
  '.most-searched-loader': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '10px',
    h: 'calc(100% - 57px)',
    bgColor: '#f0f0f0',
    animation: 'loading 1s ease-in-out infinite',
    position: 'absolute',
    top: '55px',
  },

  '@keyframes loading': {
    '0%': {
      transform: 'translateX(0)',
      left: 0,
    },
    '100%': {
      transform: 'translateX(100%)',
      left: '100%',
    },
  },
}

export default loading
