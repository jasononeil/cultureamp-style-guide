# Culture Amp’s Component Library and Living Style Guide

## Using components in your project

Because our components are styled with [CSS Modules][css-modules], consuming them in your project isn’t as simple as you might expect. If you simply imported pre-compiled components from an NPM package, you’d either get the styles for those components embedded in the compiled JavaScript, which is not how we prefer to deliver our stylesheets, or you would have to import the compiled components and their compiled styles separately.

To provide a simpler developer experience, this package exposes a Webpack configuration decorator, which makes the source JavaScript modules for the components (complete with their references to their CSS modules) available to the host project's Webpack build.

### Webpack 2.x

TODO. Let us know if you need this!

### Webpack 1.x

Decorate your Webpack config:

```js
const decorateWithStyleGuide = require('cultureamp-style-guide/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('[name]-[hash].bundle.css');

const config = {
  ⋮ // Webpack config
};

module.exports = decorateWithStyleGuide(config, {
  // Pass your ExtractTextPlugin instance to the decorator
  extractTextPlugin: extractCss
});
```

## Viewing the Living Style Guide

Visit the living style guide at TODO.

Alternatively, build it yourself:

### Build Instructions

1.  Ensure you have Ruby<sup id="fn1">[1](#ruby)</sup>, [Bundler][bundler], NodeJS<sup id="fn2">[2](#nodejs)</sup> and [Yarn][yarn] installed.
2.  Install Ruby dependencies in the `guide` subdirectory:
```
cd guide && bundle install
```
3.  Back in the project root, install JavaScript dependencies:
```
cd .. && yarn
```
4.  Build the guide:
```
yarn build
```
and find the built site in `guide/dist`.

  Alternatively, run the development server:
```
yarn serve-watch
```
and access the site on <http://localhost:4000/>.

---

<small><sup id="ruby">[1](#fn1)</sup>You should use a Ruby version manager such as [rbenv][rbenv] to install and use automatically the version of Ruby specified in `guide/.ruby-version`.</small>

<small><sup id="nodejs">[2](#fn2)</sup>You should use [NVM][nvm] to install automatically the version of NodeJS specified in `.nvmrc`, and consider using [nvm-auto][nvm-auto] to switch to it automatically when working in this project.</small>

[bundler]: https://bundler.io/
[css-modules]: https://github.com/css-modules/css-modules
[nvm]: http://nvm.sh/
[nvm-auto]: https://github.com/jsdf/nvm_auto
[rbenv]: https://github.com/rbenv/rbenv
[yarn]: https://yarnpkg.com/
