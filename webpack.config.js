const path = require("path");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

module.exports = {
  //input output
  name: "express-server",
  entry: "./src/index.ts",
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  //.extenciones
  resolve: {
    extensions: [".ts", ".js"],
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
