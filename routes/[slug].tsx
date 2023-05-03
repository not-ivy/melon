import { Head } from '$fresh/runtime.ts';
import { Handlers, PageProps } from '$fresh/server.ts';
import RedirectIsland from '../islands/RedirectIsland.tsx';

type Links = { link: string; slug: string }[];

export const handler: Handlers<string | undefined> = {
  async GET(_, ctx) {
    const accessToken = Deno.env.get('GITHUB_TOKEN');
    const gistId = Deno.env.get('GIST_ID');
    if (!accessToken || !gistId) {
      return new Response('Enviromental variables are not setup.', { status: 500 });
    }
    const { slug } = ctx.params;
    const gistData = await (
      await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: { Authorization: `token ${accessToken}` },
      })
    ).json();
    const gistContent = JSON.parse(gistData.files['links.json'].content) as Links;
    const existingLink = gistContent.find((item) => item.slug === slug);
    if (!existingLink) {
      return ctx.render(undefined);
    }

    return ctx.render(existingLink.link);
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
