import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../src/Layout/Header/Header";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
