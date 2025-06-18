/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {}
        }
      ]
    })
    return config
  }
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)