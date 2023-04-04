import { dflexCenter } from './general'

const customerDetails = {
  '.customerNav': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: '-35px',
    '.customerLinks': {
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
      gap: 20,
      fontSize: '14px',
    },
    '.customerPrint': {
      ...dflexCenter,
      gap: '8px',
      width: '15%',
      fontSize: '14px',
      height: '33px',
      position: 'relative',
      bottom: '7px',
      cursor: 'pointer',
    },
  },
  '@media print': {
    '@page': {
      size: 'landscape',
    },
  },

  '.print-table': {
    width: '100%',
  },
}

export default customerDetails
