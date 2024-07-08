/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/(.+)',
  //       destination: '/api/check',
  //       permanent: true,
  //     },
  //     {
  //       source: '/(.+)',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig
