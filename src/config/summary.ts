const summary = {
  '.fillSearch': {
    pos: 'absolute',
    fontFamily: 'fontFamily',
    top: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    lineHeight: 2.2,
    color: 'brand.100',
    '.chatSearchProducts': {
      w: '65%',
      maxW: '650px',
      flexWrap: 'wrap',
      display: 'flex',
      justifyContent: 'space-between',
    },
    '.positionVertical': {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      bgColor: 'brand.600',
      h: '161px',
      w: '31%',
      py: '15px',
      px: '15px',
      fontSize: '0.75rem',
      '.title': {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        span: {
          fontWeight: 500,
        },
        img: {
          w: '20px',
          h: '20px',
        },
      },
      '.positionHorizontal': {
        display: 'flex',
        justifyContent: 'space-between',
        h: '61px',
        '.data': {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          h: '70px',
          span: {
            color: 'brand.450',
          },
          img: {
            w: '16px',
            h: '16px',
            ml: '10px',
          },
          h2: {
            fontSize: '1.25rem',
            fontWeight: 600,
            m: '0',
          },
          '.trends': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
        '.view': {
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          cursor: 'pointer',
          span: {
            color: '#4b70d6',
          },
          img: {
            display: 'flex',
            pos: 'relative',
            bottom: '8px',
          },
        },
      },
    },
  },
}

export default summary
