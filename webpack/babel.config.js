module.exports = {
  babelrc: false,
  presets: [['es2015', { modules: false }], 'react'],
  plugins: [
    'add-react-displayname',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
};
