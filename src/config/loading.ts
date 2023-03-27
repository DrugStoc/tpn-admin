const loading = {
  '.most-searched-loader': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '5px',
    height: 'calc(100% - 57px)',
    backgroundColor: '#f0f0f0',
    animation: 'loading 1s ease-in-out infinite',
    position: 'absolute',
    top: '55px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
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