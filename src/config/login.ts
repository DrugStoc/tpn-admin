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
    '.login-card': {
      boxShadow: '2px 8px 35px rgba(0, 0, 0, 0.05)',
      borderRadius: 10,
      p: '40px 60px',
      bgColor: 'brand.600',
      '.login-box': {
        w: '90%',
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '.login-heading': {
          fontFamily,
          color: 'brand.50',
          mb: 4,
          w,
        },
        '.login-text': {
          '.login-firstText': {
            mb: 4,
            ...paraText,
          },
          '.login-secondText': {
            mt: 4,
            mb: 4,
            ...paraText,
          },
        },
        form: {
          '.login-input': {
            bgColor: 'brand.200',
            borderRadius: 4,
            border: '1px solid brand.200',
            h: '44px',
            textIndent: 15,
            p: 2,
            mb: 7,
          },
          '.login-email-box': {
            position,
            mb: 7,
            mt: -3,
            '.login-input-show-hide-img': {
              pos: 'absolute',
              top: 11,
              right: 21,
              zIndex: 1,
            },
          },
          '.login-footer': {
            mt: 4,
            fontSize: '0.625rem',
            textAlign: 'center',
          },
        },
      },
    },
  },
}

export default login
