import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ redirect }) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    throw new Error('OAUTH_GITHUB_CLIENT_ID is not configured');
  }

  const redirectUri = process.env.OAUTH_GITHUB_REDIRECT_URI || 'https://blog.sage-euler.com/oauth/callback';
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
  });

  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};