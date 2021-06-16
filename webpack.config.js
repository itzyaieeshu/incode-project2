const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    home: ["./assets/js/app.js", "./assets/scss/_style.scss"],
  },
  mode: "production",
  output: {
    path: `${__dirname}/assets/dist`,
    filename: "js/bundle.js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: ["url-loader"],
      },
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
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: null,
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};
