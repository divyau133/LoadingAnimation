'use client'
import Navbar from "./components/Navbar"
import "./globals.css";
import {Inter} from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";



const inter = Inter({ subsets: ['latin'] })

function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) &&  setLoading(true);
    const handleComplete = (url) => (url !== router.asPath) &&  setLoading(false);

    router.events.on('routerChangeStart', handleStart)
    router.events.on('routerChangeStart', handleComplete)
    router.events.on('routerChangeError', handleComplete)

    return () => {
    router.events.off('routerChangeStart', handleStart)
    router.events.off('routerChangeStart', handleComplete)
    router.events.off('routerChangeError', handleComplete)
    }
  })
  return loading &&(
    <div className="spinner-wrapper">
      <div className="spinner"/>
    </div>
  )
}
 
function MyApp({ Component, pageProps }) {
  return (<><Loading /><Component {...pageProps}/></>)

  function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        <Navbar />
        {children}
      
        </AuthContextProvider>
      </body>
    </html>
  );
}
}

export default MyApp