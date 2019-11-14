const _ = require('lodash');
const webpack = require('webpack');

const { base, paths } = require('./base.config');

const config = _.merge(base, {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    paths.appDirectory + '/_browser.js',
  ],

  output: {
    path: paths.appDirectory,
  },

  mode: 'development',

  devServer: {
    contentBase: paths.appDirectory,
    publicPath: paths.publicDirectory,
    open: true,
    port: 8000,
    hot: true,
  },

  devtool: 'inline-source-map',
});

// Add JS ESLint loader
config.module.rules.push({
  test: /\.js$/,
  exclude: /(node_modules)/,
  loader: 'eslint-loader',
  enforce: 'pre',
});

// Add JS loader
config.module.rules.push({
  test: /\.js$/,
  exclude: /(node_modules)/,
  loader: 'babel-loader',
});

// Add CSS loader
config.module.rules.push({
  test: /\.scss/i,
  exclude: /(node_modules)/,
  use: [
    'isomorphic-style-loader',
    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
    'sass-loader',
  ],
});

// enable HMR globally
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// prints more readable module names in the browser console on HMR updates)
config.plugins.push(new webpack.NamedModulesPlugin());

module.exports = config;
