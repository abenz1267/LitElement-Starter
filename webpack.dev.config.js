const path = require("path");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@store": path.resolve("./src/store"),
      "@actions": path.resolve("./src/store/actions"),
      "@reducers": path.resolve("./src/store/reducers"),
      "@types": path.resolve("./src/store/types")
    }
  },
  output: {
    filename: "bundle.js",
    path: dist,
    publicPath: "/"
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 8080,
    host: "0.0.0.0",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LitElement-Starter",
      filename: "index.html",
      template: "src/index.html",
      alwaysWriteToDisk: true,
      minify: false
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "dist")
    })
  ]
};
