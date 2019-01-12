const babelOptions = {
  presets: ['babel-preset-gatsby'],
  plugins: ['babel-plugin-emotion']
};

module.exports = require('babel-jest').createTransformer(babelOptions);
