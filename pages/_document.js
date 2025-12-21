import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/hollywood-starfire"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/rockwell-nova"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/montreal?styles=28832"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
