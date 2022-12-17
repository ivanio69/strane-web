import "./styles/general.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { animlib } from "../lib/animations";
import Head from "next/head";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) {
  const animation = animlib[0];
  return (
    <>
      <Head>
        <title>Strane.</title>
        <meta name="application-name" content="Strane" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Strane" />
        <meta name="description" content="Strane" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
        <meta name="msapplication-TileColor" content="#6349ff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#6349ff" />

        <link rel="apple-touch-icon" href="/icons/128.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/ios/152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ios/180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/ios/167.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ios/32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ios/16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://strane.vercel.app" />
        <meta name="twitter:title" content="Strane" />
        <meta name="twitter:description" content="Strane" />
        <meta
          name="twitter:image"
          content="https://strane-dev.vercel.app/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@straneteam" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Strane" />
        <meta property="og:description" content="Strane" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://strane.vercel.app" />
        <meta
          property="og:image"
          content="https://strane-dev.vercel.app/icons/apple-touch-icon.png"
        />

        <link
          rel="apple-touch-startup-image"
          href="/ios/1024.png"
          sizes="1024x1024"
        />
      </Head>
      <ToastContainer />
      <div className="titlebar">
        <p>
          <span>S</span>TRANE<span>.</span>
          <span className="cbt">
            {" "}
            ALPHA BUILD. NOT INDICATIVE OF FINAL PRODUCT
          </span>
        </p>
      </div>
      <div className="appContainer">
        <SessionProvider session={session}>
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
              <m.div
                key={router.route.concat(animation.name)}
                className="page-wrap"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
                opacity={0}
              >
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </SessionProvider>
      </div>
    </>
  );
}
