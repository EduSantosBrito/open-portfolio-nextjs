import '@styles/globals.scss';

import { CategoryProvider } from '@contexts/CategoryContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <Component {...pageProps} />
      </CategoryProvider>
    </ThemeProvider>
  );
};

export default MyApp;
