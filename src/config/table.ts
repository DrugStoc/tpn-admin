import { dflexCenter } from './general'

const table = {
  '.tableSection': {
    position: 'absolute',
    top: '3.375rem',
    '.overflow': {
      overflow: 'auto',
      bgColor: 'brand.600',
      maxH: '41.25rem',
      fontFamily: 'fontFamily',
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
              whiteSpace: 'nowrap',
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
            '&:hover': {
              bgColor: '#f5f5f5',
            },
            '&:last-child': {
              borderBottom: 'none',
            },
            td: {
              fontSize: '0.875rem',
              borderCollapse: 'collapse',
              textAlign: 'left',
              px: '0.625rem',
              whiteSpace: 'nowrap',
              '&:first-of-type': {
                ...dflexCenter,
                h: '3.75rem',
              },
              img: {
                w: '1rem',
                h: '1rem',
                cursor: 'pointer',
              },
            },
            '.used': {
              bgColor: '#EAF4E8',
              color: '#21A560',
              textAlign: 'center',
              display: 'block',
              width: '70.094px',
              borderRadius: '100px',
              py: '3px',
            },
            '.open': {
              bgColor: '#FEF8E7;',
              color: '#BE992D',
              textAlign: 'center',
              display: 'block',
              width: '70.094px',
              borderRadius: '100px',
              py: '3px',
            },
            '.failed': {
              bgColor: '#F9DEDC',
              color: '#AC1E1A',
              textAlign: 'center',
              display: 'block',
              width: '70.094px',
              borderRadius: '100px',
              py: '3px',
            },
          },
        },
      },
    },
  },
}

export default table
