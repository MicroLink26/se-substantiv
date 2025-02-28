import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    VitePWA({
      devOptions: {
        enabled: true,
      },

      registerType: 'autoUpdate',

      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],

      manifest: {
        name: 'Quizz',

        short_name: 'Quizz',

        description: 'An app to lear swedish using quizzes',

        theme_color: '#ffffff',

        icons: [
          {
            src: 'manifest-icon-192.maskable.png',

            sizes: '192x192',

            type: 'image/png',
          },
          {
            src: 'manifest-icon-512.maskable.png',

            sizes: '512x512',

            type: 'image/png',
          },
        ],
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination === 'style' ||
              request.destination === 'script' ||
              request.destination === 'worker',

            handler: 'StaleWhileRevalidate',

            options: {
              cacheName: 'static-resources',

              expiration: {
                maxEntries: 50,

                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'image',

            handler: 'CacheFirst',

            options: {
              cacheName: 'images',

              expiration: {
                maxEntries: 100,

                maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
              },
            },
          },
        ],
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
