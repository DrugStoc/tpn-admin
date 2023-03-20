const filter = {
  '.inputButton': {
    pos: 'absolute',
    top: '-1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.input': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      w: 'full',
      gap: '0.5rem',
      '.inputImg': {
        display: 'flex',
        alignItems: 'center',
        pos: 'relative',
        justifyContent: 'center',
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
