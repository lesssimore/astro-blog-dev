const withCSS = require('@zeit/next-css')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const nextSettings = {
  target: 'serverless',
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  pageExtensions: ['tsx'],
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_API_ACCESS_TOKEN: process.env.CONTENTFUL_API_ACCESS_TOKEN,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

module.exports = withCSS(nextSettings)
