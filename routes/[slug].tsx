import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import RedirectIsland from "../islands/RedirectIsland.tsx";

export default function Redirect(props: PageProps) {
  return (
    <>
      <Head>
        <title>Redirecting</title>
        <meta content="Redirecting..." property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <RedirectIsland target={props.params.slug} />
      </main>
    </>
  )
}