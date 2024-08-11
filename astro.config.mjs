import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://FranCavelli.github.io',
  base: '/LeagueStatus/',
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});