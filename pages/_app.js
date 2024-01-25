import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>makromusic Case</title>
        <meta name="description" content="makromusic campaign pages for case" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
