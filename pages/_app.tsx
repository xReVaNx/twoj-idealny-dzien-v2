import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../src/Layout/Header/Header";
import Footer from "../src/Layout/Footer/Footer";
import React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      gradient:
        "linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)",
      link: "white",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;
