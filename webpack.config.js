const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
        {
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }
      ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/screens/canvas/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'index.css'
    }),
  ],
};
