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
const general = {
  '*': {
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
    mt: '100px',
    w: '90%',
    mx: 'auto',
  },
  h1: {
    fontSize: '2em',
  },
  '.admin-body': {
    overflowY: 'auto',
    ...fixedBody,
  },
  'input::placeholder, textarea::placeholder': {
    color,
  },
  'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear': {
    display: 'none',
  },
  '.visibility-hidden': {
    visibility: 'hidden',
  },
}

export { general, fixedBody }
