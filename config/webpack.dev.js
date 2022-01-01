const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

/** @type {import('webpack').Configuration}*/

const developmentConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../src"),
    },
    open: {
      app: {
        name: "firefox",
        // arguments: ['--incognito', '--new-window'],
      },
    },
    // port: 5000,
    compress: true,
    hot: true,
    liveReload: false, // set false to make HMR works
    // historyApiFallback: true, // This solve Not found problem : https://stackoverflow.com/questions/40332753/react-router-with-browserrouter-browserhistory-doesnt-work-on-refresh/40338808
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: ".env",
    }),
  ],
};

module.exports = merge(common, developmentConfig);
