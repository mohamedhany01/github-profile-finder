const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration}*/

const productionConfig = {
  mode: "production",
};

module.exports = merge(common, productionConfig);
