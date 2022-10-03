import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../src/Layout/Header/Header";
import Footer from "../src/Layout/Footer/Footer";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
