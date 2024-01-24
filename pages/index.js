import Homepage from "@/components/Homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>makromusic Case</title>
        <meta name="description" content="makromusic campaign pages for case" />
      </Head>

      <main style={{ fontFamily: 'Alata, sans-serif' }}>
        <Homepage />
      </main>
    </>
  );
}
