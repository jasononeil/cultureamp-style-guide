# Culture Amp’s User Interface Component Library (ca-ui)

## Using components in your project

TODO

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
[nvm]: http://nvm.sh/
[nvm-auto]: https://github.com/jsdf/nvm_auto
[rbenv]: https://github.com/rbenv/rbenv
[yarn]: https://yarnpkg.com/
