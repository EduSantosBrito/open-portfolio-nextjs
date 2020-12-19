import { Metadata } from '@api/metadatas';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<{ metadatas: Metadata[] }> {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/favicon.svg' />
          {this.props.metadatas?.map((metadata: Metadata) => (
            <meta
              key={metadata.property}
              property={metadata.property}
              content={metadata.content}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx);
  const response = await fetch(`${process.env.API_URL}/metadatas`);
  const metadatas = await response.json();

  return {
    ...initialProps,
    metadatas,
  };
};
