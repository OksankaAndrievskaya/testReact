const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.dev");
const { root, getConfig } = require("./webpack.js");

module.exports = merge(config, {
  devServer: {
    inline: true,
    quiet: true,
    historyApiFallback: true,
    host: "localhost",
    port: getConfig().port,
    contentBase: root("dist"),
    publicPath: "/"
  },

  plugins: [new webpack.NamedModulesPlugin()]
});
