var path = require('path');

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
    ],
  },
};
