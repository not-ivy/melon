import { Head } from "$fresh/runtime.ts";
import Blankslate from "../components/Blankslate.tsx";

export default function Error500() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta content="Error 404" property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <Blankslate>500 <span className="font-light">Internal Server Error</span></Blankslate>
      </main>
    </>
  )
}