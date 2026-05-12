import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lakshay Saini - Full Stack Developer',
    short_name: 'Lakshay Saini',
    description: 'Full Stack Developer specializing in React, Next.js, React Native, and Firebase',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
