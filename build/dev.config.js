const merge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: './dist', //服务器的文件夹
    inline: true,  //是否实时
    port: "55296"
  }
})