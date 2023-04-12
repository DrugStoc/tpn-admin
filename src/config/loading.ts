import { dflexCenter } from './general'

const loading = {
  '.most-searched-loader': {
    ...dflexCenter,
    w: '5px',
    h: 'calc(100% - 57px)',
    bgColor: '#f8f8f8',
    animation: 'loading 1s ease-in-out infinite',
    pos: 'absolute',
    top: '65px',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)',
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
