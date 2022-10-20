import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['blue']};
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) => theme.fontSizes['text-m']} 'Nunito', sans-serif;
    line-height: 160%;
  }
`
