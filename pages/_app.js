import App from 'next/app';
import '../styles/global.scss';

if (typeof window !== 'undefined') {
  const WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: ['Krona One', 'Open Sans']
    }
  });
}

export default function({ Component, pageProps }) {
  return <Component {...pageProps} />
}
