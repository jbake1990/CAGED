import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Guitar Chord Progression',
        short_name: 'Guitar Chords',
        description: 'A guitar chord progression app using the CAGED system.',
        theme_color: '#6A4E23',
        background_color: '#212121',
        display: 'standalone',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
