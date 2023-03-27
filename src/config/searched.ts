import { horizontalBtw } from './general'

const searched = {
  '.section .fillSearch .searchProducts': {
    w: '33%',
    mb: '3.125rem',
    h: '57.375rem',
    position: 'relative',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '.title': {
      margin: '1.25rem',
      fontSize: '0.875rem',
      pos: 'relative',
      fontWeight: 500,
      mb: '1.875rem',
      '&::before': {
        pos: 'absolute',
        content: "''",
        borderBottom: '0.0625rem solid #e6e1e5',
        w: 'full',
        top: '2.1875rem',
      },
    },
    '.productList': {
      ...horizontalBtw,
      mx: '1.5rem',
      fontSize: '0.875rem',
      my: '1.25rem',
      flexWrap: 'wrap',
      'img:first-of-type': {
        w: '3rem',
        h: '3rem',
        border: '0.0625 solid #d9d9d9',
        borderRadius: '50%',
        bgColor: 'brand.500',
        overflow: 'hidden',
      },
    },
  },
}

export default searched
