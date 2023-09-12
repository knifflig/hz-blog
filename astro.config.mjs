import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "ejSgZvoNxQNCkH421Dx7Nwtt",
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind()
  ]
});