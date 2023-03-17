const searched = {
  '.section .fillSearch .searchProducts': {
    w: '33%',
    mb: '50px',
    h: '913px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '.title': {
      margin: '20px',
      fontSize: '0.875rem',
      pos: 'relative',
      fontWeight: 500,
      mb: '30px',
      '&::before': {
        pos: 'absolute',
        content: "''",
        borderBottom: '1px solid #e6e1e5',
        w: 'full',
        top: '35px',
      },
    },
    '.productList': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mx: '24px',
      fontSize: '0.875rem',
      my: '20px',
      flexWrap: 'wrap',
      'img:first-of-type': {
        w: '48px',
        h: '48px',
        border: '1px solid #d9d9d9',
        borderRadius: '50%',
        bgColor: 'brand.500',
        overflow: 'hidden',
      },
    },
  },
}

export default searched
