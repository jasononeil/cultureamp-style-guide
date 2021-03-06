const loaderUtils = require('loader-utils');

/**
 * A webpack loader to transform SVG assets in Elm to Webpack require() calls.
 *
 * Searching for elm code:
 *  svgAsset "cultureamp-style-guide/icons/exclamation.svg"
 *
 * Which is compiled as JS code:
 *   _user$project$Icon_SvgAsset$svgAsset('cultureamp-style-guide/icons/exclamation.svg')
 *
 * We replace this with:
 *   require('cultureamp-style-guide/icons/exclamation.svg').default
 */
function loader(source, inputSourceMap) {
  const config = loaderUtils.getOptions(this) || {};
  config.module = config['module'] || 'Icon.SvgAsset';
  config.tagger = config['tagger'] || 'svgAsset';

  const packageName = config['package'] || 'user/project',
    taggerName =
      '_' +
      [
        packageName.replace(/-/g, '_').replace(/\//g, '$'),
        config.module.replace(/\./g, '_'),
        config.tagger,
      ].join('$'),
    escapedTaggerName = taggerName.replace(/\$/g, '\\$'),
    moduleNameCapture = "'([a-zA-Z-./]+)'",
    regexp = regexpForFunctionCall(escapedTaggerName, [moduleNameCapture]);

  return source.replace(regexp, "require('$1').default");
}

/**
 * Create a regular expression to match a function call.
 *
 * @param fnName The name of the function being called. Can include
 *  property access (eg `console.log`)
 * @param args An array of arguments we expect to find. Each of these
 *  can be a regular expression to match the expected type of argument, and can
 *  include capture groups.
 */
function regexpForFunctionCall(fnName, args) {
  const optionalWhitespace = '\\s*';
  const argumentParts = args.map(
    arg => optionalWhitespace + arg + optionalWhitespace
  );
  let parts = [fnName, '\\(', argumentParts.join(','), '\\)'];
  return new RegExp(parts.join(''), 'g');
}

module.exports = loader;
