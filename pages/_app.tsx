import { NextPage } from 'next';
import '../styles/globals.css'
import { AppProps } from 'next/app';
import { Component } from 'react';
 


type NextPageWithLayout = NextPage & {

  getLayout?: (page:JSX.Element) => JSX.Element

}

type AppPropsWithLayout = AppProps & {

  Component:NextPageWithLayout

}

function App({ Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page );

  
  return getLayout( <Component {...pageProps} /> )
}

export default App
