/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    }
  },
})
