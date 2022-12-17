import "./styles/general.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { animlib } from "../lib/animations";
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
