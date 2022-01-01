const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

/** @type {import('webpack').Configuration}*/

module.exports = {
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: [path.resolve(__dirname, "../src/fonts")],
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: [path.resolve(__dirname, "../src/images")],
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./src/favicon.png",
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "GITHUB_API_USERS":JSON.stringify(process.env.GITHUB_API_USERS),
      },
    }),
  ],
  /*
    Choose a style of source mapping to enhance the debugging process. 
    These values can affect build and rebuild speed dramatically.
  */
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
    clean: true,
  },
};
