import {useState, useLayoutEffect} from 'react';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Router from 'next/router'
import Loader from '../components/Loader'
import Screen from '../components/Screen'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function useWindowSize() {
  const [size, setSize] = useState([2000,2000]);
  useLayoutEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);
  return size;
}

function MyApp({ Component, pageProps }) {

  const [height,width] = useWindowSize();
  console.log(width,height);

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url)=>{
    setLoading(true);
  })
  Router.events.on('routeChangeComplete', (url)=>{
    setLoading(false);
  })
 

  return (
    <AnimateSharedLayout>
      {width<=1000 ? 
        <Screen/>
        :
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            {loading && <Loader/>}
          </AnimatePresence>
          <Navbar/>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      }
      
    </AnimateSharedLayout>
    
  )
}

export default MyApp
