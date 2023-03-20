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

const sections = {
  ...fixedBody,
  overflowY: 'auto',
  w: 'calc(100% - 12.5rem)',
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
  '::-webkit-scrollbar': {
    w: '0.625rem',
    WebkitBoxShadow: 'inset 0 0 0.375rem rgba(0, 0, 0, 0.3)',
    boxShadow: 'inset 0 0 0.375rem rgba(0, 0, 0, 0.3)',
    WebkitBorderRadius: '0.3125rem',
    borderRadius: '0.3125rem',
  },
  '::-webkit-scrollbar-thumb': {
    bgColor: '#c1c1c1',
    WebkitBorderRadius: '0.3125rem',
    borderRadius: '0.3125rem',
  },
  '::-webkit-scrollbar-thumb:hover': {
    bgColor: '#a8a8a8',
  },
  'input[type="search"]::-webkit-search-cancel-button': {
    WebkitAppearance: 'none !important',
    w: '1.25rem  !important',
    h: '1.25rem  !important',
    fontWeight: '900',
    bgImage:
      "url('https://res.cloudinary.com/bizstak/image/upload/v1679136935/icons8-close-94_byt6gu.png')  !important",
    bgRepeat: 'no-repeat  !important',
    bgPosition: 'right  !important',
    bgSize: '80%  !important',
    cursor: 'pointer  !important',
  },
  img: {
    objectFit: 'contain',
  },
  'section, footer': {
    mt: '6.25rem',
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

export { general, fixedBody, verticalCenter, sections, horizontalBtwFlex }
