const config = require("./webpack.base");
const merge = require("webpack-merge");
const { root } = require("./webpack");

delete config.entry;

module.exports = merge(config, {
  entry: [root("src/vendor.ts")]
});
