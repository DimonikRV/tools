const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  constis;
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: ["babel-loader"],
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpg|png|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "[name].[ext]",
                outputPath: "images",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};
