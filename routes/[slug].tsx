import { Handlers } from '$fresh/server.ts';

export const handler: Handlers<string | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const resp = await fetch(`${Deno.env.get('DOMAIN')}/api/lengthen`, {
      method: 'POST',
      body: slug,
    });
    if (resp.status === 404) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${Deno.env.get('DOMAIN')}/404`,
        },
      });
    }
    const url = await resp.text();
    return new Response(null, {
      status: 302,
      headers: {
        Location: url,
      },
    });
  },
};
