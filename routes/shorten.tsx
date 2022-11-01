import { Head } from "$fresh/runtime.ts";
import Input from "../components/Input.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Status from "../components/Status.tsx";

interface Data {
  url?: string;
  error?: string;
}

export const handler: Handlers<Data | null> = {
  async GET(req, ctx) {
    const params = new URL(req.url).searchParams;
    if (!params.has('link')) return ctx.render(null);

    const url = await fetch(`${Deno.env.get('DOMAIN')}/api/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': params.get('token') || '',
      },
      body: JSON.stringify({
        link: params.get('link'),
        slug: params.get('slug'),
      }),
    });
    if (url.status !== 200) return ctx.render({ error: await url.text() });
    return ctx.render({ url: await url.text() });
  },
};

export default function Shorten({ data }: PageProps<Data | null>) {
  return (
    <>
      <Head>
        <title>Shorten a link | Melon</title>
        <meta content="Shorten a link" property="og:title" />
        <link rel="stylesheet" href="/styles/shorten.css" />
      </Head>
      <main className="p-4 w-screen h-screen flex flex-col justify-center items-center dark:(bg-gray-900 text-white)">
        <Status hidden={data === null || data.error === undefined} message={data?.error ?? ''} fail={true} />
        <Status hidden={data === null || data.url === undefined} message={data?.url ?? ''} fail={false} />
        <form className="fadeIn flex flex-col items-end max-w-screen-sm w-full gap-y-6 dark:text-white text-black">
          <div className="flex flex-col gap-y-6 w-full">
            <Input label="Link to shorten" name="link" type="url" required placeholder="https://github.com" />
            <Input label="Slug" name="slug" />
            <Input label="Token" name="token" required type="password" />
          </div>
          <button type="submit" className="outline-none py-2 w-full bg-blue-600 rounded-sm flex items-center justify-center gap-x-2.5 text-white hover:(shadow-lg bg-blue-500) active:bg-blue-800 transition-colors">
            <span>Submit</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </main>
    </>
  )
}