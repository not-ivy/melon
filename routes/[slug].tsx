import { PageProps, Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import RedirectIsland from "../islands/RedirectIsland.tsx";

interface Data {
  link: string;
}

export const handler: Handlers<Data | null> = {
  async GET(_req, ctx) {
    const domain = Deno.env.get('DOMAIN')?.replace(/\/$/, '');
    if (!domain) {
      throw new Error('DOMAIN environment variable not set');
    }

    const resp = await fetch(`${domain}/api/lengthen`, { method: 'POST', body: ctx.params.slug });
    if (resp.status === 404) return ctx.render(null);
    const link = await resp.text();
    if (!link) return ctx.render(null);

    return ctx.render({ link });
  },
};

export default function Redirect({ data }: PageProps<Data | null>) {
  if (!data) return (
    <>
      <Head>
        <title>404</title>
        <meta content="404 | Not Found" property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <div className="flex items-center fadeIn">
          <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
          <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white">404 <span className="font-light">Not Found</span></h1>
        </div>
      </main>
    </>
  )

  return (
    <>
      <Head>
        <title>Redirecting</title>
        <meta content="Redirecting..." property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <RedirectIsland target={data.link} />
      </main>
    </>
  )
}