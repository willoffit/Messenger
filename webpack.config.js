const path = require('path');
const webpack = require("webpack");
const dev = process.env.NODE_ENV.trim() !== "production";
module.exports = {
  context: __dirname,
  entry: './frontend/messenger.jsx', 
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  }, plugins: dev ? [] : [
    new webpack.optimize.UglifyJsPlugin()
  ],
  target: "node",
  devtool: 'source-map'
};