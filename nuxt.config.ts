// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - WHITEBEAR',
      title: 'WHITEBEAR',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [],
      link: [
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicon-16.png',
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicon-32.png',
        },
        {
          rel: 'icon',
          sizes: '48x48',
          type: 'image/png',
          href: '/favicon-48.png',
        },
        {
          rel: 'icon',
          sizes: '64x64',
          type: 'image/png',
          href: '/favicon-64.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
    },
  },

  modules: ['@kevinmarrec/nuxt-pwa'],

  pwa: {
    manifest: {
      crossorigin: 'use-credentials',
      start_url: '/',
      icon: {
        sizes: [16, 32, 64, 144, 192, 384, 512],
      },
    },
  },
});
