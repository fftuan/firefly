//引入需要的模块
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const config = {
  devtool: 'eval',
  //入口文件
  entry: {
    play: './src/play/entry.js', //单个文件入口
    list: './src/index/entry.js',
    commons: ['jquery'] //公共文件
  },
  //编译后输出文件
  output: {
    path: path.resolve(__dirname, 'dist'), //输出文件夹
    filename: 'js/[name]-[hash:8].js', //输出文件名,
    // publicPath: 'font'
  },
  //本地服务器配置
  devServer: {
    contentBase: path.join(__dirname, "dist"), //基础引用地址
    compress: true, //使用gzip压缩
    port: 8080, //端口号
    //host: "0.0.0.0", //允许外部访问（然而我为什么访问不了。）
    // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")],
    //多个文件夹配置方式
    hot: true //热处理
  },
  //模块化
  module: {
    rules: [{
      test: /\.css$/, //匹配css
      // use: 'css-loader'
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader?id=css'
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?name=static/img/[name]-[hash:8].[ext]'
    },{
      test: /\.(woff|woff2)\??.*$/,
      loader: 'file-loader?name=/static/fonts/[name]-[hash:8].[ext]&minetype=application/font-woff'
    }, {
      test: /\.ttf\??.*$/,
      loader: 'file-loader?name=/static/fonts/[name]-[hash:8].[ext]&minetype=application/octet-stream'
    }, {
      test: /\.eot\??.*$/,
      loader: 'file-loader?name=/static/fonts/[name]-[hash:8].[ext]'
    }, {
      test: /\.svg\??.*$/,
      loader: 'file-loader?name=/static/fonts/[name]-[hash:8].[ext]&minetype=image/svg+xm'
    }]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({ //html注入文件插件
      filename: 'play.html', //文件名
      template: './src/play/play.html', //渲染模板
      chunks: ['play', 'commons'], //原型
      // inject: 'body' //注入位置
    }),
    new HtmlWebpackPlugin({
      filename: 'list.html',
      template: './src/list/list.html',
      chunks: ['list', 'commons'],
      // inject: 'body'
    }),
    new webpack.ProvidePlugin({ //？？？
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      lodash: 'lodash'
    }),
    new ExtractTextPlugin('static/css/[name]-[hash:8].css')
  ]
}

module.exports = config;
