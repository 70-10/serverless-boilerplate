const path = require("path");
// eslint-disable-next-line import/no-unresolved
const slsw = require("serverless-webpack");
const config = require("config");
const fs = require("fs");
const configFilePath = path.resolve(__dirname, "config.json");
fs.writeFileSync(configFilePath, JSON.stringify(config));

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      config: configFilePath,
    },
  },
};
