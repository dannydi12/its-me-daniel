import "@/styles/globals.css";
import "@/styles/tomorrow-night-bright.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

const App: FC<AppProps> = ({ Component, pageProps }) => {
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
};

export default App;
