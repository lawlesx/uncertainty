import {useState} from 'react';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Router from 'next/router'
import Loader from '../components/Loader'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url)=>{
    setLoading(true);
    console.log('Route Change Start');
  })
  Router.events.on('routeChangeComplete', (url)=>{
    setLoading(false);
    console.log('Route Change Complete');
  })
  return (
    <>
      {loading && <Loader/>}
      <Layout>
        <Navbar/>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp
