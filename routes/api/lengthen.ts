import { HandlerContext } from "$fresh/server.ts";

type Links = Array<{ link: string; slug: string }>;

export const handler = async (req: Request, _ctx: HandlerContext) => {
  const accessToken = Deno.env.get('GITHUB_TOKEN');
  const gistId = Deno.env.get('GIST_ID');
  if (!accessToken || !gistId) {
    return new Response("Enviromental variables are not setup.", { status: 500 });
  }

  const slug = await req.text();

  const gistData = await (await fetch(`https://api.github.com/gists/${gistId}`, { headers: { Authorization: `token ${accessToken}` } })).json();
  const gistContent = JSON.parse(gistData.files['links.json'].content) as Links;

  try {
    switch (req.method) {
      case 'POST': {
        const existingLink = gistContent.find((item) => item.slug === slug);
        if (!existingLink) {
          return new Response("No links found", { status: 404 });
        }

        return new Response(existingLink.link);
      }
    }
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}