import '@styles/globals.scss';

import { ThemeProvider } from '@contexts/ThemeContext';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
