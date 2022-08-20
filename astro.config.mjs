import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/HJFront/astro-mdx-template',
  base: '/astro-mdx-template',
	integrations: [mdx(), react(), sitemap()],
});
