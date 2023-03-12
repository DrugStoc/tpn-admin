import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './config/theme'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
