const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'QUANON',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "QUANON's Page" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.0/semantic.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#563d7c' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['../../theme.config$'] =
        path.join(__dirname, 'semantic-ui-theme/theme.config');
    }
  },
  css: [
    'semantic-ui-less/semantic.less',
    '~assets/stylesheets/main.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: "QUANON's Page",
    lang: 'ja'
  }
};
