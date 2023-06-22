/** @type {import('next').NextConfig} */

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

module.exports = withImages(nextConfig)
