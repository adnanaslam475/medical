import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/base.scss";

import Router from "next/router";
import { useEffect } from "react";

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

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // import("tw-elements");
    // import("tw-elements");
    const use = async () => {
      (await import("tw-elements" as any)).default;
    };
    use();
  }, []);

  return <Component {...pageProps} />;
}
