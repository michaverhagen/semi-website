
const path = require('path');

module.exports = {
  entry: {
    main: './js-src/main.js',
    formPage: './js-src/page-forms.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
