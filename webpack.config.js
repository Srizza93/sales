const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWepbackPluglin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
  mode: "production",
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/app.js"),
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // devtool: "inline-source-map",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
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
        test: /\.(jpg|png)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWepbackPluglin({
      title: "Sales",
      chunks: ["main"],
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = (env, argv) => {
  // if (argv.mode === "development") {
  //   config.devtool = "inline-source-map";
  // }

  if (argv.mode === "production") {
    config.output.publicPath = "/sales/";
  }

  return config;
};
