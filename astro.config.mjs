import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your GitHub Pages URL, e.g. https://yourusername.github.io
// Update `base` to your repo name if deploying to a project page, e.g. /mediamap
// Leave `base` as '/' if using a custom domain (e.g. mediamapx.ai)
export default defineConfig({
  site: 'https://phaxe82.github.io',
  base: '/mediamap',
  integrations: [tailwind()],
});
