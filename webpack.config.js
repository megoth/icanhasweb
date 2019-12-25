var path = require('path')

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/scripts'),
  entry: {
    cv: './cv.js'
  },
  output: {
    path: path.join(__dirname, '/contents/scripts'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
}
