/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    prependData: `@use 'src/styles/variables' as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amanogawa.fra1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
