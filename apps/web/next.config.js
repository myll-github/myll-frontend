module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  sassOptions: {
    fiber: false,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}
