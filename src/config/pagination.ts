const pagination = {
  '.pagination': {
    mt: 'auto',
    pos: 'relative',
    bottom: 'calc(-4.75rem + -22px)',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Quicksand, sans-serif',

    button: {
      h: '30px',
      w: '30px',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.active': {
      bgColor: 'brand.50',
    },
    '.inactive': {
      bgColor: '#F2F3F4',
    },
    '.pagination-button': {
      display: 'flex',
      alignItems: 'center',
      button: {
        mx: '5px',
        bgColor: '#F2F3F4',
        color: '#7E7E7E;',
        fontWeight: 600,
      },
    },
  },
}

export default pagination
