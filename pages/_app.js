import Head from "next/head";
import "@/styles/globals.css";
import { store } from '../redux/store'
import { Provider } from "react-redux";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>makromusic Case</title>
        <meta name="description" content="makromusic campaign pages for case" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
