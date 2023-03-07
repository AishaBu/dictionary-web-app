const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/scripts/index.js"),
    bundleapi: path.resolve(__dirname, "src/scripts/dictionary-api.js"),
    bundlefont: path.resolve(__dirname, "src/scripts/switch-font-style.js"),
    bundlevariables: path.resolve(__dirname, "src/scripts/global-variables.js"),
    bundlemediaqueries: path.resolve(__dirname, "src/scripts/media-queries.js"),
    bundletoggletheme: path.resolve(__dirname, "src/scripts/toggle-theme.js"),
    bundledefaultword: path.resolve(__dirname, "src/scripts/default-word.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Dictionary Web App",
      inject: true,
      chunks: ["bundle"],
      filename: "index.html",
      template: "src/html/index.html",
    }),

    new Dotenv({
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    }),
  ],
};
