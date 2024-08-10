import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://FranCavelli.github.io',
  base: '/LeagueStatus/',
  integrations: [tailwind()],
  output: "static",
  adapter: staticAdapter(), 
});
