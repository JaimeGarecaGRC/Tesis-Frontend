
import { useRouter } from 'next/router';
import Navbar from '../components/navbar/navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/styles.scss';
import Menu from '../components/menu/menu'; 

function MyApp({ Component, pageProps }) {
    
    const { pathname} = useRouter();

    if(pathname === "/login")
    {
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }else{
        return (
            <>
                <Navbar />
                <div className='columns is-gapless'>
                    <div className='column is-2'>
                        <section className='hero is-fullheight-with-navbar menu-color'>
                            <div className='hero-head'>
                                <Menu />
                            </div>
                        </section>
                    </div>
                    <div className='column'>
                        <Component {...pageProps} />    
                    </div>
                </div>
                
            </>
        );
    }
}

export default MyApp
