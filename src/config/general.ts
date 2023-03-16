const color = 'brand.800'
const dflexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const fixedBody = {
  pos: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bgColor: 'brand.700',
  ...dflexCenter,
}

const navbarPos = {
  ...fixedBody,
  overflowY: 'auto',
  w: 'calc(100% - 200px)',
  ml: 'auto',
}

const verticalCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const horizontalBtwFlex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}
const general = {
  '*': {
    p: 0,
    m: 0,
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  img: {
    objectFit: 'contain',
  },
  section: {
    mt: '100px',
    w: '90%',
    mx: 'auto',
  },

  'section::-webkit-scrollbar': {
    display: 'none',
  },
  h1: {
    fontSize: '2rem',
  },
  '.admin-body': {
    overflowY: 'auto',
    ...fixedBody,
  },
  'input::placeholder, textarea::placeholder': {
    color,
  },
  'input[type="password"]::-webkit-reveal, input[type="password"]::-webkit-clear-button, input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear':
    {
      display: 'none !important',
    },
  '.visibility-hidden': {
    visibility: 'hidden',
  },
}

export { general, fixedBody, verticalCenter, navbarPos, horizontalBtwFlex }
