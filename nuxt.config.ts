import ViteYaml from '@modyfi/vite-plugin-yaml';
import {esbuildCommonjs} from '@originjs/vite-plugin-commonjs';
import {defineNuxtConfig} from 'nuxt/config';
import viteCompression from 'vite-plugin-compression';
import ViteCSSExportPlugin from 'vite-plugin-css-export';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@kevinmarrec/nuxt-pwa'],

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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/variables.scss";',
        },
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
    optimizeDeps: {
      esbuildOptions: {
        // https://github.com/jaydenseric/apollo-upload-client/issues/280#issuecomment-1363605321
        plugins: [esbuildCommonjs(['apollo-upload-client'])],
      },
    },
    plugins: [ViteYaml(), ViteCSSExportPlugin(), viteCompression()],
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
});
