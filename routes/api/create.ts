import { HandlerContext } from "$fresh/server.ts";

interface RequestData {
  link: string;
  slug?: string;
}

type Links = Array<{ link: string; slug: string }>;

export const handler = async (req: Request, _ctx: HandlerContext) => {
  const accessToken = Deno.env.get('GITHUB_TOKEN');
  const gistId = Deno.env.get('GIST_ID');
  const verification = Deno.env.get('VERIFICATION');
  let domain = Deno.env.get('DOMAIN');
  if (!accessToken || !gistId || !domain || !verification) {
    return new Response("Enviromental variables are not setup.", { status: 500 });
  }

  const authorization = req.headers.get('Authorization');
  if (authorization !== verification) {
    return new Response("Unauthorized", { status: 401 });
  }

  domain = domain.replace(/\/$/, '');
  try {
    const data = await req.json() as RequestData;
    let { link, slug } = data;

    const gistData = await (await fetch(`https://api.github.com/gists/${gistId}`, { headers: { Authorization: `token ${accessToken}` } })).json();
    const gistContent = JSON.parse(gistData.files['links.json'].content) as Links;

    if (slug && gistContent.find((item) => item.slug === slug)) {
      return new Response("Slug is already taken.", { status: 400 });
    }

    const existingLink = gistContent.find((item) => item.link === link);
    if (existingLink) {
      return new Response(`Link already exist.\n${JSON.stringify(existingLink, null, 2)}`, { status: 400 });
    }

    slug = slug || Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    gistContent.push({ slug, link });

    await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        files: {
          'links.json': {
            content: JSON.stringify(gistContent, null, 2),
          },
        },
      }),
    });
    return new Response(`${domain}/${slug}`);
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
