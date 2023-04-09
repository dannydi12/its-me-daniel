import "@/styles/globals.css";
import "@/styles/tomorrow-night-bright.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import ReactGA from "react-ga";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize("UA-157458767-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
