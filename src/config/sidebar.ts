import { dCenter, dVerticalBtw } from "./general"

const sidebar = {
  '.sidebar': {
    pos: 'fixed',
    w: '12.5rem',
    h: '100vh',
    bgColor: 'brand.600',
    ...dVerticalBtw,
    fontFamily: 'fontFamily',
    alignItems: 'stretch',
    overflowY: 'auto',
    color: 'brand.100',
    zIndex: 1,
    li: {
      ...dCenter,
      p: '0 2.5rem 0 1.875rem',
      ml: '-0.625rem',
      h: '2.5rem',
      '&:hover, &.active': {
        bgColor: 'brand.250',
        cursor: 'pointer',
        borderRadius: 4,
      },
      img: {
        mr: '0.625rem',
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
