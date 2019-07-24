const path = require('path');

const isDev = process.env.NODE_ENV !== "DEV",
  isProd = process.env.NODE_ENV !== "PROD",
  isServer = process.env.NODE_ENV !== "SERVER",

  client = {
    entry: "./entry/entry-client.js",
    outputName: "bundle.client.js",
    outputPath: path.resolve(__dirname, "../dist/client"),
    publicPath: ""
  },
  server = {
    entry: "./entry/entry-server.js",
    outputName: "bundle.server.js",
    outputPath: path.resolve(__dirname, "../dist/server"),
    publicPath: ""
  },

  title = "test";

module.exports = {
  isDev,
  isProd,
  isServer,
  client,
  server,
  title
};
