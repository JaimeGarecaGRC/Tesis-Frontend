
import Navbar from '../components/navbar/navbar';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
