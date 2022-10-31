import { Head } from "$fresh/runtime.ts";
import Input from "../components/Input.tsx";

export default function Shorten() {
  return (
    <>
      <Head>
        <title>Shorten a link | Melon</title>
        <meta content="Shorten a link" property="og:title" />
        <link rel="stylesheet" href="/styles/shorten.css" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <form className="fadeIn flex flex-col items-end max-w-screen-sm w-full gap-y-6" >
          <div className="flex flex-col gap-y-6 w-full">
            <Input label="Link to shorten" name="link" required placeholder="https://github.com" />
            <Input label="Desired slug" name="slug" />
            <Input label="Token" name="slug" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}