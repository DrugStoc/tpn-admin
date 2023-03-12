const overview = {
  '.section': {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#e9e9e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
    width: 'calc(100% - 200px)',
    marginLeft: 'auto',
  },
  '.section section:nth-child(3)': {
    position: 'absolute',
    fontFamily: "'Be Vietnam Pro', sans-serif",
    top: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    lineHeight: 2.2,
  },
  '.section section:nth-child(3) .chatSearchProducts': {
    width: '65%',
    maxWidth: '650px',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: '161px',
    width: '31%',
    paddingBlock: '15px',
    paddingInline: '15px',
    fontSize: '12px',
  },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .title':
    {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .title span':
    {
      fontWeight: 500,
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .title img':
    {
      width: '20px',
      height: '20px',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal':
    {
      display: 'flex',
      justifyContent: 'space-between',
      height: '61px',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .data':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '70px',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .data span':
    {
      color: '#21a560',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .data img':
    {
      width: '16px',
      height: '16px',
      marginLeft: '10px',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .data h2':
    {
      fontSize: '20px',
      fontWeight: 600,
      margin: '0',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .data .trends':
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .view':
    {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '10px',
      cursor: 'pointer',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .view span':
    {
      color: '#4b70d6',
    },
  '.section section:nth-child(3) .chatSearchProducts .positionVertical .positionHorizontal .view img':
    {
      display: 'flex',
      position: 'relative',
      bottom: '8px',
    },
  '.section section:nth-child(3) .searchProducts': {
    width: '33%',
    marginBottom: '50px',
    height: '913px',
    overflowY: 'auto',
  },
  '.section section:nth-child(3) .searchProducts .title': {
    margin: '20px',
    fontSize: '14px',
    position: 'relative',
    fontWeight: 500,
    marginBottom: '30px',
  },
  '.section section:nth-child(3) .searchProducts .title::before': {
    position: 'absolute',
    content: "''",
    borderBottom: '1px solid #e6e1e5',
    width: '100%',
    top: '30px',
  },
  '.section section:nth-child(3) .searchProducts .productList': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginInline: '24px',
    fontSize: '14px',
    marginBlock: '20px',
    flexWrap: 'wrap',
  },
  '.section section:nth-child(3) .searchProducts .productList img:first-child':
    {
      width: '48px',
      height: '48px',
      border: '1px solid #d9d9d9',
      borderRadius: '50%',
      backgroundColor: '#d9d9d9',
      overflow: 'hidden',
    },
  '.section section:nth-child(3) .searchProducts::-webkit-scrollbar': {
    display: 'none',
  },
  '.section .chat1, .section .chat2': {
    width: '58%',
    borderRadius: '12px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '245px',
    left: '46px',
    height: '341px',
    overflowY: 'auto',
    boxShadow:
      'rgba(0, 0, 0, 0.04) 0px 5px 22px,   rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
  },
  '.section .chat1 .alignChart, .section .chat2 .alignChart': {
    display: 'flex',
    height: '340px',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    padding: '16px !important',
  },
  '.section .chat1': { top: '245px', marginTop: '103px' },
  '.section .chat2': { top: '480px', marginTop: '242px' },
  '.section section:last-child': {
    position: 'absolute',
    top: '700px',
    visibility: 'hidden',
  },
  '.section input::-moz-placeholder': { display: 'none' },
  '.section input::placeholder': { display: 'none' },
}

export default overview
