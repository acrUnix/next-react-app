/** @type {import('next').NextConfig} */
const nextConfig = {
};

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pokeapi.co'
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com'
        },
      ],
    },
  }