import { fixedBody } from './general'

const fontFamily = 'defaultFontFamily'
const paraText = {
  color: 'brand.100',
  fontWeight: 500,
  lineHeight: '1.7',
}
const w = '100%'
const position = 'relative'
const login = {

  '.login-body': {
    fontFamily,
    ...fixedBody,
  },
  '.login-card': {
    boxShadow: '2px 8px 35px rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    p: '40px 60px',
    bgColor: 'brand.600',
  },
  '.login-box': {
    w: '90%',
    mx: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  '.login-heading': {
    fontFamily,
    color: 'brand.50',
    mb: 4,
    w,
  },
  '.login-firstText': {
    mb: 4,
    ...paraText,
  },
  '.login-secondText': {
    mt: 4,
    mb: 4,
    ...paraText,
  },
  '.login-email-error': {
    color: 'brand.300',
    w: '90%',
    position,
    top: 6,
  },
  '.login-input': {
    bgColor: 'brand.200',
    borderRadius: 4,
    border: '1px solid',
    h: 44,
    textIndent: 15,
    p: '8px',
    mb: 2,
  },
  '.login-email-box': {
    position,
    mb: 7,
    mt: -3,
  },
  '.login-input-show-hide-img': {
    pos: 'absolute',
    top: 2,
    right: 29,
    zIndex: 1,
  },
  '.login-button': {
    w,
    mt: 4,
    color: 'brand.400',
    h: 44,
  },
  '.login-footer': {
    mt: 4,
    fontSize: 10,
    textAlign: 'center',
  },
}

export default login
