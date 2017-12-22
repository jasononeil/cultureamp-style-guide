const path = require('path');

function modifyWebpackConfig(_ref, options) {
  var config = _ref.config,
    stage = _ref.stage;
  addSrcResolveRoot(config);
  if (stage === 'build-javascript' || stage === 'develop') {
    addSvgLoaders(config);
    addElmLoader(config);
  }
  addRawLoader(config);
  addMarkdownLoader(config);
  return config;
}

function addElmLoader(config) {
  config.loader('elm-webpack-loader', {
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    loaders: ['elm-css-modules-loader', 'elm-webpack-loader'],
  });
}

function addSvgLoaders(config) {
  var svgoConf = require('cultureamp-style-guide/webpack/svgo.config.js');
  var spriteLoaderConf = {
    symbolId: 'ca-icon-[name]',
    spriteModule: require.resolve('cultureamp-style-guide/util/svg-sprite.js'),
  };
  config.removeLoader('url-loader');
  config.loader('svg-sprite-loader', {
    test: /\.svg$/,
    loaders: [
      'svg-sprite-loader?' + JSON.stringify(spriteLoaderConf),
      'svgo-loader?' + JSON.stringify(svgoConf),
    ],
  });
}

function addRawLoader(config) {
  config.loader('raw-loader', {
    test: /\.md$/,
    loaders: ['raw-loader'],
  });
}

function addMarkdownLoader(config) {
  const babelConfig = {
    presets: ['env', 'stage-0', 'react'],
  };
  config.loader('markdown-component-loader', {
    test: /\.mdx$/i,
    loaders: [
      'babel-loader?' + JSON.stringify(babelConfig),
      'markdown-component-loader',
    ],
  });
}

function addSrcResolveRoot(config) {
  config.merge({
    resolve: {
      root: [path.resolve('node_modules'), path.resolve('src')],
    },
  });
}

exports.modifyWebpackConfig = modifyWebpackConfig;

exports.resolvableExtensions = function() {
  return ['.mdx'];
};
