/* eslint-disable linebreak-style */
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px',
  },
  colors: {
    brand: {
      50: '#556ab0',
      100: '#1a202c',
      200: '#f7f8f9',
      300: '#f00',
      400: '#000',
      500: 'd9d9d9',
      600: '#006d6d',
      700: '#004f4f',
      800: '#003131',
      900: '#001313',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    input: 'Poppins, sans-serif',
  },
  styles: {
    global: {
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
      '@media (min-width: 531px)': {
        'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear':
          {
            display: 'none',
          },
      },
      section: {
        marginTop: '100px',
        width: '90%',
        marginInline: 'auto',
      },
      h1: {
        fontSize: '2em !important',
      },
      '.login-body, .admin-body': {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: '#e9e9e9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '.admin-body': {
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
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.500',
          color: 'brand.400',
          _hover: { bg: 'brand.600' },
        },
        secondary: {
          bg: 'gray.500',
          color: 'white',
          _hover: { bg: 'gray.600' },
        },
      },
    },
  },
})

export default theme
