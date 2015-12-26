var config = require('../webpack.config.js');
var _ = require('underscore');

module.exports = {
  'default': _({}).extend(config, {
  })
};