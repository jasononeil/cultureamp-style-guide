const styleGuideDecorator = require('cultureamp-style-guide/webpack');
const path = require('path');

exports.modifyWebpackConfig = function(_ref, options) {
  var config = _ref.config,
    stage = _ref.stage;
  addSvgLoaders(config);
  return config;
};

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
