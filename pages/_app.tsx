import type { AppProps } from 'next/app'
import '../src/css/main.css';
import '../src/css/custom.css';

// ... rest of your _app.tsx file
export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
