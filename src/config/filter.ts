import { dCenter, dflexCenter, horizontalBtw } from './general'

const filter = {
  '.inputButton': {
    pos: 'absolute',
    top: '-1.25rem',
    ...horizontalBtw,
    '.input': {
      justifyContent: 'flex-start',
      ...dCenter,
      w: 'full',
      gap: '0.5rem',
      '.inputImg': {
        ...dflexCenter,
        pos: 'relative',
        '::after': {
          pos: 'absolute',
          content:
            "url('https://res.cloudinary.com/bizstak/image/upload/v1678569929/filter_crvuek.svg')",
          top: '0.8125rem',
          left: '1.875rem',
          cursor: 'pointer',
        },
      },
    },
    button: {
      w: 'initial',
    },
  },
}

export default filter
