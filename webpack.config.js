var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: __dirname + "/scripts",
    entry: {
      cv: './cv.webpack.js',
      global: './global.webpack.js'
    },
    output: {
        path: __dirname + "/build/scripts",
        filename: "[name].bundle.js",
    },
    plugins: [
      new CommonsChunkPlugin("common.bundle.js")
    ]
};