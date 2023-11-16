import "@/styles/globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Recall.ai Dashboard Demo</title>
        <meta
          property="og:title"
          content="Recall.ai Dashboard Demo"
          key="title"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
