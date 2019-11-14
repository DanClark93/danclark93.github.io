const path = require('path');

const paths = {
  appDirectory: path.resolve(__dirname, '../src'),
  distDirectory: path.resolve(__dirname, '../dist/times-airpollution-schools'),
  publicDirectory: '/',
};

const config = {
  output: {
    path: paths.distDirectory,
    filename: 'index.js',
    publicPath: paths.publicDirectory,
    libraryTarget: 'umd',
  },

  context: path.resolve(__dirname, '../'),

  mode: 'production',

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
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [],
};

module.exports = {
  config,
  paths,
};
