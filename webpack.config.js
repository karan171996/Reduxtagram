const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/main.jsx",
  devtool: "inline-source-map",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },
  devtool: "inline-source-map",
  devServer: { static: "./dist" },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss?$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  resolve: { extensions: [".jsx", ".ts", ".js"] },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
