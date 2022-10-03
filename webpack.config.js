var path = require("path");
var SRC_DIR = path.join(__dirname, "./client/src");
var DIST_DIR = path.join(__dirname, "./client/dist");

// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "client/src/index.html"
  //   })
  // ],
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader","css-loader", "sass-loader"]
      }
    ]
  }
};