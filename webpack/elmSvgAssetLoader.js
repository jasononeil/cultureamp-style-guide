const loaderUtils = require('loader-utils');
const babel = require('babel-core');
const { default: generate } = require('babel-generator');

const loader = function(source, inputSourceMap) {
  const config = loaderUtils.getOptions(this) || {};

  config.module = config['module'] || 'Icon.SvgAsset';
  config.tagger = config['tagger'] || 'svgAsset';

  const packageName = config['package'] || 'user/project';
  const taggerName =
    '_' +
    [
      packageName.replace(/-/g, '_').replace(/\//g, '$'),
      config.module.replace(/\./g, '_'),
      config.tagger,
    ].join('$');

  const transformerOptions = {
    taggerName: taggerName,
    localPath: config.localPath,
  };

  const webpackRemainingChain = loaderUtils
    .getRemainingRequest(this)
    .split('!');
  const filename = webpackRemainingChain[webpackRemainingChain.length - 1];
  const babelOptions = {
    inputSourceMap: inputSourceMap,
    sourceRoot: process.cwd(),
    filename: filename,
    compact: false,
    babelrc: false,
  };

  const result = transform(source, this, transformerOptions, babelOptions);

  this.callback(null, result.code, result.map);
};

function transform(source, loaderContext, transformerOptions, babelOptions) {
  babelOptions.plugins = [
    svgAssetTransformer(loaderContext, transformerOptions),
  ];

  const { code, map } = babel.transform(source, babelOptions);

  if (map && (!map.sourcesContent || !map.sourcesContent.length)) {
    map.sourcesContent = [source];
  }

  return { code, map };
}

function svgAssetTransformer(loaderContext, options) {
  return function plugin({ types: t }) {
    return {
      visitor: {
        CallExpression: callExpressionVisitor(t, loaderContext, options),
      },
    };
  };
}

const REPLACED_NODE = Symbol('elmSvgAssetLoaderReplaced');

function callExpressionVisitor(t, loaderContext, options) {
  return function visitor(path) {
    // avoid infinite recursion
    if (path.node[REPLACED_NODE]) {
      return;
    }

    // look for:
    //
    //     <taggerName>("icon.svg");
    if (
      !(
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === options.taggerName
      )
    )
      return;

    // replace with require("icon.svg").default
    const replacement = t.memberExpression(
      t.callExpression(t.Identifier('require'), [path.node.arguments[0]]),
      t.Identifier('default')
    );

    replacement[REPLACED_NODE] = true;

    path.replaceWith(replacement);
  };
}

module.exports = loader;
