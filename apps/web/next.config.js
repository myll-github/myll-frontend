/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: './public',
})
require('dotenv').config()

module.exports = withPWA({
  env: {
    KAKAO_CLIENT_KEY: process.env.KAKAO_CLIENT_KEY,
    KAKAO_LOGIN_REDIRECT_URL: process.env.KAKAO_LOGIN_REDIRECT_URL,
  },
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
