const config = require("./webpack.base");
const merge = require("webpack-merge");

const Visualizer = require("webpack-visualizer-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/**
 * Prod configuration
 */
module.exports = merge(config, {
  watch: false,
  devtool: false,
  mode: "production",
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 1
    },
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: { hints: false },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: process.cwd()
    }),
    new Visualizer()
  ]
});
