const orderDetails = {
  '.cardBody': {
    '.orderDetails': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '.ownerHeader': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        h1: {
          span: { fontSize: '1rem', color: '#787579' },
        },
      },
    },
    '.ownerIdentity': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      mt: 4,
      '.ownerId': {
        color: '#787579',
        span: { color: '#1F1C19' },
      },
    },
    '.liner': {
      borderBottom: '0.0625rem solid #E6E1E5',
      marginBlock: '1.25rem',
    },
    '.overflow': {
      maxHeight: 600,
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '.row': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'center',
        gap: '1.25rem',
        '.rowBtw': {
          display: 'flex',
          justifyContent: 'space-between',
          '.rowFirst': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            alignItems: 'center',
            img: {
              backgroundColor: '#f9f9ff',
              marginRight: '1.25rem',
              height: 116,
              width: '25%',
            },
            '.productDetail': {
              display: 'flex',
              flexDirection: 'column',
              height: 116,
              overflow: 'auto',
              justifyContent: 'space-between',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              h3: {
                fontSize: 20,
              },
              '.productDescription': {
                marginBlock: '0.3125rem',
                fontSize: 12,
                color: '#484649',
              },
              '.productComposition': {
                fontSize: 14,
                color: '#484649',
                fontWeight: 500,
              },
            },
          },
          '.rowPrice': {
            fontWeight: 600,
          },
        },
      },
    },
  },
  '.rowAmount': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.amount': { color: '#939094', fontWeight: 500 },
    '.sum': { fontWeight: 700 },
  },
}

export default orderDetails
