const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const decorateWithStyleGuide = require('../webpack');

module.exports = decorateWithStyleGuide(
  {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'assets/'),
      filename: isDevelopment()
        ? '[name].bundle.js'
        : '[name]-[hash].bundle.js',
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
          loader: extractTextPlugin().extract(
            'style-loader',
            combineLoaders([
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                query: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                query: {
                  sourceMap: true,
                },
              },
            ])
          ),
        },
      ],
    },
    plugins: [extractTextPlugin(), new ManifestPlugin()],
    postcss: () => [autoprefixer, normalize],
  },
  { extractTextPlugin: extractTextPlugin() }
);

function extractTextPlugin() {
  return (arguments.callee.memoizedValue =
    arguments.callee.memoizedValue ||
    new ExtractTextPlugin('[name]-[hash].bundle.css', {
      disable: isDevelopment(),
    }));
}

function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}
