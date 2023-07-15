/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    prependData: `@use 'src/styles/variables' as *;`,
  },
};

module.exports = nextConfig;
