const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', //入口
  output: { //出口
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: { //loader
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "vue$":"vue/dist/vue.esm.js"
    },
    extensions: [".vue",".js",".css",".less"]
  },
  plugins: [
    new webpack.BannerPlugin(`最终版权归zyp所有`), //js头部注释
    new HtmlWebpackPlugin({ //在dist内生成一个index.html
      template: 'index.html'
    }),
  ],
}