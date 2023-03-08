import { extendTheme } from '@chakra-ui/react'
import { responsiveness } from './responsive'
import { general } from './general'
import { login } from './login'

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
      ...general,
      ...login,
      ...responsiveness,
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
