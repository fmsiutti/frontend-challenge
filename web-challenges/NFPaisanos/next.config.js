/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  dynamicStartUrl: false,
  cacheStartUrl: false,
  buildExcludes: [/api\/.*$/],
  fallbacks: {
    document: '/_offline',
    image: '/placeholder.png'
  }
})

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
  },

}

module.exports = withPWA(withImages(nextConfig))
