const filter = {
  '.inputButton': {
    pos: 'absolute',
    top: '-20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.input': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      w: 'full',
      gap: '8px',
      '.inputImg': {
        display: 'flex',
        alignItems: 'center',
        pos: 'relative',
        justifyContent: 'center',
        '::after': {
          pos: 'absolute',
          content:
            "url('https://res.cloudinary.com/bizstak/image/upload/v1678569929/filter_crvuek.svg')",
          top: '13px',
          left: '30px',
          cursor: 'pointer',
        },
        '.cardDropdown': {
          w: '130px',
          h: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          pos: 'relative',
          span: {
            ml: '27px',
          },
          '.dropdown': {
            pos: 'absolute',
            left: '0',
            top: '55px',
            bgColor: 'brand.600',
            w: '200px',
            zIndex: '2',
            boxShadow:
              'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
            ul: {
              p: {
                color: 'brand.350',
                p: '10px 15px',
              },
              li: {
                listStyleType: 'none',
                p: '10px 15px',
                w: '100%',
                '&:last-child': {
                  borderBottomRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
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
