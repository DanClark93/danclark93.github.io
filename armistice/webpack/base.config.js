const path = require('path');

const paths = {
  appDirectory: path.resolve(__dirname, '../app'),
  distDirectory: path.resolve(__dirname, '../dist'),
  publicDirectory: '/',
};

const config = {
  output: {
    path: paths.distDirectory,
    filename: 'index.js',
    publicPath: paths.publicDirectory,
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  mode: 'production',

  context: path.resolve(__dirname, '../'),

  module: {
    rules: [
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader?name=assets/[hash].[ext]',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [],
};

module.exports = {
  base: config,
  paths: paths,
};
