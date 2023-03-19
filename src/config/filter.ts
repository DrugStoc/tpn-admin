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
        '.cardDropdown': {
          w: '8.125rem',
          h: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          pos: 'relative',
          span: {
            ml: '1.6875rem',
          },
          '.dropdown': {
            pos: 'absolute',
            left: '0',
            top: '3.4375rem',
            bgColor: 'brand.600',
            w: '12.5rem',
            zIndex: '2',
            boxShadow:
              '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
            ul: {
              p: {
                color: 'brand.350',
                p: '0.625rem 0.9375rem',
              },
              li: {
                listStyleType: 'none',
                p: '0.625rem 0.9375rem',
                w: '100%',
                '&:last-child': {
                  borderBottomRightRadius: '0.5rem',
                  borderBottomLeftRadius: '0.5rem',
                },
                '&:hover': {
                  bgColor: '#f9f9f9',
                },
              },
            },
          },
        },
      },
    },
    button: {
      w: 'initial',
    },
  },
}

export default filter
