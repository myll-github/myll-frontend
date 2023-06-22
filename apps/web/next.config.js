/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: './public',
})

module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ['ui'],

  sassOptions: {
    fiber: false,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
})
