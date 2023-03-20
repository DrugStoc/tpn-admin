const table = {
  '.tableSection': {
    position: 'absolute',
    top: '3.375rem',
    '.overflow': {
      overflow: 'auto',
      bgColor: 'brand.600',
      maxH: '41.25rem',
      fontFamily: "fontFamily",
      mb: '5.5rem',
      color: 'brand.750',
      '.productImage': {
        w: '1.5625rem !important',
        h: '1.5625rem !important',
      },
      '&::-webkit-scrollbar': { display: 'none' },
      '.table': {
        pb: '0',
        w: '66.5625rem',
        mx: 'auto',
        borderCollapse: 'collapse',
        thead: {
          tr: {
            borderBottom: '0.0625rem solid #f0f0f0',
            h: '3.75rem',
            th: {
              fontSize: '0.9375rem',
              fontWeight: 500,
              textAlign: 'left',
              px: '0.625rem',
              '&:first-of-type': {
                visibility: 'hidden',
              },
            },
          },
        },
        tbody: {
          tr: {
            borderBottom: '0.0625rem solid #f0f0f0',
            h: '3.75rem',
            '&:last-child': {
              borderBottom: 'none',
            },
            td: {
              fontSize: '0.875rem',
              borderCollapse: 'collapse',
              textAlign: 'left',
              px: '0.625rem',
              '&:first-of-type': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                h: '3.75rem',
              },
              img: {
                w: '1rem',
                h: '1rem',
                cursor: 'pointer',
              },
            },
          },
        },
      },
    },
  },
}

export default table
