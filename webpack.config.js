module.exports = {
    context: __dirname + "/scripts",
    entry: {
      cv: './cv.webpack.js'
    },
    output: {
        path: __dirname + "/contents/scripts",
        filename: "[name].bundle.js",
    },
    devtool: 'source-map'
};