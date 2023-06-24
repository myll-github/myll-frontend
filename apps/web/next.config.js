// eslint-disable-next-line turbo/no-undeclared-env-vars
const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: './public',
  disable: !prod,
})

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';
`

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

  async headers() {
    return [
      {
        source: '/:path*',
        // nginx 쓰면 기본적으로 제공해주긴 함
        headers: [
          /*
            This header helps prevent cross-site scripting (XSS), 
            clickjacking and other code injection attacks. 
            Content Security Policy (CSP) can specify allowed origins for content including scripts, stylesheets, 
            images, fonts, objects, media (audio, video), iframes, and more.
          */
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },

          /*
             it provide protection for older web browsers that don't support CSP.
          */
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          /*
            This header indicates whether 
            the site should be allowed to be displayed within an iframe.
            This header has been superseded by CSP's 
            frame-ancestors option, which has better support in modern browsers
          */
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          /*
            This is an extended header proposed by Microsoft,
            which restricts the interpretation to beyond the MIME types
            sent by the web server as a defense against cross-site scripting.
          */
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          /*
            refererer 정책
            When using HTTPS, the full address is retained if the websites are the same, 
            and only the domain address is retained if they are different.
            For websites using HTTP, the address is not retained.
          */
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
})
