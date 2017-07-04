const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
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
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false, loose: true }],
              'react',
              'stage-2',
            ],
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractTextPlugin().extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: () => [
                    require('autoprefixer')(),
                    require('postcss-normalize')(),
                  ],
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [extractTextPlugin(), new ManifestPlugin()],
  },
  { extractTextPlugin: extractTextPlugin() }
);

function extractTextPlugin() {
  return (arguments.callee.memoizedValue =
    arguments.callee.memoizedValue ||
    new ExtractTextPlugin({
      filename: '[name]-[hash].bundle.css',
      disable: isDevelopment(),
    }));
}

function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}
