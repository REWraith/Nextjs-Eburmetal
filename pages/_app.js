import React,{useEffect} from 'react'
import Head from 'next/head'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/6728cf444304e3196adcde77/1ibrmj97c'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()
  }, [])
  return (
    <>
      <Head>
        <title>Ebru Metal</title>
        <meta
          name='description'
          content='Ebru Metal, metal işleme ve endüstriyel çözümler sunan lider bir firmadır.'
        />
        <link rel='icon' href='/assets/logo/1.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
