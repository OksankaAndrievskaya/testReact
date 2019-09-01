const local = require("./../env/local.json");
const config = require("./../env/" + process.env.config + ".json");
const merge = require("deepmerge");

/**
 * Root path
 */
exports.root = pathname => require("path").join(__dirname, "../" + pathname);

/**
 * Get merged configuration
 */
exports.getConfig = () =>
  process.env.isLocal == "true" ? merge(config, local) : config;
