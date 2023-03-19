const table = {
  '.tableSection': {
    position: 'absolute',
    top: '3.375rem',
    '.overflow': {
      overflow: 'auto',
      backgroundColor: 'brand.600',
      maxHeight: '41.25rem',
      fontFamily: "'Be Vietnam Pro', sans-serif",
      marginBottom: '3.125rem',
      color: 'brand.750',
      '.productImage': {
        width: '1.5625rem !important',
        height: '1.5625rem !important',
      },
      '&::-webkit-scrollbar': { display: 'none' },
      '.table': {
        paddingBottom: '0',
        width: '66.5625rem',
        marginInline: 'auto',
        borderCollapse: 'collapse',
        thead: {
          tr: {
            borderBottom: '0.0625rem solid #f0f0f0',
            height: '3.75rem',
            th: {
              fontSize: '0.9375rem',
              fontWeight: 500,
              textAlign: 'left',
              paddingInline: '0.625rem',
              '&:first-of-type': {
                visibility: 'hidden',
              },
            },
          },
        },
        tbody: {
          tr: {
            borderBottom: '0.0625rem solid #f0f0f0',
            height: '3.75rem',
            '&:last-child': {
              borderBottom: 'none',
            },
            td: {
              fontSize: '0.875rem',
              borderCollapse: 'collapse',
              textAlign: 'left',
              paddingInline: '0.625rem',
              '&:first-of-type': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '3.75rem',
              },
              img: {
                width: '1rem',
                height: '1rem',
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
