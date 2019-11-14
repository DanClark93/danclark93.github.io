const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { base, paths } = require('./base.config');

const config = _.merge(base, {
  entry: {
    main: paths.appDirectory + '/_server.js',
  },

  output: {
    publicPath:
      'https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/public/takeover-pages/armistice-end-first-world-war-ww1/',
  },

  performance: {
    hints: 'warning',
    maxEntrypointSize: 250000,
  },
});

config.module.rules.push({
  test: /\.js$/,
  include: [
    path.resolve('app'),
    path.resolve('node_modules/preact-compat/src'),
  ],
  loader: 'babel-loader',
});

// Add CSS loader
config.module.rules.push({
  test: /\.scss/i,
  exclude: /(node_modules)/,
  loaders: [
    'isomorphic-style-loader',
    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
    'sass-loader',
  ],
});

// Push CleanWebpackPlugin
config.plugins.push(
  new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') })
);

// Push static site generation
config.plugins.push(
  new StaticSiteGeneratorPlugin('main', ['./index.html'], { output: 'html' })
);
config.plugins.push(
  new StaticSiteGeneratorPlugin('main', ['./article.xml.html'], {
    output: 'article-xml',
  })
);
config.plugins.push(
  new StaticSiteGeneratorPlugin('main', ['./component.xml.html'], {
    output: 'component-xml',
  })
);

// Push production definition (for React)
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })
);

//config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
