import '../.jest/next-image.mock'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'ancp-light',
    values: [
      {
        name: 'ancp-light',
        value: theme.colors.white
      },
      {
        name: 'ancp-dark',
        value: theme.colors.darkGray
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
