import { dBtw, dCenter, dflexCenter } from './general'

const pagination = {
  '.pagination': {
    mt: 'auto',
    mb: 5,
    pos: 'relative',
    ...dBtw,
    fontFamily: 'Quicksand, sans-serif',
    top: 140,
    button: {
      h: '1.875rem',
      w: '1.875rem',
      borderRadius: '50%',
      overflow: 'hidden',
      ...dflexCenter,
    },
    '.active': {
      bgColor: 'brand.50',
    },
    '.inactive': {
      bgColor: '#F2F3F4',
    },
    '.pagination-button': {
      ...dCenter,
      button: {
        mx: '0.3125rem',
        bgColor: '#F2F3F4',
        color: '#7E7E7E;',
        fontWeight: 600,
      },
    },
  },
}

export default pagination
