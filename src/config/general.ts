const color = 'brand.800'
const fixedBody = {
  pos: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bgColor: 'brand.700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const verticalCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}
const general = {
  '*, *::before, *::after': {
    p: 0,
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  img: {
    objectFit: 'contain',
  },
  section: {
    mt: 6.25,
    w: '90%',
    mx: 'auto',
  },
  h1: {
    fontSize: 8,
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

export { general, fixedBody, verticalCenter }
