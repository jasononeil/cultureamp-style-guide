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
  let svgoConf = require('cultureamp-style-guide/webpack/svgo.config.js');

  // Note: the SVGO Conf has a regular expression, which can't be used with JSON.stringify.
  // Here we replace it with a plain string, which works well enough for now.
  let convertColorsPlugin = svgoConf.plugins.find(
    plugin => plugin.convertColors
  );
  convertColorsPlugin.convertColors.currentColor = '#000000';

  let spriteLoaderConf = {
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
    },
    mdConfig = {
      passElementProps: true,
      markdownItPlugins: [
        require.resolve('markdown-it-anchor'),
        require.resolve('markdown-it-table'),
        [
          require.resolve('markdown-it-table-of-contents'),
          { includeLevel: [2, 3, 4] },
        ],
      ],
    };
  config.loader('markdown-component-loader', {
    test: /\.mdx$/i,
    loaders: [
      'babel-loader?' + JSON.stringify(babelConfig),
      require.resolve('./src/webpack-util/markdownWrapper.js'),
      'markdown-component-loader?' + JSON.stringify(mdConfig),
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
