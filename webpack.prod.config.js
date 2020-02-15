const path = require("path");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
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
    path: dist
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LitElement-Starter",
      filename: "index.html",
      template: "src/index.html",
      alwaysWriteToDisk: true,
      minify: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "dist")
    })
    // new BrotliPlugin({
    //   asset: "[path].br[query]",
    //   test: /\.(js|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    // new BundleAnalyzerPlugin()
  ]
};
