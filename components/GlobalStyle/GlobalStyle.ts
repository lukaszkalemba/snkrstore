import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.primary}, sans-serif;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.dark};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
