import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { FC, useEffect } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QLGVG137CN" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-QLGVG137CN');
        `}
        </Script>

        <title>Daniel DiVenere | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hi. It's me. Daniel. I'm a full stack web developer and I'm here to help out on your next project."
        />
        <meta
          name="keywords"
          content="junior web developer, web developer, full stack developer, react developer"
        />
        <meta name="theme-color" content="#a29bfe" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="name" content="Daniel DiVenere - Portfolio" />
        <meta
          property="description"
          content="Hi. It's me. Daniel. I'm a full stack web developer and I'm here to help out on your next project."
        />
        <meta property="image" content="/favicons/shock.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Daniel DiVenere - Portfolio" />
        <meta
          name="twitter:description"
          content="Hi. It's me. Daniel. I'm a full stack web developer and I'm here to help out on your next project."
        />
        <meta name="twitter:image:src" content="/favicons/shock.png" />
        <meta property="og:title" content="Daniel DiVenere - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="danthebuilder.com" />
        <meta property="og:image" content="/favicons/shock.png" />
        <meta
          property="og:description"
          content="Hi. It's me. Daniel. I'm a full stack web developer and I'm here to help out on your next project."
        />
        <meta property="og:site_name" content="Daniel DiVenere - Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
