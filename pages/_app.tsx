import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
