import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        // p: '8'
      }
    }
  },
})