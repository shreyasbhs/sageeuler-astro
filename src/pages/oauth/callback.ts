import type { APIRoute } from 'astro';
import OAuth from 'astro-decap-cms-oauth';

export const prerender = false; // Disable static build for this endpoint

export const GET: APIRoute = async (context) => {
  const oauth = new OAuth(context);
  return oauth.callback();
};