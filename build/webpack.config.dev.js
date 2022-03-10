"use strict";

const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWepbackPluglin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  mode: "production",
  entry: ["./src/app.js"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.styl(us)?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: ["vue-loader", "vue-svg-loader"],
      },
      {
        test: /\.(jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWepbackPluglin({
      filename: "index.html",
      template: "index.html",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
