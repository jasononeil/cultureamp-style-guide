const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const decorateWithStyleGuide = require('../webpack');

const extractTextPlugin = new ExtractTextPlugin('[name]-[hash].bundle.css', {
  disable: process.env.NODE_ENV === 'development',
});

module.exports = decorateWithStyleGuide(
  {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'assets/javascripts/'),
      filename: 'bundle.js',
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [['es2015', { loose: true }], 'react', 'stage-2'],
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: extractTextPlugin.extract(
            'style-loader',
            combineLoaders([
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
              },
            ])
          ),
        },
      ],
    },
    plugins: [extractTextPlugin],
  },
  { extractTextPlugin }
);
