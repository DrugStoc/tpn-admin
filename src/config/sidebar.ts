const sidebar = {
  '.sidebar': {
    pos: 'fixed',
    w: '200px',
    h: '100vh',
    bgColor: 'brand.350',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'fontFamily',
    overflowY: 'auto',
    color: 'brand.150',
    zIndex: 1,
    li: {
      display: 'flex',
      alignItems: 'center',
      p: '0px 40px 0px 30px',
      ml: '-10px',
      h: '40px',
      '&:hover, &.active': {
        bgColor: 'brand.250',
        cursor: 'pointer',
        borderRadius: 4,
      },
      img: {
        mr: '10px',
      },
    },
    '.settingLogout': {
      ml: 5,
    },
    '&::webkit-scrollbar': {
      display: 'none',
    },
  },
}

export default sidebar
