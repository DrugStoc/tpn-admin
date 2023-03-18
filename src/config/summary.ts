const summary = {
  '.fillSearch': {
    pos: 'absolute',
    fontFamily: 'fontFamily',
    top: '3.125rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    lineHeight: 2.2,
    color: 'brand.100',
    '.chatSearchProducts': {
      w: '65%',
      maxW: '40.625rem',
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
      h: '10.0625rem',
      w: '31%',
      py: '0.9375rem',
      px: '0.9375rem',
      fontSize: '0.75rem',
      '.title': {
        display: 'flex',
        gap: '0.625rem',
        alignItems: 'center',
        span: {
          fontWeight: 500,
        },
        img: {
          w: '1.25rem',
          h: '1.25rem',
        },
      },
      '.positionHorizontal': {
        display: 'flex',
        justifyContent: 'space-between',
        h: '3.8125rem',
        '.data': {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          h: '4.375rem',
          span: {
            color: 'brand.450',
          },
          img: {
            w: '1rem',
            h: '1rem',
            ml: '0.625rem',
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
          gap: '0.625rem',
          cursor: 'pointer',
          span: {
            color: '#4b70d6',
          },
          img: {
            display: 'flex',
            pos: 'relative',
            bottom: '0.5rem',
          },
        },
      },
    },
  },
}

export default summary
