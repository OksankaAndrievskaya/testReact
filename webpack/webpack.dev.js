const config = require("./webpack.base");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: 'development',
  devtool: "eval-source-map"
});
