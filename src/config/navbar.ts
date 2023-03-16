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
    },
  },
  '.navbar + section': {
    pos,
    top: '-25px',
  },
  '.navbar + section img.img': {
    pos,
    top: '14px',
    left: '10px',
  },
  '.navbar h2': {
    fontSize: '16px',
    fontWeight: '600',
  },
  '.navbar .dayTime': {
    ml: '24px',
  },
}

export default navbar
