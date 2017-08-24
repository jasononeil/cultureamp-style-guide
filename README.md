# Kaizen<br><sub>*Culture Amp’s Component Library and Living Style Guide*</sub>

## Viewing the Living Style Guide

Visit the living style guide at <https://cultureamp.github.io/cultureamp-style-guide>.

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
4.  Run the guide locally:
```
yarn start
```
and access the site on <http://localhost:4000/>.

  To build a production-ready version of the site’s static files:
```
yarn build
```
and find the built site in `guide/dist`.

  To build and deploy to GitHub Pages:
```
yarn gh-pages
```

## Using components in your project

Because our components are styled with [CSS Modules][css-modules], consuming them in your project isn’t as simple as you might expect. If you simply imported pre-compiled components from an NPM package, you’d either get the styles for those components embedded in the compiled JavaScript, which is not how we prefer to deliver our stylesheets, or you would have to import the compiled components and their compiled styles separately.

To provide a simpler developer experience, this package exposes a Webpack configuration decorator, which makes the source JavaScript modules for the components (complete with their references to their CSS modules, SVG symbols, etc.) available to the host project's Webpack build.

Decorate your Webpack config, passing your `ExtractTextPlugin` instance into the decorator for it to use to output CSS:

```js
const decorateWithStyleGuide = require('cultureamp-style-guide/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name]-[hash].bundle.css'
});

const webpackConfig = {
  ⋮
  module: {
    rules: [
      ⋮,
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          ⋮
        }),
      }
    ],
  },
  plugins: [
    ⋮
    extractTextPlugin,
  ],
};

module.exports = decorateWithStyleGuide(webpackConfig, {
  // Pass your ExtractTextPlugin instance to the decorator
  extractTextPlugin: extractTextPlugin
});
```

### Importing Elm Components

We do not yet publish Kaizen as an Elm package. Instead, the Elm components may
be imported from the cultureamp-style-guide NPM module.

To do this, your host project's elm-package.json file must include
node_modules/cultureamp-style-guide/components in its `"source-directories"`
list:

```json
{
    "version": "1.0.0",
    "summary": "helpful summary of your project, less than 80 characters",
    "repository": "https://github.com/user/project.git",
    "license": "BSD3",
    "source-directories": [
        ⋮
        "node_modules/cultureamp-style-guide/components"
    ],
```

The component modules may then be imported directly in any of your project's Elm
modules:

```elm
import Html
import Icon.Icon as Icon

view =
    Html.div []
        [ Icon.view
            -- arguments
        ]
```

### Importing React Components

React components may be imported from the cultureamp-style-guide module, and
then used in other React components. Their stylesheets and SVG dependencies will
be imported automatically thanks to the Webpack configuration decorator above.

```js
import React from 'react';
import Button from 'cultureamp-style-guide/components/Button/Button';

export default function MyComponent(props) {
  return <div><Button/></div>;
}
```

**Warning:** You might be tempted to try importing multiple components like this:

```js
import { Button, Card } from 'cultureamp-style-guide/components';
```

The Culture Amp Style Guide does not support this (the components directory does
not contain an index.js) because Webpack does not support eliminating the unused
components from this type of import. See
[webpack/webpack#2867](https://github.com/webpack/webpack/issues/2867) for
many examples of people struggling with this.

---

<small><sup id="ruby">[1](#fn1)</sup>You should use a Ruby version manager such as [rbenv][rbenv] to install and use automatically the version of Ruby specified in `guide/.ruby-version`.</small>

<small><sup id="nodejs">[2](#fn2)</sup>You should use [NVM][nvm] to install automatically the version of NodeJS specified in `.nvmrc`, and consider using [nvm-auto][nvm-auto] to switch to it automatically when working in this project.</small>

[bundler]: https://bundler.io/
[css-modules]: https://github.com/css-modules/css-modules
[nvm]: http://nvm.sh/
[nvm-auto]: https://github.com/jsdf/nvm_auto
[rbenv]: https://github.com/rbenv/rbenv
[yarn]: https://yarnpkg.com/
