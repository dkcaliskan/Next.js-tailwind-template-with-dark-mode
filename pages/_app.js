import "@/styles/globals.css";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import Router from "next/router";

import { ThemeProvider } from "next-themes";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
