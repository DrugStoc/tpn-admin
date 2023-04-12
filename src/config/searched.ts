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
      margin: '0 1.25rem',
      fontSize: '0.875rem',
      pos: 'relative',
      fontWeight: 500,
      height: '20px',
      py: '25px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '0.0625rem solid #e6e1e5',
      mb: '1.875rem',
    },
    '.productList': {
      ...horizontalBtw,
      mx: '1.5rem',
      fontSize: '0.875rem',
      my: '1.25rem',
      flexWrap: 'wrap',
      '.productListImage': {
        w: '3rem',
        h: '3rem',
        border: '0.0625rem solid #d9d9d9',
        borderRadius: '50%',
        bgColor: 'brand.500',
        overflow: 'hidden',
      },
    },
  },
}

export default searched
