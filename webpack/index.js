const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const error = require('../util/error').default;

module.exports = decorateConfig;

function decorateConfig(config, options) {
  return [
    excludeStyleGuideFromLoaders,
    addPostCssPlugins,
    addStyleGuideLoaders,
    addStyleGuideAlias,
  ].reduce((decoratedConfig, decorator) => {
    return decorator(decoratedConfig, options);
  }, config);
}

function excludeStyleGuideFromLoaders(config, options) {
  return Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      loaders: config.module.loaders.map(excludeStyleGuideFromLoader),
    }),
  });
}

function excludeStyleGuideFromLoader(loaderConfig) {
  return Object.assign({}, loaderConfig, {
    exclude: styleGuidePaths().concat(loaderConfig.exclude || []),
  });
}

function addPostCssPlugins(config, options) {
  const styleGuidePlugins = [require('autoprefixer')()];

  const postcssPlugins = {
    [POSTCSS_STYLE_GUIDE_PACK]: styleGuidePlugins,
  };

  if (config.postcss) {
    postcssPlugins[POSTCSS_HOST_PROJECT_PACK] = typeof config.postcss ===
      'function'
      ? config.postcss()
      : config.postcss;

    config = applyPostcssLoaderPluginPack(config, POSTCSS_HOST_PROJECT_PACK);
  }

  return Object.assign({}, config, {
    postcss: () => postcssPlugins,
  });
}

const POSTCSS_STYLE_GUIDE_PACK = 'cultureamp-style-guide';
const POSTCSS_HOST_PROJECT_PACK = 'default';

function applyPostcssLoaderPluginPack(config, pluginPackName) {
  return Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      loaders: config.module.loaders.map(loaderEntry => {
        if (typeof loaderEntry.loader === 'string') {
          loaderEntry = Object.assign({}, loaderEntry, {
            loader: addPostcssPackToLoaderString(
              loaderEntry.loader,
              pluginPackName
            ),
          });
        }

        return loaderEntry;
      }),
    }),
  });
}

function addPostcssPackToLoaderString(loaderString, pluginPackName) {
  return loaderString
    .replace(
      /(postcss(-loader)?\?)/, // with existing query string
      `$1pack=${pluginPackName}&`
    )
    .replace(
      /(postcss(-loader)?(?!(-loader)?\?))/, // without existing query string
      `$1?pack=${pluginPackName}`
    );
}

function addStyleGuideLoaders(config, options) {
  return Object.assign({}, config, {
    module: Object.assign({}, config.module, {
      loaders: styleGuideLoaders(options).concat(config.module.loaders),
    }),
  });
}

function styleGuideLoaders(options) {
  return [jsLoader(options), cssLoader(options), svgLoader(options)];
}

function jsLoader() {
  return {
    test: /\.js$/,
    include: styleGuidePaths(),
    loader: require.resolve('babel-loader'),
    query: require('./babel.config.js'),
  };
}

function cssLoader(options) {
  return {
    test: /\.scss$/,
    include: styleGuidePaths(),
    // combineLoaders required to pass single loader string to ExtractTextPlugin
    loader: cssLoaderDeliveryDecorator(options)(
      combineLoaders([
        {
          loader: require.resolve('css-loader'),
          query: {
            modules: true,
            importLoaders: 2, // number of subsequent loaders to apply on `composes ... from`
            localIdentName: '[name]__[local]--[hash:base64:5]',
            sourceMap: true,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          query: {
            pack: POSTCSS_STYLE_GUIDE_PACK,
            sourceMap: true,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          query: {
            sourceMap: true,
          },
        },
      ])
    ),
  };
}

function cssLoaderDeliveryDecorator(options) {
  const extractTextPlugin = options && options.extractTextPlugin;

  if (extractTextPlugin == ExtractTextPlugin) {
    error(`
      When decorating your Webpack config with cultureamp-style-guide, you
      passed in \`ExtractTextPlugin\` (the constructor) rather than creating an
      instance with \`new ExtractTextPlugin(...)\` and passing that. An instance
      is required, because the style guide may use \`ExtractTextPlugin\` too, so
      both your project and the style guide must each create and configure their
      own instance(s) of the plugin separately. For help on how to do this,
      refer to the ExtractTextPlugin documentation:
      https://github.com/webpack/extract-text-webpack-plugin/tree/webpack-1
    `);
  }

  return extractTextPlugin
    ? extractTextPlugin.extract.bind(extractTextPlugin, 'style-loader')
    : loaderString => `${require.resolve('style-loader')}!${loaderString}`;
}

function svgLoader(options) {
  const svgSpriteConfig = 'symboldId=icon-[name]';
  const svgSpriteLoader = require.resolve('svg-sprite-loader');

  const svgoConfig = JSON.stringify(require('./svgo.config.js'));
  const svgoLoader = require.resolve('svgo-loader');

  return {
    test: /\.svg$/,
    include: styleGuidePaths(),
    loaders: [
      `${svgSpriteLoader}?${svgSpriteConfig}`,
      `${svgoLoader}?${svgoConfig}`,
    ],
  };
}

function addStyleGuideAlias(config, options) {
  const styleGuideAliases = {
    'cultureamp-style-guide': path.resolve(__dirname, '..'),
  };

  for (var alias in styleGuideAliases) {
    if (
      config.resolve &&
      config.resolve.alias &&
      config.resolve.alias[alias] &&
      config.resolve.alias[alias] !== styleGuideAliases[alias]
    ) {
      error(`
        Resolve alias '${alias}' is reserved for use by cultureamp-style-guide.
        Please use a different name.
      `);
    }
  }

  return Object.assign({}, config, {
    resolve: Object.assign({}, config.resolve, {
      alias: Object.assign({}, config.resolve.alias, styleGuideAliases),
    }),
  });
}

function styleGuidePaths() {
  module._styleGuidePaths = module._styleGuidePaths || [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../styles'),
    path.resolve(__dirname, '../icons'),
    path.resolve(__dirname, '../util'),
  ];

  return module._styleGuidePaths;
}
