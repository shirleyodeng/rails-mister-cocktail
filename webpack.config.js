var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        include: path.join(__dirname, 'app-js'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
