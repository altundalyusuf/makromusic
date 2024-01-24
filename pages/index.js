import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>makromusic Case</title>
        <meta name="description" content="makromusic campaign pages for case" />
        <meta name="viewport" content="width=device-width, inital-scale=1" />
      </Head>
    </>
  );
}
