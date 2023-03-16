import { horizontalBtwFlex } from './general'

const pos = 'absolute'
const navbar = {
  '.navbar': {
    ...horizontalBtwFlex,
    pos,
    top: '-80px',
    fontFamily: 'fontFamily',
    color: 'brand.150',
    mt: '100px',
    w: '90%',
    mx: 'auto',
    '.navbar-split': {
      display: 'flex',
      alignItems: 'center',
      h2: {
        fontSize: '16px',
        fontWeight: '600',
      },
      '.img': {
        pos,
        top: '14px',
        left: '10px',
      },
    },
  },
}

export default navbar
