const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "@babel/polyfill",
    "./src/Client/index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/", //??
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    hot: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
