const path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
   plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/template.html'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.ts?$/, use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ] }
    ]
  },
  resolve: {
    extensions: [".ts",".js", ".json", ".jsx", ".css"],
  }
};