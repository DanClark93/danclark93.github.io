const path = require('path');
const webpackGenerator = require('@times-visuals/times-harness');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { NODE_ENV } = process.env;

const componentTemplate = require('./src/component-template');

const config = webpackGenerator(
  './src/index.js',
  {
    baseDirectory: path.resolve(__dirname, './src'),
    distDirectory: path.resolve(
      __dirname,
      NODE_ENV === 'prod' ? './dist' : './.tmp'
    ),
  },
  'times-boris-bot',
  componentTemplate,
  NODE_ENV === 'prod' ? 'production' : 'development'
);

// config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];

module.exports = config;
