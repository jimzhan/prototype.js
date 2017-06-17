const resolve = require('path').resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const root = resolve(__dirname, '..');
const source = resolve(root, 'src/client');
const tests  = resolve(root, 'test');

const paths = {
  source: resolve(root, 'src/client'),
  test: resolve(root, 'test'),
}

module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  externals: {
    foundation: 'Foundation',
  },
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'styles': resolve(source, 'assets/styles'),
      '@components': resolve(source, 'components'),
      '@pages': resolve(source, 'pages'),
      '@images': resolve(source, 'assets/images'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [source, tests],
        options: { formatter: require('eslint-friendly-formatter') }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          }
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [source, tests],
      },
      { 
        test: /\.css$/, 
        loader: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      { 
        test: /\.scss$/, 
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}