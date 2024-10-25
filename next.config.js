const { withContentlayer } = require('next-contentlayer2')

// import("./process.env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me'
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com'
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

module.exports = withContentlayer(nextConfig)
