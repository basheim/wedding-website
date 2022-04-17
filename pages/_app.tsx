import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>{"Brandon & Ellen"}</title>
        <meta name="description" content="TBD" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="preload" as="image" href="/password-background.jpg"/>
      </Head>
      <NextNProgress color="#f7e5d9" height={10} />
      <Component {...pageProps} />
      <ToastContainer />
    </React.Fragment>
  ); 
  
  
}
export default MyApp
