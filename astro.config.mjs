// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import decapCmsOauth from 'astro-decap-cms-oauth';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.sage-euler.com',
  integrations: [mdx(), sitemap(), decapCmsOauth({ configPath: 'src/data/decap-config.yml' })],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  adapter: node({
    mode: 'standalone',
  }),
});