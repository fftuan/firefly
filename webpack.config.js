var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    utils: ['jquery', 'lodash']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  // devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: 'style!css',
        include: APP_PATH
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'firefly',
      template: path.resolve(APP_PATH, 'index.html'),
      chunks: ['app', 'utils'],
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      lodash: 'lodash'
    })
  ],
  resolve: {
    alias: {

    }
  }
};
