/** @type {import('next').NextConfig} */
const path = require('path')
const {withContentlayer} = require('next-contentlayer')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `@import "@/styles/_variables.scss";`,
  },

  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/installation",
        permanent: true,
      },
      {
        source: "/docs/hooks",
        destination: "/docs/hooks/useClickOutside",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
