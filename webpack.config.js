const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    path.resolve(__dirname, "./src/js"),
    path.resolve(__dirname, "./src/scss/index.scss"),
  ],
  output: {
    filename: "webpack.bundle.js",
    path: path.resolve(__dirname, "dist/arquivos"),
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist/arquivos"),
    },
    hot: true,
    compress: false,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "webpack.bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
  ],
};
