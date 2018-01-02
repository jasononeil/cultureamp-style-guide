# Kaizen<br><sub>_Culture Amp’s Component Library and Living Style Guide_</sub>

## Viewing the Living Style Guide

Visit the living style guide at
<https://cultureamp.github.io/cultureamp-style-guide>.

Alternatively, build it yourself:

### Build Instructions

To start the local development server:

1. Ensure you have NodeJS<sup id="fn1">[1](#nodejs)</sup> and [Yarn][yarn]
   installed.
2. Install the dependencies: `bin/setup`
3. Run Gatsby local development server: `bin/gatsby`
4. View the site at http://localhost:8000

To deploy the site to Github pages:

1. Ensure you have [NodeJS](#nodejs) and [Yarn][yarn] installed.
2. Install the dependencies: `bin/setup`
3. Run `yarn deploy`

## Using components in your project

Because our components are styled with [CSS Modules][css-modules], consuming
them in your project isn’t as simple as you might expect. If you simply imported
pre-compiled components from an NPM package, you’d either get the styles for
those components embedded in the compiled JavaScript, which is not how we prefer
to deliver our stylesheets, or you would have to import the compiled components
and their compiled styles separately.

To provide a simpler developer experience, this package exposes a Webpack
configuration decorator, which makes the source JavaScript modules for the
components (complete with their references to their CSS modules, SVG symbols,
etc.) available to the host project's Webpack build.

Decorate your Webpack config, passing your `ExtractTextPlugin` instance into the
decorator for it to use to output CSS:

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

### Importing React Components

React components may be imported from the cultureamp-style-guide module, and
then used in other React components. Their stylesheets and SVG dependencies will
be imported automatically thanks to the Webpack configuration decorator above.

```js
import React from 'react';
import Button from 'cultureamp-style-guide/components/Button/Button';

export default function MyComponent(props) {
  return (
    <div>
      <Button />
    </div>
  );
}
```

**Warning:** You might be tempted to try importing multiple components like
this:

```js
import { Button, Card } from 'cultureamp-style-guide/components';
```

The Culture Amp Style Guide does not support this (the components directory does
not contain an index.js) because Webpack does not support eliminating the unused
components from this type of import. See
[webpack/webpack#2867](https://github.com/webpack/webpack/issues/2867) for many
examples of people struggling with this.

---

<small><sup id="nodejs">[1](#fn1)</sup>You should use [NVM][nvm] to install
automatically the version of NodeJS specified in `.nvmrc`, and consider using
[nvm-auto][nvm-auto] to switch to it automatically when working in this
project.</small>

[bundler]: https://bundler.io/
[css-modules]: https://github.com/css-modules/css-modules
[nvm]: http://nvm.sh/
[nvm-auto]: https://github.com/jsdf/nvm_auto
[rbenv]: https://github.com/rbenv/rbenv
[yarn]: https://yarnpkg.com/
