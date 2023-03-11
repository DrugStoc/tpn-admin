import { extendTheme } from '@chakra-ui/react'
import { modules as global } from './modules'

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
      500: '#d9d9d9',
      600: '#fff',
      700: '#e9e9e9',
      800: '#979797',
      900: '#556ab0dd',
    },
  },
  fonts: {
    defaultFontFamily: 'Poppins, sans-serif',
    fontFamily: "'Be Vietnam Pro', sans-serif",
  },
  styles: {
    global,
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
          bg: 'brand.50',
          color: 'brand.600',
          _hover: { bg: 'brand.900' },
        },
      },
    },
  },
})

export default theme
