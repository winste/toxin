// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxt/ui'
  ],
  css: ['@/assets/scss/index.scss'],
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
  svgSprite: {},
  devtools: {
    enabled: true,
  },
  alias: {
    'global': resolve(__dirname, './components/global'),
  },
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/colors.scss" as *;
            @use "@/assets/scss/mixins.scss" as *;
          `,
        },
      },
    },
  },
})
