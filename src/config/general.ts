export const general = {
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  img: {
    OObjectFit: 'contain',
    objectFit: 'contain',
  },
  section: {
    marginTop: '100px',
    width: '90%',
    marginInline: 'auto',
  },
  h1: {
    fontSize: '2em !important',
  },
  '.admin-body': {
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
  },
  'input::-moz-placeholder, textarea::-moz-placeholder': {
    color: '#979797',
    fontFamily: "'Be Vietnam Pro', sans-serif",
  },
  'input::placeholder, textarea::placeholder': {
    color: '#979797',
    fontFamily: "'Be Vietnam Pro', sans-serif",
  },
  '.visibility-hidden': {
    visibility: 'hidden',
  },
}
