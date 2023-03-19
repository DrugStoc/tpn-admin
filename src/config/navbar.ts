import { horizontalBtwFlex } from './general'

const pos = 'absolute'
const navbar = {
  '.navbar': {
    ...horizontalBtwFlex,
    pos,
    top: '-5rem',
    fontFamily: 'fontFamily',
    color: 'brand.150',
    mt: '6.25rem',
    w: '90%',
    mx: 'auto',
    '.navbar-split': {
      display: 'flex',
      alignItems: 'center',
      h2: {
        fontSize: '1rem',
        fontWeight: '600',
      },
      '.img': {
        pos,
        top: '0.875rem',
        left: '0.625rem',
      },
    },
  },
}

export default navbar
