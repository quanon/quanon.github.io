const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.(yml|yaml)$/,
        loaders: ['json-loader', 'yaml-loader'],
        exclude: /(node_modules)/
      });
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['../../theme.config$'] =
        path.join(__dirname, 'semantic-ui-theme/theme.config');
    },
    vendor: ['jquery', 'semantic-ui-css'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  script: [
    'jquery/dist/jquery.min.js',
    'semantic-ui-css/semantic.min.js'
  ],
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
