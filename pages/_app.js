import App from 'next/app';
import '../styles/global.scss';

export default function({ Component, pageProps }) {
  return <Component {...pageProps} />
}
