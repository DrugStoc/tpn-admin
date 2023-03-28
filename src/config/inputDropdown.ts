const inputDropdown = {
  '.searchResult': {
    bgColor: '#fff',
    top: '3.5rem',
    zIndex: 2,
    h: '300px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    boxShadow: '0 0 10px -5px rgba(0, 0, 0, 1)',
    '.searchBox': {
      width: '100%',
      height: '200px',
      '.searchResultBtw': {
        display: 'flex',
        justifyContent: 'space-between',
        my: '10px',
        mx: '20px',
        bgColor: '#f9f9f9',
        cursor: 'pointer',
        overflowY: 'auto',
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
