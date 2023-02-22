import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../components/MainMenu/header.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
