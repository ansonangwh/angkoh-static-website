import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ansonangwh.github.io',
  base: '/angkoh-static-website',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
