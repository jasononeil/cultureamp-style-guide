var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'assets/javascripts/'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'ca-ui': path.resolve(__dirname, '..'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { loose: true }], 'react', 'stage-2'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader?modules=true' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
};
