var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(APP_PATH, 'index/index.js'),
    list: path.resolve(APP_PATH, './index/js/list.js'),
    utils: ['jquery', 'lodash']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: APP_PATH,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=15000'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff2'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=image/svg+xml'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'firefly',
      filename:'index.html',
      template: path.resolve(APP_PATH, 'index/index.html'),
      chunks: ['app', 'utils'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'firefly-list',
      filename:'list.html',
      template: path.resolve(APP_PATH, 'index/pages/list.html'),
      chunks: ['list'],
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