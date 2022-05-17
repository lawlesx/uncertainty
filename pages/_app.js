import {useState, useLayoutEffect} from 'react';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Router from 'next/router'
import Loader from '../components/Loader'
import Screen from '../components/Screen'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import useWindowSize from '../Hooks/useWindowSize';

function MyApp({ Component, pageProps }) {

  const [,width] = useWindowSize();

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
