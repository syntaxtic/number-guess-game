import { Html, Head, Main, NextScript } from 'next/document';
import CssBaseline from '@mui/material/CssBaseline';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <CssBaseline />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
