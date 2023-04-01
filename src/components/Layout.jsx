import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';


export default function Layout({children,title}) {
  return (
    <>
    <Head>
    <title>{title}</title>
    </Head>
    <Header/>
    <>
    {children}
    </>
    <Footer/>
    
    </>
  )
}
