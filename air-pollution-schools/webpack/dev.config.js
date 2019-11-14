const webpack = require('webpack');
const merge = require('webpack-merge');

const { config, paths } = require('./base.config');

module.exports = merge(config, {
  entry: [paths.appDirectory + '/index.js'],

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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
