const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENABLE_BUNDLE_ANALYSER = false;

const { config, paths } = require('./base.config');

module.exports = merge(config, {
  entry: {
    main: paths.appDirectory + '/index.js',
  },

  output: {
    publicPath: './times-airpollution-schools/',
  },

  performance: {
    hints: 'warning',
    maxEntrypointSize: 250000,
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../templates/component.html'),
        to: path.resolve(
          __dirname,
          '../dist/times-airpollution-schools/times-airpollution-schools.html'
        ),
      },
      {
        from: path.resolve(__dirname, '../templates/index.html'),
        to: path.resolve(__dirname, '../dist/index.html'),
      },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    ...(ENABLE_BUNDLE_ANALYSER ? [new BundleAnalyzerPlugin()] : []),
  ],
});
