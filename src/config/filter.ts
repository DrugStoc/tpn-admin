const filter = {
  '.inputButton': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.input': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      gap: '8px',
      '.inputImg': {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        '::after': {
          position: 'absolute',
          content:
            "url('https://res.cloudinary.com/bizstak/image/upload/v1678569929/filter_crvuek.svg')",
          top: '13px',
          left: '30px',
          cursor: 'pointer',
        },
        '.cardDropdown': {
          width: '130px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          span: {
            marginLeft: '27px',
          },
          '.dropdown': {
            position: 'absolute',
            left: '0',
            top: '55px',
            backgroundColor: '#fff',
            width: '200px',
            zIndex: '2',
            boxShadow:
              'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
            ul: {
              p: {
                color: '#787579',
                padding: '10px 15px',
              },
              li: {
                listStyleType: 'none',
                padding: '10px 15px',
                width: '100%',
                '&:last-child': {
                  borderBottomRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                },
                '&:hover': {
                  backgroundColor: '#f9f9f9',
                },
              },
            },
          },
        },
      },
    },
    button: {
      width: 'initial',
    },
  },
}

export default filter
