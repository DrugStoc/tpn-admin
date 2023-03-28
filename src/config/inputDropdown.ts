const inputDropdown = {
  '.searchResult': {
    bgColor: '#fff',
    zIndex: 2,
    h: '300px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    boxShadow: '0 0 10px -5px rgba(0, 0, 0, 1)',
    fontFamily: 'fontFamily',
    '.searchBox': {
      width: '100%',
      height: '200px',
      '.searchResultBtw': {
        display: 'flex',
        justifyContent: 'space-between',
        my: '20px',
        mx: '20px',
        bgColor: '#f9f9f9',
        cursor: 'pointer',
        overflowY: 'auto',
        height: '200px',
        '&:hover': {
          bgColor: '#f0f0f0',
        },
        img: {
          w: '25%',
          padding: '20px',
          bgColor: '#fff',
          mx: '20px',
          my: '20px',
        },
        '.text': {
          w: '100%',
          my: '10px',
          mr: '20px',
          h3: {
            fontWeight: 600,
            fontSize: '1.06rem',
          },
        },
      },
    },
  },
}

export default inputDropdown
