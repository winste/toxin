// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  srcDir: 'src/',
  dir: {
    static: 'app/public',
    layouts: 'app/layouts',
    assets: 'app/assets',
    middleware: 'app/middleware',
  },
  css: ['@/app/assets/styles/scss/main.scss'],
  app: {
    head: {
      title: 'Toxin - Hotels search service',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image', 
  [
    '@nuxtjs/google-fonts',
    {
      families: {
        Montserrat: [400, 700],
      },
    },
  ]],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: 'src/app/assets/icons'
      },
    ],
  },
  devtools: {
    enabled: true,
  },
  alias: {
    '~': path.join(__dirname, '/src'),
  },
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/app/assets/google-fonts/css/nuxt-google-fonts.css" as *;
          @use "@/app/assets/styles/scss/_colors.scss" as *;
          @use "@/app/assets/styles/scss/_mixins.scss" as *;
          `,
          api: 'modern-compiler'
        },
      },
    },
  },
});