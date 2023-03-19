const chart = {
  '.section .firstChart, .section .secondChart': {
    w: '58%',
    borderRadius: '0.75rem',
    bgColor: 'brand.600',
    pos: 'absolute',
    top: '15.3125rem',
    left: '2.875rem',
    h: '21.3125rem',
    overflowY: 'auto',
    boxShadow:
      'rgba(0, 0, 0, 0.04) 0 0.3125rem 1.375rem, rgba(0, 0, 0, 0.03) 0 0 0 0.03125rem',
    '.alignChart': {
      display: 'flex',
      h: '21.25rem',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'auto',
      p: '1rem !important',
    },
  },

  '.section .firstChart': { top: '15.3125rem', marginTop: '6.4375rem' },
  '.section .secondChart': { top: '30.3125rem', marginTop: '15.3125rem' },
  '.section section:last-child': {
    pos: 'absolute',
    top: '43.75rem',
    visibility: 'hidden',
  },
  '.ground': {
    visibility: 'hidden',
  },
}

export default chart
