const webpack = require('webpack');
const merge   = require('webpack-merge');
const path    = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.base');
const root = path.resolve(__dirname, '..');

module.exports = merge(config, {
  devtool: '#source-map',
  output: {
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[id].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"release"' }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'src/index.html'),
      hash: true,
      inject: 'body',
      chunkSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.resolve(root, 'node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(root, 'static')
      }
    ])
  ]
});