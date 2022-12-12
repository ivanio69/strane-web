import "./styles/general.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";

import Router from "next/router";

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
  const animation = {
    name: "Slide Up",
    variants: {
      initial: {
        opacity: 0,
        transform: "translateY(5vh)",
      },
      animate: {
        opacity: 1,
        transform: "translateY(0px)",
      },
      exit: {
        opacity: 0,
        transform: "translateY(-5vh)",
      },
    },
    transition: {
      duration: 0.3,
      delayChildren: 0.5,
    },
  };
  const [exitBefore, setExitBefore] = useState(false);
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
      </div>
    </>
  );
}
