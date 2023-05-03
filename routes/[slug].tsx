import { Head } from '$fresh/runtime.ts';
import { Handlers, PageProps } from '$fresh/server.ts';
import RedirectIsland from '../islands/RedirectIsland.tsx';

export const handler: Handlers<string | undefined> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const resp = await fetch(`${Deno.env.get('DOMAIN')}/api/lengthen`, {
      method: 'POST',
      body: slug,
    });
    if (resp.status === 404) {
      return ctx.render(undefined);
    }
    const url = await resp.text();
    return ctx.render(url);
  },
};

export default function Page(props: PageProps<string | undefined>) {
  return (
    <>
      <Head>
        <title>Redirecting</title>
        <meta content="Redirecting..." property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <RedirectIsland target={props.data} />
      </main>
    </>
  );
}
