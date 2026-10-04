import type { APIRoute } from 'astro';
import { OAUTH_GITHUB_CLIENT_ID } from 'astro:env/server';

export const prerender = false;

export const GET: APIRoute = ({ url, redirect }) => {
  const redirectUri = new URL('/oauth/callback', url.origin).toString();
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: 'repo,user',
  });

  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};