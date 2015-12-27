var config = require('../webpack.config.js');
var _ = require('underscore');
var webpack = require('webpack');

module.exports = {
  'default': _({}).extend(config, {
    devtool: 'source-map'
  }),
  'prod': _({}).extend(config, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
};