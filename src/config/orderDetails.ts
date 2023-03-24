const orderDetails = {
  '.cardBody': {
    '.orderDetails': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 50,
      '.ownerHeader': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        h1: {
          span: { fontSize: '1rem', color: '#787579' },
        },
      },
    },
    '.ownerIdentity': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '.ownerId': {
        color: '#787579',
        span: { color: '#1F1C19' },
      },
    },
    '.liner': {
      borderBottom: '1px solid #E6E1E5',
      marginBlock: '20px',
    },
    '.row': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'center',
      gap: '20px',
      '.rowBtw': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '.rowFirst': {
          display: 'flex',
          justifyContent: 'space-between',
          width: '65%',
          alignItems: 'center',
          img: {
            backgroundColor: '#f9f9ff',
            marginRight: '20px',
            height: 116,
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
              marginBlock: '5px',
              fontSize: 14,
              color: '#484649',
            },
            '.productComposition': {
              fontSize: 16,
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
  '.rowAmount': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.amount': { color: '#939094', fontWeight: 500 },
    '.sum': { fontWeight: 700 },
  },
}

export default orderDetails
