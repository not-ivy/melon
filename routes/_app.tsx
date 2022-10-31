import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";


export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap" />
        <link rel="stylesheet" href="/styles/shared.css" />
        <meta name="description" content="A fresh link shortener." />
        <meta property="og:description" content="A fresh link shortener." />
        <meta name="theme-color" content="#e54554" />
        <meta property="og:image" content="/watermelon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Melon" />
      </Head>
      <props.Component />
    </>
  )
}