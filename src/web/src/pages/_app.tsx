import type { AppProps } from 'next/app';
import { SitecorePageProps } from '../lib/sc-page-props';

const App = ({ Component, pageProps }: AppProps<SitecorePageProps>): React.JSX.Element => {
    return <Component {...pageProps} />;
}

export default App;