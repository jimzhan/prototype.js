const webpack = require('webpack');
const merge   = require('webpack-merge');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = require('./webpack.base');
const root = path.resolve(__dirname, '..');

module.exports = merge(config, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    open: true,
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    proxy: {
      '/': 'http://127.0.0.1:3001'
    },
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"develop"' }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'src/index.html'),
      inject: true
    }),
  ]
});